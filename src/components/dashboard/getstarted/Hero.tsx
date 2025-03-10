import React from "react";
import icon1 from "@/Assets/Dashboard/hero/yt-grey.svg";
import Image from "next/image";
import icon2 from "@/Assets/Dashboard/hero/faq.svg";
import icon3 from "@/Assets/Dashboard/hero/purchase.svg";
import bg from "@/Assets/Dashboard/hero/bg.svg";

const cards = [
  {
    title: "Watch the video",
    description: "1",
    image: icon1,
    bg: "bg-azure ",
  },
  {
    title: "Read the FAQ Page",
    description: "2",
    image: icon2,
    bg: "bg-azure65",
  },
  {
    title: "Purchase Our Plan",
    description: "3",
    image: icon3,
    bg: "bg-azure",
  },
];

function Hero() {
  return (
    <div className="relative md:h-[400px] md:w-full text-white flex flex-col items-center m-auto gap-[11px]">
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
        <div className="text-[32px] leading-[39px] font-light flex flex-row max-w-[188px] gap-2 md:max-w-[259px] md:max-h-[52px]">
          Get
          <p className="font-[700]">Started</p>
        </div>
        <div className="align-middle font-[400] w-[375px] md:w-full text-[14px] md:text-[16px] leading-[19px] text-center flex m-auto">
          Watch these quick 1-minute videos and read the FAQ page!
          <br />
          In just 15 minutes you'll understand how we can work with you. Then
          you can get started with PLNR!
        </div>
        <div>
          <div className="flex flex-row max-gap-[11px] m-auto md:gap-8">
            {cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

interface CardProps {
  title: string;
  description: string;
  image: any;
  bg?: string;
}

function Card({ title, description, image, bg }: CardProps) {
  return (
    <div
      className={`h-[92px] w-[125px]  md:w-[185px] ${bg} opacity-[74%] flex flex-col gap-2 items-center m-auto rounded-[4px]`}
    >
      <div className="max-w-full flex md:text-[14px] text-center m-auto max-h-[39.85px]">
        {title}
      </div>
      <div className="text-[30px] md:text-[40px] items-center font-[500] flex flex-row gap-1">
        <p>{description}</p>
        <Image
          src={image}
          alt={title}
          className="h-[25px] w-[30px] md:h-[30px] md:w-[40px] object-contain"
        />
      </div>
    </div>
  );
}
