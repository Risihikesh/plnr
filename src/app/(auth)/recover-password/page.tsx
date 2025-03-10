import React from "react";
import Link from "next/link";
import RecoverPasswordForm from "@/components/auth/RecoverPasswordForm";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();

const RecoverPassword = async () => {
   
    const session = await auth();
    if (session?.user) {
        redirect("/");
    }
        

    return (
        <div className="w-full sm:w-[500px] x:w-[350px] xl:w-[439px]">
            <h1 className="text-[24px] w-full text-center font-bold text-primary mb-[12px]">
                Recover your password
            </h1>
            <p className="text-[16px] w-full text-center leading-[24px] text-[#4B5563] mb-[32px]">
                Enter the email address associated with your account. You will
                receive a password reset link.
            </p>

            <RecoverPasswordForm />
            
            <p className="w-full text-center leading-[24px] text-[16px] mt-2">
                Remember Password?&nbsp;
                <Link
                    href={"/signin"}
                    className="text-primary font-semibold hover:underline"
                >
                    Log In
                </Link>
            </p>
        </div>
    );
};

export default RecoverPassword;
