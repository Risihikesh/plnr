import React from "react";
import Link from "next/link";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();

const ResetPassword = async () => {

    const session = await auth();
    if (session?.user) {
        redirect("/");
    }
    
    
    return (
        <div className="w-full sm:w-[500px] x:w-[350px] xl:w-[439px]">
            <h1 className="text-[24px] w-full text-center font-bold text-primary mb-[12px]">
                Reset Password
            </h1>
            <p className="text-[16px] w-full text-center leading-[24px] text-[#4B5563] mb-[32px] font-normal cursor-default">
                Set a new password
            </p>

            <ResetPasswordForm />

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

export default ResetPassword;
