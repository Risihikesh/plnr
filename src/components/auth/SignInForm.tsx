"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordVisiblity from "@/components/shared/PasswordVisiblity";
import { handleCredentialsSignIn } from "@/action";
import { toast, useToast } from "@/hooks/use-toast";

const signInSchema = z
    .object({
        email: z.string().email({ message: "Invalid email" }),
        password: z.string()
    }).refine(
        (data) => data.password.length !== 0,
        {
            message: "Password is required",
            path: ["password"],
        }
).refine((data) => data.email.length !== 0, {
    message: "Email is required",
    path: ["email"],
})

export type signInSchemaType = z.infer<typeof signInSchema>;

const SignInForm = () => {

    const router = useRouter();
    
    const [showPassword, setShowPassword] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<signInSchemaType>({
        resolver: zodResolver(signInSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                const message = await handleCredentialsSignIn(data);
                if (message.success) {
                    router.push('/');
                    toast({
                        description: message.message,
                    })
                }
                else {
                    toast({
                        variant: "danger",
                        description: message.message,
                    })
                }
            })}
            className="flex-col-center gap-[16px]"
        >
            {/* Email Field */}
            <div className="flex flex-col gap-[8px] w-full max-w-[400px]">
                <div className="flex flex-col gap-[8px]">
                    <div
                        className={`input-container ${
                            errors.email
                                ? "input-container-error"
                                : "input-container-no-error"
                        }`}
                    >
                        <img src="/mail.svg" alt="mail-icon" />
                        <input placeholder="Email" {...register("email", {
                            required: "Email is required",
                        })} />
                    </div>
                </div>
                {errors.email && (
                    <p className="input-error-description">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                <div className="flex flex-col gap-[8px]">
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
                            placeholder="Password"
                            {...register("password")}
                        />
                        <PasswordVisiblity
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                        />
                    </div>
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

            <Button
                type="submit"
                className="w-full py-[10px] text-lg h-[40px] font-semibold rounded-[2px]"
                disabled={isSubmitting}
            >
                {isSubmitting && (
                    <img
                        src="/Loader.svg"
                        alt="spinner"
                        className="w-[25px] rotate"
                    />
                 )}
                {isSubmitting ? "" : "Sign In"}
            </Button>
        </form>
    );
};

export default SignInForm;
