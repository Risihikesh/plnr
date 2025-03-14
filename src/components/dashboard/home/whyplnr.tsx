import React from "react";
import Icon1 from "@/Assets/home/icon1.svg";
import Icon2 from "@/Assets/home/icon2.svg";
import Icon3 from "@/Assets/home/icon3.svg";
import Icon4 from "@/Assets/home/icon4.svg";
import Icon5 from "@/Assets/home/icon5.svg";
import Image from "next/image";

const WhyPlnr = () => {
    const features = [
        {
            title: "Fee-Only",
            description:
                "Compensated only with the fee clients pay directly, not earning commissions by any means.",
            icon: Icon1,
        },
        {
            title: "No Differential Fee",
            description:
                "No Differential fee is charged based on your residential status or net worth.",
            icon: Icon2,
        },
        {
            title: "Seamless Onboarding",
            description:
                "We ensure seamless onboarding. No excel sheets, no signing contracts manually.",
            icon: Icon3,
        },
        {
            title: "Independent",
            description:
                "Not affiliated with any bank, mutual fund, or insurance company.",
            icon: Icon4,
        },
        {
            title: "SEBI RIA",
            description:
                "We are registered with the Securities and Exchange Board of India (SEBI) as an Investment Advisor (INA000018966).",
            icon: Icon5,
        },
    ];

    return (
        <section className="relative text-white py-16 px-[16px]">
            <div
                className="absolute inset-0 bg-[#00587A]"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)",
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto text-center">
                <hr className="h-[3px] w-[80px] bg-[#00587A] m-auto mb-[12px] border-none" />
                <h2 className="text-[30px] md:text-[32px] leading-[35px] mb-[24px] font-light">
                    Why&nbsp;
                    <span className="font-bold">PLNR?</span>
                </h2>
                <p className="text-base leading-[18px] font-normal mb-12">
                    We believe that our success is measured by our client’s
                    success.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] xs:gap-[16px] md:gap-6 items-stretch">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="w-full bg-white text-gray-800 rounded-lg shadow-lg p-2 md:p-6 flex flex-col gap-[16px] items-center justify-between h-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-default max-w-[350px]"
                        >
                            <div className="w-full flex justify-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-[140px] h-[140px] object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center text-center flex-grow">
                                <h3 className="text-[15px] leading-[18px] md:text-[24px] md:leading-[30px] font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-[14px] leading-[16px] md:text-base md:leading-[21px] font-normal text-[#3B414D]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyPlnr;
