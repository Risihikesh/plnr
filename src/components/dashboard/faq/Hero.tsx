import React from "react";
import Image from "next/image";
import bg from "@/Assets/Dashboard/hero/faqbg.svg";

function Hero() {
  return (
    <div className="relative h-[276px] md:h-[222px] w-full text-white flex flex-col items-center m-auto gap-[11px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
      </div>
      <div className="relative z-10 md:h-auto flex flex-col gap-4 items-center m-auto px-4">
        <div className="text-[32px] md:text-[44px] font-light flex flex-col  max-w-[312px] items-center max-h-[36px] gap-2 md:max-w-[590.85px] md:flex-row md:max-h-[52px]">
          <p>Frequently</p>
          <div className="font-[700] flex gap-2">
            <p>Asked</p>
            <p>Questions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
