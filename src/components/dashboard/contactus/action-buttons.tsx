"use client";

import {
    phoneIcon,
    mailIcon,
    servicesIcon,
    whatsappIcon,
} from "@/Assets/icons";
import Image from "next/image";
import Link from "next/link";
export function ActionButtons({
    buttons,
}: {
    buttons: {
        text: string;
        link: string;
        logo: string;
        logoAlt: string;
        _id: string;
    }[];
}) {
    function openWhatsApp(phoneNumber: string, message: string) {
        // Replace these with your actual details
        const encodedMessage = encodeURIComponent(message);

        // Check if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Create URLs for different scenarios
        const desktopAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        const mobileUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;

        if (isMobile) {
            // Mobile device - try to open WhatsApp app
            window.location.href = mobileUrl;

            // Fallback for mobile browsers after a delay
            setTimeout(() => {
                // If still on the same page, open in browser
                if (document.hasFocus()) {
                    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
                }
            }, 1000);
        } else {
            // Desktop - try to open WhatsApp desktop app first
            let appOpened = false;

            // Try to open desktop app
            const tryDesktopApp = () => {
                const anchor = document.createElement("a");
                anchor.href = desktopAppUrl;
                anchor.style.display = "none";
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            };

            // Try to open desktop app and set up fallback
            tryDesktopApp();

            // Fallback to WhatsApp Web after a delay
            setTimeout(() => {
                if (document.hasFocus()) {
                    window.open(webUrl, "_blank");
                }
            }, 1500);

            // Add error handler for protocol
            window.addEventListener(
                "error",
                function (e) {
                    if (e.message.indexOf("whatsapp") !== -1) {
                        window.open(webUrl, "_blank");
                    }
                },
                { once: true }
            );
        }
    }

    return (
        <div className="border-b border-gray-300 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <Link
                    href={buttons[0].link}
                    className="flex h-[48px] w-full items-center justify-center gap-2 px-2 py-2.5 bg-azure46 text-white rounded hover:bg-[#0093e9] transition-colors"
                >
                    <Image width={23} height={23} src={buttons[0].logo} alt={buttons[0].logoAlt} />
                    <span className="text-[14px]">{buttons[0].text}</span>
                </Link>
                <Link
                    href={buttons[1].link}
                    className="flex h-[48px] w-full items-center justify-center gap-2 px-4 py-2.5 bg-azure46 text-white rounded hover:bg-[#0093e9] transition-colors"
                >
                    <Image width={23} height={23} src={buttons[1].logo} alt={buttons[1].logoAlt} />
                    <span className="text-[14px]">{buttons[1].text}</span>
                </Link>
                <Link
                    href={buttons[2].link}
                    className="flex h-[48px] w-full items-center justify-center gap-2 px-4 py-2.5 bg-azure46 text-white rounded hover:bg-[#0093e9] transition-colors"
                >
                    <Image width={17} height={17} src={buttons[2].logo} alt={buttons[2].logoAlt} />
                    <span className="text-[14px]">{buttons[2].text}</span>
                </Link>
                <button
                    onClick={() =>
                        openWhatsApp(
                            "+918860000332",
                            "Hi there! I would like to know more about your services."
                        )
                    }
                    className="flex h-[48px] w-full items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded hover:bg-[#22c35e] transition-colors"
                >
                    <Image width={20} height={20} src={buttons[3].logo} alt={buttons[3].logoAlt} />
                    <span className="text-[14px]">{buttons[3].text}</span>
                </button>
            </div>
        </div>
    );
}
