import React from "react";
import Header from "../(dashboard)/header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-background overflow-x-hidden w-screen overflow-y-auto pb-[50px]">
            <div className="block sm:hidden">
                <Header />
            </div>
            <main className="flex-1 justify-center w-full">
                <div className="flex-col-between x:flex-center mt-[34px] xs:mt-[100px] px-[20px] xs:px-[50px] w-full gap-[50px] xl:gap-[100px] 2xl:gap-[100px]">
                    {children}
                    <div className="text-center">
                        <div className="text-[20px] xs:text-[30px] leading-[28px] xs:leading-[36px] font-bold mb-[24px] text-[#466D8D] px-[50px] xs:px-0">
                            <span className="text-primary">Your Success</span>{" "}
                            is Our Growth
                        </div>
                        <iframe
                            className="sm:w-[600px] md:w-[700px] lg:w-[800px] x:w-[600px] xl:w-[700px] w-[100%] aspect-[855/499]"
                            src="https://www.youtube.com/embed/sS2gkgHNR3Q?si=OQudot5kuwwZc6qy"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;
