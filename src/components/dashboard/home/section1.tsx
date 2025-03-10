"use client";
import Image from "next/image";
import Homeimg from "@/Assets/home/home_img.svg";
import Playbuttonimg from "@/Assets/home/play_button_img.svg";
import Footerbuttoncallicon from "@/Assets/footer/footer_button_call_icon.svg";
import Footerbuttonwhatsappicon from "@/Assets/footer/footer_button_whatsapp_icon.svg";
import { useState, useEffect } from "react";
import WhatsappButton from "./WhatsappButton";
import FreecallButton from "./FreecallButton";

const Home = () => {
    const rotatingTexts = [
        "SEBI registered",
        "No product selling",
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

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center gap-10 p-[10px] xxs:p-[20px] mb-[10px]">
                <div className="flex flex-col gap-y-6 lg:pl-20 p-2 sm:p-7 justify-start md:items-start">
                    <p className="lg:text-[48px] xxs:text-[30px] leading-[32px] xxs:leading-[38px] md:text-[32px] md:leading-[48px] font-extrabold">
                        Financial planning made easy
                    </p>
                    <p className="mt-[-10px]">
                        &nbsp;
                        <span className="text-[#00587A] font-extrabold  whitespace-nowrap lg:whitespace-normal xxs:text-[30px] md:text-[32px] xxs:leading-[38px] md:leading-[48px] text-left">
                            {displayText}
                        </span>
                    </p>
                    <p className="text-[18px] leading-[22px] md:leading-[27px] font-normal text-[#13171F] mt-2">
                        With PLNR, you get unbiased advice for your personal
                        finances. Clean up your portfolio,choose the right
                        financial product with tax efficiency, get a second
                        opinion about yourinvestments, get advice on health and
                        term insurance, define your goals and a way to achieve
                        them with proper equity/debt allocation, all in the same
                        place.
                    </p>
                    <div className="flex p-2 border m-auto sm:m-0 border-[#00587A] rounded-3xl justify-center items-center w-[276px] cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-[#E6F7FB] transition-all duration-300 ease-in-out sm:my-[10px]">
                        <Image src={Playbuttonimg} alt="no-img" />
                        <p className="text-[#00587A] font-semibold underline">
                            Mentor's Testimonial
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-start gap-5 w-full">
                        <FreecallButton />
                        <WhatsappButton />
                    </div>
                </div>
                <Image
                    src={Homeimg}
                    alt="no-img"
                    className="w-full md:w-[70%] lg:w-[50%] max-w-[700px] min-w-[50%]"
                />
            </div>
        </div>
    );
};

export default Home;
