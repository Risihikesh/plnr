import React from "react";
import Image from "next/image";
import { getGetStartedData } from "@/services/getStarted";
import { CardProps, GetStartedData } from "@/types/getStarted";



async function Hero() {
    const res = (await getGetStartedData()) as GetStartedData;
    const data = res?.res?.data;

    return (
        <div className="relative md:h-[400px] md:w-full text-white flex flex-col items-center m-auto gap-[11px]">
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.image}
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
                <p
                    className="align-middle font-[400] w-[375px] md:w-full text-[14px] md:text-[16px] leading-[19px] text-center flex m-auto"
                    dangerouslySetInnerHTML={{
                        __html: data.description,
                    }}
                />
                <div>
                    <div className="flex flex-row max-gap-[11px] m-auto md:gap-8">
                        {data?.steps.map(
                            (card: {
                                text: string;
                                num: string;
                                image: any;
                                imageAlt: string;
                            }) => (
                                <Card key={card.text} {...card} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

function Card({ text, num, image, imageAlt }: CardProps) {
    return (
        <div
            className={`h-[92px] w-[125px]  md:w-[185px] bg-[#2b4c67] opacity-[74%] flex flex-col gap-2 items-center m-auto rounded-[4px]`}
        >
            <div className="max-w-full flex md:text-[14px] text-center m-auto max-h-[39.85px]">
                {text}
            </div>
            <div className="text-[30px] md:text-[40px] items-center font-[500] flex flex-row gap-1">
                <p>{num}</p>
                <div className="h-[25px] w-[30px] md:h-[30px] md:w-[40px] relative">
                    <Image
                        src={image}
                        alt={imageAlt}
                        className="object-contain"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}
