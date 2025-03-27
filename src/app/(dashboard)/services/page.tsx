import PricingCard from "@/components/custom_ui/PricingCard";
import ServiceHeading from "@/components/custom_ui/ServiceHeading";
import { pricingData } from "@/data/pricingData";

import React from "react";

const Home: React.FC = () => {
    return (
        <div className="px-[10px]">
            <div>
                <ServiceHeading title="Our Services" firstLine="We offer comprehensive financial planning at a flat fixed fee."
                    secondLine="We do not charge differential fee based on your net worth or residential status. "
                    boldWords={["services"]} />
            </div>
            <div className="min-h-screen  flex items-center  justify-center py-10">

                <div className="grid gap-8 md:grid-cols-2">
                    {pricingData.pricing.map((card, index) => (
                        <PricingCard
                            key={index}
                            priceHeading={card.priceHeading}
                            price={card.price}
                            yearLabel={card.yearLabel}
                            features={card.features}
                            buttonText={card.buttonText}
                        />
                    ))}
                </div>

            </div>

            <div className="flex flex-col gap-4 text-center">
                <h1 className=" text-[#FF0000] leading-[15px] text-[16px] font-[700]">
                    *We do not accept clients having net worth of more than 3 Crores.
                </h1>
                <p className="text-[16px] leading-[20px] font-[500] text-[#3B414D]">
                    *Net Worth = Net Assets (other than self-occupied home) - Net Liabilities
                </p>
            </div>
        </div>
    );
};

export default Home;
