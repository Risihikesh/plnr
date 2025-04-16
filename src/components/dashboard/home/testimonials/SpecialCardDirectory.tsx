"use client";

import React from "react";
import SpecialCards from "./SpecialCards";
import { specialCardsData } from "@/constants";
const MAX_VISIBLE_DOTS = 5;
const SpecialCardDirectory = ({
  testimonials,
}: {
  testimonials: {
    description: string;
    image: string;
    name: string;
    designation: string;
  }[];
}) => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const totalCards = testimonials.length;

  const getVisibleIndices = () => {
    if (totalCards <= MAX_VISIBLE_DOTS) {
      return [...Array(totalCards).keys()];
    }

    const middle = Math.floor(MAX_VISIBLE_DOTS / 2);
    let start = Math.max(0, currentCardIndex - middle);
    let end = start + MAX_VISIBLE_DOTS;

    if (end > totalCards) {
      end = totalCards;
      start = end - MAX_VISIBLE_DOTS;
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="flex-col-center lg:block px-[30px] lg:px-[80px] x:px-[150px] xll:px-[300px] pt-[27px] lg:pb-[187px] h-fit">
      <SpecialCards data={testimonials[currentCardIndex]} />
      <div className="flex-center gap-[11px] w-fit h-fit mt-[30px] lg:mt-[48px]">
        {visibleIndices.map((index) => (
          <div
            key={index}
            onClick={() => setCurrentCardIndex(index)}
            className={`cursor-pointer m-auto h-[10px] rounded-full transition-all z-10 hover:border hover:border-[#00638D] ${currentCardIndex === index
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
