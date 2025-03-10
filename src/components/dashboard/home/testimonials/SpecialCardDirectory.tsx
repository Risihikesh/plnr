"use client";

import React from "react";
import SpecialCards from "./SpecialCards";
import { specialCardsData } from "@/constants";

const SpecialCardDirectory = () => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  return (
    <div className="flex-col-center lg:block px-[30px] lg:px-[80px] x:px-[150px] xll:px-[300px] pt-[27px] lg:pb-[187px] h-fit">
      <SpecialCards data={specialCardsData[currentCardIndex]} />
      <div className="flex-center gap-[11px] w-fit h-fit mt-[30px] lg:mt-[48px]">
        {specialCardsData.map((_, index) => (
          <div
            onClick={() => {
              setCurrentCardIndex(index);
            }}
            key={index}
            className={`m-auto h-[10px] rounded-full transition-all z-10 hover:border hover:border-[#00638D] ${
              currentCardIndex === index
                ? "bg-[#00638D] w-[32px]"
                : "bg-[#E4E4E7]  w-[10px]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialCardDirectory;
