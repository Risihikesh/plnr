import BannerHeading from "@/components/custom_ui/BannerHeading";
import React from "react";
import BannerImg from "@/Assets/Dashboard/about/bg-about.svg";
import MobileImg from "@/Assets/Dashboard/about/mobile.svg";
import AboutSection from "@/components/dashboard/about/AboutSection";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

const Page = () => {
    return (
        <div>
            <BannerHeading
                img={BannerImg}
                imgAspect="aspect-[390/400] md:aspect-[1920/430]"
                mobileImg={MobileImg}
                highlightedText="Transparent. Unbiased. Efficient."
            />

            <div>
                <AboutSection />
            </div>
        </div>
    );
};

export default Page;
