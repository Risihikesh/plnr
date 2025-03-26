"use client";
import Image from "next/image";
import Homeimg from "@/Assets/home/home_img.svg";
import Playbuttonimg from "@/Assets/home/play_button_img.svg";
import { useState, useEffect } from "react";
import WhatsappButton from "./WhatsappButton";
import FreecallButton from "./FreecallButton";

const Home = () => {

    // type heroData = {
    //     title: string;
    //     description: string;
    //     image?: string;
    //     highlightedTexts: [
    //         {
    //             text: string;
    //         }
    //     ];
    // };
    // const [data, setData] = useState<heroData>();
    
    
    const rotatingTexts = [
        "SEBI Registered",
        "No Product Selling",
        "Fixed Fee - Rs. 13000/-",
        "15 Years of Experience",
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = rotatingTexts[currentTextIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(
                        currentText.substring(0, displayText.length + 1)
                    );
                }, 100);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 1000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(
                        currentText.substring(0, displayText.length - 1)
                    );
                }, 50);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex(
                    (prev) => (prev + 1) % rotatingTexts.length
                );
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, rotatingTexts, currentTextIndex]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             "http://localhost:3000/api/app-data/homepage/hero"
    //         );
    //         const data = await response.json();
    //         setData(data.data);
    //     };
    //     fetchData();
    // }, []);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-2  mb-[10px]  lg-scale-90">
                <div className="flex flex-col gap-y-6 lg:gap-y-4 lg:pl-24 lg:p-6 p-2 sm:p-7 justify-start md:items-start">
                    {/* <p className="text-[27px] leading-[32px] xxs:text-[28px] xxs:leading-[38px] sm:text-[40px] sm:leading-[50px] md:text-[45px] md:leading-[55px] lg:text-[30px] lg:leading-[38px] xx:text-[40px] xx:leading-[50px] xl:text-[45px] xl:leading-[55px] xll:text-[55px] xll:leading-[70px] font-extrabold">
                        <span className="whitespace-nowrape">Financial planning</span><br /> <span className="whitespace-nowrape">made easy</span>
                    </p>
                    <p className="mt-[-10px]">
                        &nbsp;
                        <span className="text-[#00587A] font-extrabold whitespace-nowrap text-[27px] leading-[32px] xxs:text-[28px] xxs:leading-[33px] sm:text-[40px] sm:leading-[50px]  md:text-[45px] md:leading-[55px] lg:text-[30px] lg:leading-[38px] xx:text-[40px] xx:leading-[50px] xl:text-[45px] xl:leading-[55px] xll:text-[50px] xll:leading-[60px]  text-left relative left-[-5px]">
                            {displayText}
                        </span>
                    </p> */}
                    <p className="text-[27px] pl-2 md:pl-0 lg:text-[36px] xxs:text-[30px] leading-[32px] xxs:leading-[38px] md:text-[32px] md:leading-[48px] font-extrabold">
                        Financial planning <span className="whitespace-nowrap">made easy</span>
                    </p>
                    <p className="mt-[-10px] ml-[-5px] pl-2 md:pl-0 ">
                        &nbsp;
                        <span className="text-[#00587A] lg:text-[36px] font-extrabold whitespace-nowrap text-[27px] lg:whitespace-normal md:text-[32px] xxs:leading-[38px] md:leading-[48px] text-left">
                            {displayText}
                        </span>
                    </p>
                    <p className="text-[18px] pl-2 md:pl-0  leading-[22px] md:leading-[28.29px] lg:font-medium font-normal text-[#13171F] mt-1">
                        With PLNR, you get unbiased advice for your personal
                        finances. Clean up your portfolio,choose the right
                        financial product with tax efficiency, get a second
                        opinion about your investments, get advice on health and
                        term insurance, define your goals and a way to achieve
                        them with proper equity/debt allocation, all in the same
                        place.
                    </p>
                    <div className="flex p-2 border m-auto sm:m-0 border-[#2AA4F4] rounded-3xl justify-center items-center w-[276px] cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-[#E6F7FB] transition-all duration-300 ease-in-out">
                        <Image src={Playbuttonimg} alt="no-img" />
                        <p className="text-[#00587A] font-semibold underline">
                            Mentor's Testimonial
                        </p>
                    </div>
                    <div className=" left-0 bg-background flex  items-center justify-center md:justify-start gap-2 w-full">
                        <FreecallButton />
                        <WhatsappButton />
                    </div>
                </div>
                <Image
                    src={Homeimg}
                    alt="no-img"
                    className="w-full lg:h-[387px] md:w-[70%] lg:w-[50%] max-w-[700px] min-w-[50%] lg:min-w-[42%]"
                />
            </div>
        </>
    );
};

export default Home;
