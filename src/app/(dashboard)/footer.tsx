"use client";

import Image from "next/image";
import Footerlogo from "../../Assets/footer/footer-logo.png.svg";
import Facebooklogo from "../../Assets/footer/facebook_Logo.svg.svg";
import Twitterlogo from "../../Assets/footer/Twitter_Logo.svg.svg";
import Youtubelogo from "../../Assets/footer/youtube_Logo.svg fill.svg";
import Instagramlogo from "../../Assets/footer/insta.svg fill.svg";
import Link from "next/link";
import Footermailicon from "../../Assets/footer/footer_mail_icon.svg";
import Footercallicon from "../../Assets/footer/footer_call_icon.svg";
import Footerlocationicon from "../../Assets/footer/footer_location_icon.svg";
import Footerbuttoncallicon from "../../Assets/footer/footer_button_call_icon.svg";
import Footerbuttonwhatsappicon from "../../Assets/footer/footer_button_whatsapp_icon.svg";
import Onfooter from "./on-footer";
import { Button } from "@/components/ui/button";
import FreecallButton from "@/components/dashboard/home/FreecallButton";
import WhatsappButton from "@/components/dashboard/home/WhatsappButton";
import { useEffect, useState } from "react";
import { getFooterData } from "@/services/footer";
import { FooterData } from "@/types/footer";

const Footer = () => {
    const [timeLeft, setTimeLeft] = useState(7);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        if (timeLeft <= 0) {
            setIsVisible(false);
            setTimeLeft(7);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, isVisible]);


    const [footerData, setFooterData] = useState<FooterData | null>(null);

    useEffect(() => {
        const fetchFooter = async () => {
            const { res, err } = await getFooterData();
            if (res) {
                setFooterData(res);
            } else {
                console.error("Failed to fetch footer data:", err);
            }
        };

        fetchFooter();
    }, []);

    return (
        <>
            <div className="flex flex-col mt-5">
                <Onfooter  data={footerData?.getStarted}/>
                <div className="flex flex-col bg-[#04344D] text-white md:py-10 md:px-[50px] xl:px-[100px] p-2 gap-y-10">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="flex flex-col gap-y-2">
                            <Link href="/">
                                <Image
                                    src={footerData?.logo?.image as string}
                                    width={95}
                                    height={95}
                                    alt={footerData?.logo?.imageAlt as string}
                                    className="ml-[-10px] object-contain"
                                />
                            </Link>
                            <div className="flex gap-2 mt-[-20px]">
                                {footerData?.socialMedia?.map((link, index) => (
                                    <Link target="_blank" key={index} href={link?.link}>
                                        <Image src={link.icon} alt={link.icon} width={28} height={28} className="w-[28px]" />
                                    </Link>
                                ))}
                            </div>
                            <p className="text-[14px] leading-[21px]">
                                {footerData?.reservedText?.text}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-4 gap-10 md:w-[1023px] ">
                            <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                                <Link
                                    href="/about"
                                    className="font-semibold text-[20px] leading-[31px]"
                                >
                                    About Us
                                </Link>
                                <div className="flex flex-col gap-y-2 font-light text-sm">
                                    <Link
                                        href="/about"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        The Team
                                    </Link>
                                    <Link
                                        href="/terms-and-conditions"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Terms and Conditions
                                    </Link>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Privacy Policy
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                                <Link
                                    href="/"
                                    className="font-semibold text-[20px] leading-[31px]"
                                >
                                    Learn More
                                </Link>
                                <div className="flex flex-col gap-y-2 font-light text-sm">
                                    <Link
                                        href="/blog"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Blog
                                    </Link>
                                    {/* <Link
                                        href="/"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Calculators
                                    </Link> */}
                                    <Link
                                        href="/details"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Sample Financial Plan
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Services
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 md:gap-y-10 ">
                                <Link
                                    href="/"
                                    className="font-semibold text-[20px] leading-[31px]"
                                >
                                    Client Corner
                                </Link>
                                <div className="flex flex-col gap-y-2 font-light text-sm">
                                    <div
                                        onClick={() => setIsVisible(true)}
                                        className="text-[14px] leading-[24px] cursor-pointer"
                                    >
                                        Regulatory Disclosures
                                    </div>
                                    <Link
                                        href="/disclosures"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        SEBI Disclosures
                                    </Link>
                                    <Link
                                        href="/investor"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Investor Charter
                                    </Link>
                                    <Link
                                        href="/grievance"
                                        className="text-[14px] leading-[24px]"
                                    >
                                        Grievance Redressal/Escalation Matrix
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-4 md:gap-y-10">
                                <Link
                                    href="/"
                                    className="font-semibold text-[20px] leading-[31px]"
                                >
                                    Get in Touch
                                </Link>
                                <div className="flex flex-col gap-y-4 font-light text-sm">
                                    <div className="flex gap-2">
                                        <Image
                                            src={Footermailicon}
                                            alt="no-mail-icon"
                                        />
                                        <p className="text-[14px] leading-[24px]">
                                            {footerData?.getInTouch?.email}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Image
                                            src={Footercallicon}
                                            alt="no-call-icon"
                                        />
                                        <p className="text-[14px] leading-[24px]">
                                            {footerData?.getInTouch?.phone}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 relative">
                                        <Image
                                            src={Footerlocationicon}
                                            alt="no-mail-icon" className="absolute top-0 left-0"
                                        />
                                        <p className="text-[14px] leading-[30px] pl-7">
                                            {footerData?.getInTouch?.address}
                                            
                                        </p>
                                    </div>
                                    {/* <p className="text-[14px] leading-[24px]">
                                       
                                    </p>
                                    <p className="text-[14px] leading-[24px]">
                                        
                                    </p>
                                    <p className="text-[14px] leading-[24px]">
                                        Kharghar
                                    </p>
                                    <p className="text-[14px] leading-[24px]">
                                        
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-4 md:gap-y-10 pb-4 w-[98%] md:w-[95%]">
                        <p className="font-medium text-sm">
                            Name of Advisor : {footerData?.sebi?.nameOfAdvisor} |
                            SEBI Registration Number - {footerData?.sebi?.sebiRegNo} | 
                            Registration Type : {footerData?.sebi?.regType}
                        </p>
                        <p className="text-[14px] leading-[22px] font-normal">
                        {footerData?.sebi?.description}
                        </p>
                    </div>
                </div>
                <div className="sm:hidden fixed bottom-0 left-0 bg-background flex p-2 px-4 items-center justify-center gap-2 w-full">
                    {/* <div className="flex bg-[#0898E1] py-3 px-6 rounded-lg text-white font-bold gap-2">
                  <Image src={Footerbuttoncallicon} alt="no-img" />
                  <p className=" whitespace-nowrap">Free Call</p>
              </div>
              <div className="flex bg-[#25D366] py-3 px-6 rounded-lg text-white font-bold gap-2">
                  <Image src={Footerbuttonwhatsappicon} alt="no-img" />
                  <p className=" whitespace-nowrap">Whatsapp</p>
              </div> */}
                    <FreecallButton />
                    <WhatsappButton />
                </div>
            </div>
            {
                isVisible &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mx-2 md:mx-auto"
                    onClick={() => {
                        setIsVisible(false)
                        setTimeLeft(7)
                    }}
                >
                    <div className="bg-white rounded-lg shadow-lg w-[100%] max-w-xl h-[95%] p-5 md:p-10 overflow-auto">
                        <h2 className="text-[17px] md:text-[32px] font-bold text-center text-[#065374]">
                            Regulatory Disclosures
                        </h2>
                        <p className="mt-4 text-[14px] font-[500] text-center text-black text-opacity-85 leading-[19px] md:leading-[28px]">
                            PLNR INVESTMENT ADVISORS is a SEBI Registered
                            Investment Advisor (INA000018966). SEBI requires
                            RIA's to disclose complaint status on their
                            homepage. Pursuant to the same, please note:
                        </p>
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full text-[12px] md:text-sm border text-center border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2 md:px-4 md:py-2">
                                            Complaint Status as on 1st December
                                            2024
                                        </th>
                                        <th className="border border-gray-300 p-2 md:px-4 md:py-2">
                                            Number of Complaints
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            At the Beginning of Month
                                        </td>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            Received during the month
                                        </td>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            Resolved during the month
                                        </td>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            Pending at the ending of the month
                                        </td>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            Reason for pendency
                                        </td>
                                        <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">
                                            0
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <p className="mt-4 text-center text-sm text-gray-500">
                                This modal closes in {timeLeft} seconds
                            </p>
                            <div className="mt-4 text-center">
                                <Button
                                    onClick={() => {
                                        setIsVisible(false)
                                        setTimeLeft(7)
                                    }}
                                    variant="close"
                                >
                                    CLOSE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Footer;
