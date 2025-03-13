import Section1 from "../../../components/dashboard/home/section1";
import Policy from "../../../components/dashboard/home/policy";
import { HowWeDoIt } from "@/components/dashboard/home/how-we-do-it";
import { NewsSection } from "@/components/dashboard/home/news-section";
import { videoData } from "@/data/videos";
import { createVideoSections } from "@/lib/youtube";
import { newsLogos } from "@/data/news-logos";
import { constructMetadata } from "@/lib/utils";
import WhyPlnr from "../../../components/dashboard/home/whyplnr";
import HowItWorks from "@/components/dashboard/home/how_it_works";
import Testimonials from "@/components/dashboard/home/testimonials/page";
import Services from "@/components/dashboard/home/service";
import FinancePlan from "@/components/dashboard/home/FinancePlan";
export const metadata = constructMetadata();
import { auth } from "../../../../auth";

const Page = async () => {
    const sections = createVideoSections(videoData.urls, videoData.titles);
    
    const session = await auth();
    console.log(session);

  return (
    <div>
      <Section1 />
      <Services />
      <HowWeDoIt sections={sections} />
      <NewsSection logos={newsLogos} />
      <WhyPlnr />
      <HowItWorks />
      <FinancePlan />
      <Policy />
      <Testimonials />
    </div>
  );
}

export default Page;
