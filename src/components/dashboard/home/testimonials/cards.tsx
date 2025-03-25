import React from "react";

const TestimonialCard = () => {
  return (
    <div className="flex-col-center gap-[32px] w-[240px] p-[12px] h-fit shadow-[0_0_24px_0_rgba(64,64,64,0.08)] rounded-[12px] bg-background hover:scale-105 transition-all duration-500 cursor-default">
      <p className="text-[14px] md:text-[16px] leading-[24px] md:leading-[24px] text-black/75 font-normal">
        PLNR has been a lifesaver for my business. Their advisors guided me
        through selecting the right policies, and their claims process was
        smooth and stress-free. I feel secure knowing my company&apos;s future
        is in safe hands.
      </p>
      <div className="flex items-center gap-[7px] w-full">
        <img
          src="/testimonial_user2.png"
          alt="user avatar"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div>
          <h4 className="text-[16px] leading-[19px] text-black/75 font-medium m-0 mb-[4px]">
            Rajesh Kumar
          </h4>
          <p className="text-[14px] leading-[16px] font-normal text-black/75">
            Small Business Owner
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
