import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/auth/SignUpForm";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();

const SignUp = async () => {

    const session = await auth();

    if (session?.user) {
        redirect("/");
    }
    
    
    return (
        <div className="w-full sm:w-[500px] x:w-[350px]">
            <div className="flex-center mb-[25px] w-full">
                <Link
                    href={"/signup"}
                    className="flex-1 rounded-none h-[45px] text-lg font-semibold  bg-primary  flex-center text-background"
                >
                    SIGN UP
                </Link>
                <Link
                    href={"/signin"}
                    className="flex-1 rounded-none h-[45px] text-lg font-semibold border-2 border-primary flex-center text-primary"
                >
                    SIGN IN
                </Link>
            </div>

            <GoogleSignInButton />

            <div className="w-full flex-center gap-[8px] my-[20px]">
                <hr className="border-[#98A2B3] flex-1" />
                <span>OR</span>
                <hr className="border-[#98A2B3] flex-1" />
            </div>

            <SignUpForm />
        </div>
    );
};

export default SignUp;
