import PricingCard from "@/components/custom_ui/PricingCard";
import ServiceHeading from "@/components/custom_ui/ServiceHeading";
import { pricingData } from "@/data/pricingData";
import { ServicesDataType } from "@/types/services";
import { getServicesData } from "@/services/services";

import React from "react";

const Home: React.FC = async () => {

    const res = (await getServicesData()).res as ServicesDataType;
    const data = res.data;
    const priceHeading = ["Comprehensive Financial Planning", "Renewal"];
    
    return (
        <div className="px-[10px]">
            <div>
                <ServiceHeading title={data.title} description={data.description}
                    boldWords={["services"]} />
            </div>
            <div className="min-h-screen  flex items-center  justify-center py-10">
                <div className="grid gap-8 md:grid-cols-2">
                    {data.plan.map((card, index) => (
                        <PricingCard
                            key={index}
                            priceHeading={priceHeading[index]}
                            price={card.amount}
                            yearLabel={card.yearTag}
                            features={card.services}
                        />
                    ))}
                </div>

            </div>

            <div className="flex flex-col gap-4 text-center">
                <h1 className=" text-[#FF0000] leading-[15px] text-[16px] font-[700]">
                    {data.doNotAccept.text}
                </h1>
                <p className="text-[16px] leading-[20px] font-[500] text-[#3B414D]">
                    {data.doNotAccept.explanation}
                </p>
            </div>
        </div>
    );
};

export default Home;
