import BannerHeading from "@/components/custom_ui/BannerHeading";
import React from "react";
import BannerImg from "@/Assets/Dashboard/about/bg-about.svg";
import MobileImg from "@/Assets/Dashboard/about/mobile.svg";
import AboutSection from "@/components/dashboard/about/AboutSection";
import { constructMetadata } from "@/lib/utils";
import { AboutData } from "@/types/about";
import { getAboutData } from "@/services/about";

export const metadata = constructMetadata();

const Page = async () => {
    const res = (await getAboutData()) as { res: { data: AboutData } | null; err: any };
    const data = res?.res?.data;
    // console.log(data)

    return (
        <div>
            <BannerHeading
                img={data?.image ? { src: data.image } : undefined}
                // imgAspect="aspect-[390/400] md:aspect-[1920/430]"
                mobileImg={data?.image ? { src: data.image } : undefined}
                highlightedText={data?.title}
            />

            <div>
                <AboutSection />
            </div>
        </div>
    );
};

export default Page;
