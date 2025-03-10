import React from "react";
import { signIn, signOut } from "../../../auth";
import { providerMap } from "../../../auth";

const GoogleSignInButton = () => {
    return (
        <>
            {providerMap.map((provider, index) => (
                <form
                    key={index}
                    className="w-full"
                    action={async () => {
                        "use server";
                        await signIn(provider.id, {
                            redirectTo: "/",
                        });
                    }}
                >
                    <button
                        type="submit"
                        className="flex-center gap-1 w-full rounded-[4px] py-[8px] px-[16px] border cursor-pointer"
                    >
                        <img
                            src="/google.svg"
                            alt="google-icon"
                            className="w-[20px] h-[20px]"
                        />
                        <span>Continue with Google</span>
                    </button>
                </form>
            ))}
        </>
    );
};

export default GoogleSignInButton;
