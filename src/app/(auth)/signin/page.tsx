import React from "react";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
export const metadata = constructMetadata();

const SignIn = async () => {

    const session = await auth();
    if (session?.user) {
        redirect("/");
    }
    
    return (
        <div className="w-full xs:w-[400px] x:w-[350px]">
            <div className="flex-center mb-[32px] w-full">
                <Link
                    href={"/signup"}
                    className="flex-1 rounded-none h-[45px] text-lg font-semibold text-primary border-2 border-primary flex-center "
                >
                    SIGN UP
                </Link>
                <Link
                    href={"/signin"}
                    className="flex-1 rounded-none h-[45px] text-lg font-semibold bg-primary flex-center text-background"
                >
                    SIGN IN
                </Link>
            </div>

            <GoogleSignInButton />

            <div className="w-full flex-center gap-[8px] my-[28px]">
                <hr className="border-[#98A2B3] flex-1" />
                <span className="text-[#98A2B3]">OR</span>
                <hr className="border-[#98A2B3] flex-1" />
            </div>

            <SignInForm />
            {/* <TestSignInForm /> */}

            <p className="text-primary w-full text-right leading-[24px] text-[16px] mt-2 hover:underline cursor-pointer">
                <Link href={"/recover-password"}>Forgot Password?</Link>
            </p>
        </div>
    );
};

export default SignIn;
