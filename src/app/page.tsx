import { routes } from "@/data/routes";
import { constructMetadata } from "@/lib/utils";
import Link from "next/link";
import { auth, signOut } from "../../auth";

export const metadata = constructMetadata();

export default async function Home() {
    const session = await auth();
    console.log("this is the session", session);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-16 md:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold mb-8 text-center sm:text-5xl">
                Welcome to PLNR!
            </h1>

            <div className="flex flex-col space-y-4 w-full sm:w-auto">
                <h2 className="text-2xl text-center sm:text-left">
                    Here are the active routes:
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {routes.map((route, index) => (
                        <Link
                            key={index}
                            href={route.path}
                            className="text-xl text-blue-600 hover:underline"
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>
                {session?.user ? (
                    <div className="w-fit">
                        <h2 className="text-2xl font-semibold my-4">
                            Here is the user information:
                        </h2>
                        <div>
                            <pre>{JSON.stringify(session, null, 2)}</pre>
                        </div>
                        <form
                            className="w-full"
                            action={async () => {
                                "use server";
                                await signOut({
                                    redirectTo: "/",
                                });
                            }}
                        >
                            <button
                                type="submit"
                                className="flex-center gap-1 my-2 text-white bg-primary w-full rounded-[4px] py-[10px] px-[16px] border cursor-pointer"
                            >
                                SignOut
                            </button>
                            
                        </form>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-4 w-fit">
                        <h2 className="text-2xl text-center sm:text-left">
                            You are not signed in.
                        </h2>
                        <Link
                            href={"/signin"}
                            className="flex-center gap-1 my-2 text-white bg-primary w-full rounded-[4px] py-[10px] px-[16px] border cursor-pointer"
                        >
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
