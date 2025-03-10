import BannerHeading from "@/components/custom_ui/BannerHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems } from "@/data/faq";
import faqContent from "@/data/faqContent";
import { constructMetadata } from "@/lib/utils";
import { FC } from "react";

export const metadata = constructMetadata();

const FAQPage: FC = () => {
  return (
    <div>
      <BannerHeading heading="Help" highlightedText="Links" />

      <Tabs defaultValue="fee" className="w-full">
        <div className="relative w-full overflow-x-auto scrollbar-hide">
          <TabsList className="flex items-center w-fit min-w-fit border-none whitespace-nowrap mx-auto mb-4">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="inline-flex items-center justify-center px-4 py-3 text-sm sm:text-base font-normal transition-all text-gray-600 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent after:transition-colors data-[state=active]:after:bg-blue-600 flex-shrink-0"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="fee" className="space-y-6 flex flex-col">
          <h2 className="text-xl sm:text-2xl font-extrabold self-center m-auto">
            Fee
          </h2>
          <div className="px-6 sm:px-[50px] w-[98%] sm:w-[90%] md:w-[80%] xl:w-[60%] m-auto text-base sm:text-[18px] font-normal leading-[40px]">
            <Accordion type="single" collapsible>
              {faqContent.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-[#F6FBFA]">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>

        {tabItems.slice(1).map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="px-6 sm:px-[50px] lg:px-[380px] py-10 text-base sm:text-[18px]">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                {tab.title}
              </h2>
              <p className="text-muted-foreground">
                Content for {tab.title} section coming soon...
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center pt-[50px] gap-3 flex flex-col px-6 sm:px-0">
        <h1 className="text-xl sm:text-[28px] font-[500] leading-7">
          Didn`t find what you need?
        </h1>
        <p className="text-base sm:text-[18px] font-[300]">
          Ask us at support@plnr.in
        </p>
      </div>
    </div>
  );
};

export default FAQPage;