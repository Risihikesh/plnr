import React from "react";
import TestimonialCard from "./cards";
import SpecialCardDirectory from "./SpecialCardDirectory";
import FAQSection from "@/components/dashboard/faq/faq-section2";

const Testimonials = () => {
  return (
    <>
      <section className="h-fit w-full relative">
        <div className="w-full h-[130px] lg:h-[200px] bg-[#00587a] lg:px-[80px] x:px-[150px] xll:px-[300px] flex">
          <div className="flex flex-col items-center lg:items-start h-fit m-auto lg:ml-0 lg:mt-auto mt-[22px] lg:mb-[45px]">
            <hr className="h-[3px] bg-white w-[40px] mb-[22px] lg:mb-[38px]" />
            <h1 className="text-[24px] leading-[36px] lg:text-[40px] lg:leading-[47px] font-bold text-white ">
              Testimonials
            </h1>
          </div>
        </div>
        <SpecialCardDirectory />
        <div className="block lg:absolute lg:top-0 lg:left-0 w-full h-[400px] lg:h-full lg:px-[100px] xl:px-[200px]">
          <div className="flex flex-col lg:flex-row w-full h-fit lg:h-full ml-auto lg:w-fit overflow-hidden">
            <div className="h-fit scroll-animation">
              <div className="h-fit w-fit flex flex-col pt-[20px] pb-[8px] lg:pt-0 lg:pb-0 lg:pr-[12px] lg:pl-[20px]">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
              <div
                className="h-fit w-fit flex flex-col pt-[8px] pb-[20px] lg:pt-0 lg:pb-0 lg:pr-[12px] lg:pl-[20px]"
                aria-hidden="true"
              >
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
            <div className="h-fit overflow-hidden scroll-animation">
              <div className="h-fit w-fit flex flex-col pt-[20px] pb-[8px] lg:pt-0 lg:pb-0 lg:pr-[12px] lg:pl-[20px]">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
              <div
                className="h-fit w-fit flex flex-col pt-[8px] pb-[20px] lg:pt-0 lg:pb-0 lg:pr-[12px] lg:pl-[20px]"
                aria-hidden="true"
              >
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default Testimonials;
