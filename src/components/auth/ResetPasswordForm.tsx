"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordVisiblity from "@/components/shared/PasswordVisiblity";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const resetPasswordSchema = z
    .object({
        password: z.string().min(8, {
            message: `
At least 8 chars ::\n
> Contains at least one digit\n
> Contains at least one lower alpha char and one upper alpha char\n
> Contains at least one char within a set of special chars (@#%$^ etc.)\n
> Does not contain space, tab, etc.
            `,
        }),
        confirmPassword: z.string(),
    })
    .refine(
        (data) => {
            const regex = new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
            );
            return regex.test(data.password);
        },
        {
            message: `
At least 8 chars ::\n
> Contains at least one digit\n
> Contains at least one lower alpha char and one upper alpha char\n
> Contains at least one char within a set of special chars (@#%$^ etc.)\n
> Does not contain space, tab, etc.
            `,
            path: ["password"],
        }
    )
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password must be same",
        path: ["confirmPassword"],
    });

type resetPasswordSchema = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
    const router = useRouter();
    const { toast } = useToast();

    const params = useSearchParams();
    const token = params.get("token");
    console.log(token);

    const [showPassword, setShowPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<resetPasswordSchema>({
        resolver: zodResolver(resetPasswordSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                if (token) {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ ...data, token }),
                        }
                    );
                    if (response.ok) {
                        toast({
                            description: "Password Reset Successfully",
                        });
                        router.push("/signin");
                    } else {
                        const result = await response.json();
                        toast({
                            description: result.message,
                            variant: "danger",
                        });
                    }
                }
            })}
            className="flex-col-center gap-[16px]"
        >
            {/* Password Field */}
            <div className="flex flex-col gap-[8px] w-full">
                <div
                    className={`input-container ${
                        errors.password
                            ? "input-container-error"
                            : "input-container-no-error"
                    }`}
                >
                    <img src="/lock-icon.svg" alt="lock-icon" />
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        {...register("password")}
                    />
                    <PasswordVisiblity
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </div>
                {errors.password && (
                    <div className="input-error-description">
                        {errors.password.message &&
                            errors.password.message
                                .split("\n")
                                .map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                    <div
                        className={`input-container ${
                            errors.confirmPassword
                                ? "input-container-error"
                                : "input-container-no-error"
                        }`}
                    >
                        <img src="/lock-icon.svg" alt="lock-icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            {...register("confirmPassword")}
                        />
                        <PasswordVisiblity
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                    </div>
                </div>
                {errors.confirmPassword && (
                    <p className="input-error-description">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full py-[10px] text-lg h-[50px] font-semibold rounded-[2px]"
                disabled={isSubmitting}
            >
                {isSubmitting && (
                    <img
                        src="/Loader.svg"
                        alt="spinner"
                        className="w-[25px] rotate"
                    />
                )}
                {isSubmitting ? "" : "Submit"}
            </Button>
        </form>
    );
};

export default ResetPasswordForm;
