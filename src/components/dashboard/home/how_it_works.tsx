
import React from "react";
import Image from "next/image";
import Icon1 from "@/Assets/home/introduction_img.svg";
import Icon2 from "@/Assets/home/signup_img.svg";
import Icon3 from "@/Assets/home/data_collectionimg.svg";
import Icon4 from "@/Assets/home/calculations_img.svg";
import Icon5 from "@/Assets/home/planning.svg.svg";
import Icon6 from "@/Assets/home/done.svg.svg";

const steps = [
  {
    title: "Introduction",
    description:
      "We discuss our offerings to address your personalized financial planning needs.",
    image: Icon1,
  },
  {
    title: "Sign up",
    description:
      "We sign an agreement, conduct a compliance check, do risk profiling, and collect fees.",
    image: Icon2,
  },
  {
    title: "Data Collection",
    description:
      "We collect essential data and raise queries if any information is missing.",
    image: Icon3,
  },
  {
    title: "Calculations",
    description:
      "We map your financial goals with existing resources and let you know the monthly investment required to achieve your goals.",
    image: Icon4,
  },
  {
    title: "Final Plan",
    description:
      "We share the financial plan with product recommendations after you approve the calculations.",
    image: Icon5,
  },
  {
    title: "Implementation",
    description:
      "Finally, you start implementing the plan by yourself. We provide help if you face any problem in implementation.",
    image: Icon6,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto  text-center">
        <hr className="h-[3px] w-[80px] bg-[#00587A] m-auto mb-[42px]  border-none" />

        <h2 className="text-3xl md:text-4xl font-[300] mb-4">How It <span className="font-bold">Works</span></h2>
        <p className="text-lg md:text-[16px] text-black font-[400] mb-12 leading-[24px]">
          Personalized Goal-based Planning in 6 Steps.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-2 md:p-4 flex flex-col gap-[9px] md:gap-[14px] items-center text-center justify-start md:w-[200px]"
            >
              <Image
                src={step.image}
                alt={step.title}
                className="h-[180px]"
              />
              <h3 className="text-[16px] leading-[21px] md:text-[24px] md:leading-[38px] font-bold whitespace-nowrap">{step.title}</h3>
              <p className="text-[#3B414D] text-[14px] leading-[16px] md:text-[16px] md:leading-[24px]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action for Mobile View */}
        <div className="mt-12 md:hidden">
          <button className="bg-transparent text-primary border-[1px] border-primary font-semibold px-[36px] py-[11px]  rounded-[4px] shadow hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
