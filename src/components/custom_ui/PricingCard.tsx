import { Check, Phone } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import WhatsappButton from "../dashboard/home/WhatsappButton";
import FreecallButton from "../dashboard/home/FreecallButton";

interface PricingFeatureProps {
    title: string;
    description: string;
}

interface PricingCardProps {
    priceHeading: string;
    price: string;
    yearLabel: string;
    features: { title: string; description: string }[];
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ title, description }) => {
    return (
        <div className="flex items-start space-x-2">
            <span className="text-md "><Check /></span>
            <div className="flex flex-col gap-y-[4px]">
                <h4 className="font-[600] text-[20px] leading-[24px] text-black">{title}</h4>
                <p className="text-[14px] text-gray-600 leading-[28px]">{description}</p>
            </div>
        </div>
    );
};

const PricingCard: React.FC<PricingCardProps> = ({priceHeading, price, yearLabel, features }) => {
    return (
        <div className="border border-black rounded-lg p-3 sm:p-6 shadow-lg bg-white max-w-[35rem] w-full  overflow-hidden">
            <h2 className="text-[24px] font-semibold text-black mb-[8px]">{priceHeading}</h2>
            <h2 className="text-[24px] font-semibold text-[#065374] mb-[8px]">Rs {price}</h2>
            <button className="text-black border border-[#2AA4F4]  font-medium my-[16px] text-[14px] leading-[28px] tracking-[0.2px] py-[4px] px-[40px] rounded-full">
                {yearLabel}
            </button>
            <h3 className="text-[24px] font-semibold text-[#065374] mt-[8px] mb-4">
                What All It Includes
            </h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {features.map((feature, index) => (
                    <PricingFeature
                        key={index}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
            <div className="flex flex-row gap-2 sm:space-y-0 sm:space-x-4 mt-6 w-full justify-center md:justify-center lg:justify-center">
                <div className="w-1/2 flex justify-center">
                    <FreecallButton />
                </div>
                <div className="w-1/2 flex justify-center">
                    <WhatsappButton />
                </div>
            </div>

        </div>
    );
};

export default PricingCard;
