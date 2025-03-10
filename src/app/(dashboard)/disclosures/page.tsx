import BannerHeading from "@/components/custom_ui/BannerHeading";
import SebiDisclosuresBody from "@/components/dashboard/disclosures/SebiDisclosuresBody";
import { constructMetadata } from "@/lib/utils";
import React from "react";
import heroBg from "@/Assets/Dashboard/hero/sebiDeisclosuresBg.png";
import mobileBg from "@/Assets/Dashboard/hero/sebiDisclosuresMobileBg.png"


export const metadata = constructMetadata();

const Page = () => {
  return (
    <div>
      <BannerHeading heading="SEBI" highlightedText="Disclosures" img={heroBg} mobileImg={mobileBg}/>
      <SebiDisclosuresBody />
    </div>
  );
};

export default Page;
