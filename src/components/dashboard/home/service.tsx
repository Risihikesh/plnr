// pages/services.tsx
import React from "react";
import planning from "@/Assets/Dashboard/hero/planning.svg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import WhatsappButton from "./WhatsappButton";
import FreecallButton from "./FreecallButton";

const featureData = {
    buttons: [
        {
            price: "Rs. 13,000",
            button: "First Year",
        },
        {
            price: "Rs. 6,000",
            button: "2nd Year Onwards",
        },
    ],
    items: [
        {
            title: "Review",
            description:
                "We review your existing investments, loans, insurances and align it with your goals.",
        },
        {
            title: "Goals",
            description:
                "We assess your financial goals like retirements, child's higher education, home purchase, vacation, vehicle etc and priority of your goals.",
        },
        {
            title: "Investment Advise",
            description:
                "We give the amount of investment required for each goal with equity and debt allocation based on your risk, profiles, timelines and affordability of your goals.",
        },
        {
            title: "Products with Tax Efficiency",
            description:
                "We give exact product names be it equity mutual funds, term insurance, health insurance or debt products like PPF, SSY, Debt mutual funds, FDs or RDs (which ever are tax efficient).",
        },
        {
            title: "Insurance Advise",
            description:
                "We suggest the amount required for a term insurance and health insurance and give opinion on existing policies—whether to continue or surrender.",
        },
        {
            title: "Timelines",
            description:
                "We deliver the financial plan in 10–15 days and the mode of delivery would be online. The consultation is for 1 year.",
        },
    ],
};

const Services = () => {
    return (
        <div className="relative h-fit">
            <div className="static lg:absolute top-0 left-0 w-full bg-[#00587A] py-[60px] px-[30px]">
                <div className="h-auto w-full lg:w-[39%] lg:mr-auto">
                    <div className="flex pl-[1.75rem] flex-col items-start w-full justify-start">
                        <section className="mb-[20px] md:text-full w-full">
                            <h2 className="text-[24px] leading-[28px] md:text-[39px] md:leading-[47px] font-bold text-white w-[200px] md:w-fit m-auto lg:m-0">
                                <span className="font-light whitespace-nowrap">
                                    What
                                </span>
                                <span> We Do </span> - Our Services
                            </h2>
                            <p className="hidden sm:block text-white text-[16px] leading-[24px] font-normal cursor-default">
                                We help you assess your current financial
                                situation, establish financial goals and risk
                                appetite, and devise an investment strategy to
                                achieve those goals.
                            </p>
                        </section>
                        <div className="w-full">
                            <img
                                src={planning.src}
                                alt="Services Illustration"
                                className="w-full max-w-md cursor-default"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-2 w-full lg:pt-[20px]">
                <div
                    className="ml-auto bg-white shadow-lg mr-0 lg:mr-[30px] xl:mr-[100px] w-full py-[28px] md:py-[36px] px-[15px] sm:px-[47px]
                lg:w-[51%] text-gray-800 rounded-lg flex flex-col gap-[28px] md:gap-[35px]"
                >
                    <h3 className="md:text-[28px] md:leading-[45px] leading-[28px] text-[19px] font-[300] text-[#00587A] cursor-default w-[106%]">
                        We offer&nbsp;
                        <span className="font-bold">
                            Comprehensive Financial Planning&nbsp;
                        </span>
                        at a&nbsp;
                        <span className="font-bold">Flat Fixed Fee</span>
                    </h3>
                    <div className="flex items-center justify-between sm:justify-start gap-2 xs:gap-[39px] x:gap-[100px] xll:gap-[183px] ">
                        {featureData.buttons.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <h1 className="flex items-start mb-[5px] md:mb-[8px] xl:mb-[12px] text-[24px] lg:text-[30px] xl:text-[40px] leading-[36px] md:leading-[60px] font-[700] text-[#00638D] whitespace-nowrap cursor-default">
                                    {feature.price}
                                </h1>
                                <button className="min-w-[150px] xs:min-w-[170px] min-h-[40px] border-[1px] border-[#2AA4F4] font-semibold leading-[20px] text-[14px] lg:leading-[28px] px-[16px] py-[6px] lg:px-[40px] rounded-full whitespace-nowrap ml-[-5px]">
                                    {feature.button}
                                </button>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-[20px] leading-[38px] font-bold text-[#065374]">
                        What All It Includes
                    </h3>

                    {/* Flex container for price and items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full justify-between mt-[-8px]">
                        {featureData.items.map((item, idx) => (
                            <div
                                className="flex items-start space-x-2 md:space-x-3"
                                key={idx}
                            >
                                <img src="/check.svg" alt="check-icon" />
                                <div className="flex flex-col">
                                    <h4 className="font-[600] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] text-black">
                                        {item.title}
                                    </h4>
                                    <p className="text-[16px] leading-[20px] md:text-[16px] md:leading-[24px] text-[#3B414D]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-[20px] sm:flex-row sm:space-x-4 w-full">
                        <FreecallButton />
                        <WhatsappButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
