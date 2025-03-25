'use client';

import React, { useEffect, useState } from "react";
import bg from "@/Assets/Dashboard/hero/faqbg.svg";

interface BannerProps {
    heading?: string;
    img?: { src: string };
    mobileImg?: { src: string };
    imgAspect?: string;
    highlightedText?: string;
}

const BannerHeading: React.FC<BannerProps> = ({
    img,
    mobileImg,
    imgAspect,
    heading,
    highlightedText,
}) => {

    const [backgroundImage, setBackgroundImage] = useState('');
    useEffect(() => {
        const isMobile = window.innerWidth <= 640;

        const newImg = isMobile
            ? mobileImg?.src || img?.src
            : img?.src || bg.src;
        setBackgroundImage(newImg);
    }, [img, mobileImg]);

    return (
        <div
            className={`relative w-full min-h-[222px] ${
                imgAspect ? imgAspect : "aspect-[414/296] sm:aspect-[500/200] md:aspect-[1920/280]"
            } max-h-[400px] bg-cover bg-bottom md:bg-center flex items-center justify-center text-white`}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.259), rgba(0, 0, 0, 0.29)),url(${backgroundImage})`,
            }}
        >
            <h1 className="text-2xl md:text-[42px] text-[32px] w-[280px] leading-[60px] md:w-fit text-center">
                {heading}{" "}
                {highlightedText && (
                    <span className="font-bold">{highlightedText}</span>
                )}
            </h1>
        </div>
    );
};

export default BannerHeading;
