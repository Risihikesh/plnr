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
                                  <AccordionTrigger className="text-left text-[16px] leading-[24px] font-normal p-[12px]">
                                      {item.question}
                                  </AccordionTrigger>
                                  <AccordionContent className="bg-[#F6FBFA]">
                                      <div className="text-[16px] leading-[24px] px-[23px] py-[30px]">
                                          {item.answer}
                                      </div>
                                  </AccordionContent>
                              </AccordionItem>
                          ))}
                      </Accordion>
                  </div>
              </TabsContent>

              {tabItems.slice(1).map((tab, index) => (
                  <TabsContent
                      key={tab.title}
                      value={tab.value}
                      className="space-y-6 flex flex-col"
                      style={{ marginTop: `-${index * 0.5}px` }}
                  >
                      <h2 className="text-2xl font-extrabold mb-6 self-center m-auto">
                          {tab.title}
                      </h2>
                      <div className="w-[98%] sm:w-[90%] md:w-[80%] xl:w-[60%] m-auto text-base sm:text-[18px] font-normal leading-[40px]">
                          <Accordion
                              type="single"
                              collapsible
                              className="w-full text-[18px] font-[400]"
                          >
                              {tab.faqItems?.map((item, index) => (
                                  <AccordionItem
                                      key={index}
                                      value={`item-${index}`}
                                  >
                                      <AccordionTrigger className="text-left text-[16px] leading-[24px] font-normal p-[12px]">
                                          {item.question}
                                      </AccordionTrigger>
                                      <AccordionContent className="bg-[#F6FBFA]">
                                          <div
                                              className="text-[16px] leading-[24px] px-[23px] py-[30px]"
                                              dangerouslySetInnerHTML={{
                                                  __html: item.answer,
                                              }}
                                          />
                                      </AccordionContent>
                                  </AccordionItem>
                              ))}
                          </Accordion>
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