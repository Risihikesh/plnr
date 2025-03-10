"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const recoverPassSchema = z
    .object({
        email: z.string().email({
            message: "Invalid email",
        }),
    })

export type recoverPassSchemaType = z.infer<typeof recoverPassSchema>;
    

const RecoverPasswordForm = () => {

    const { toast } = useToast();

     const {
         register,
         handleSubmit,
         reset,
         formState: { errors, isSubmitting },
     } = useForm<recoverPassSchemaType>({
         resolver: zodResolver(recoverPassSchema),
     });
    

    const onSubmit = async (data: {
        email: string;
    }) => {
        try {
            const responce = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                }),
            });
            if (responce.ok) {
                reset();
                toast({
                    description: "An email has been sent to you with verification link. Please click on it to reset your password",
                    variant: "info",
                });

            } else {
                const result = await responce.json();
                toast({
                    description: result.message,
                    variant: "danger",
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-col-center gap-[20px]"
        >
            <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
                <div
                    className={`input-container ${
                        errors.email
                            ? "input-container-error"
                            : "input-container-no-error"
                    }`}
                >
                    <img src="/mail.svg" alt="mail-icon" />
                    <input
                        placeholder={"Email"}
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                </div>
                {errors.email && (
                    <p className="input-error-description">
                        {errors.email.message}
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

export default RecoverPasswordForm;
