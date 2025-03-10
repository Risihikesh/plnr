import React from "react";

interface ServiceHeadingProps {
    title: string;
    firstLine?: string;
    secondLine?: string;
    boldWords?: string[];
    titleColor?: string;
    textColor?: string;
    lineColor?: string;
}

const ServiceHeading: React.FC<ServiceHeadingProps> = ({
    title,
    firstLine,
    secondLine,
    boldWords = [],
    titleColor = "text-black",
    textColor = "text-[#13171F]",
    lineColor = "bg-[#00587A]",
}) => {
    const titleParts = title.split(" ");

    const renderTitle = (word: string, index: number) => {
        const isBold = boldWords.includes(word.toLowerCase());
        return isBold ? (
            <span key={index} className="font-bold">
                {word}
            </span>
        ) : (
            <span key={index}> {" " + word} </span>
        );
    };

    return (
        <div className="flex justify-center py-[13px] md:py-[30px] items-center flex-col gap-2">
            <hr className={`w-[40px] h-[2px] m-[20px] ${lineColor}`} />
            <h1
                className={`text-xl md:text-[38px] text-[32px] capitalize ${titleColor}`}
            >
                {titleParts.map((word, index) => renderTitle(word, index))}
            </h1>

            <div className="md:w-[42%] pt-4 md:flex md:flex-col hidden justify-center text-center text-hover md:text-[16px]">
                {firstLine && <p className={textColor}>{firstLine}</p>}
                {secondLine && <p className={textColor}>{secondLine}</p>}
            </div>

            <div className="md:hidden md:w-[40%] justify-center text-center text-hover md:text-[14px]">
                {firstLine && <p className={textColor}>{firstLine}</p>}
                {secondLine && <p className={textColor}>{secondLine}</p>}
            </div>
        </div>
    );
};

export default ServiceHeading;
