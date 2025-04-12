import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { tabItems } from "@/data/faq";
import { getFaqData } from "@/services/faq";
import { FaqDataType } from "@/types/faq";

export default async function FAQSection() {

    const res = (await getFaqData()) as FaqDataType;
    const data = res?.res?.data?.data;
    const topics = res?.res?.data?.topics;
    
    return (
        <div className="container mx-auto px-4 py-8">
            <Tabs defaultValue="Fee" className="w-full">
                <div className="relative w-full overflow-x-auto scrollbar-hide flex items-center justify-between m-auto border-b border-gray-200 mb-6">
                    <TabsList className="flex items-center  w-fit min-w-fit border-none whitespace-nowrap mx-auto mb-4">
                        {topics.map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="inline-flex items-center justify-center px-4 py-3 text-base font-normal transition-all text-gray-600 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent after:transition-colors data-[state=active]:after:bg-blue-600 flex-shrink-0"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <TabsContent value="Fee" className="space-y-6 flex flex-col">
                    <h2 className="text-2xl font-extrabold mb-6 self-center m-auto">
                        Fee
                    </h2>
                    <div className="w-[98%] sm:w-[90%] md:w-[80%] xl:w-[60%] m-auto text-base sm:text-[18px] font-normal leading-[40px]">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full text-[18px] font-[400]"
                        >
                            {data.faqs[0].faqs?.map((item, index) => (
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

                {/* Other tab contents would go here */}
                {data.faqs.slice(1).map((tab, index) => (
                    <TabsContent
                        key={tab.topic}
                        value={tab.topic}
                        className={`space-y-6 flex flex-col`}
                        style={{ marginTop: `-${index * 0.5}px` }}
                    >
                        <h2 className="text-2xl font-extrabold mb-6 self-center m-auto">
                            {tab.topic}
                        </h2>
                        <div className="w-[98%] sm:w-[90%] md:w-[80%] xl:w-[60%] m-auto text-base sm:text-[18px] font-normal leading-[40px]">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full text-[18px] font-[400]"
                            >
                                {tab.faqs?.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                    >
                                        <AccordionTrigger className="text-left text-[16px] leading-[24px] font-normal p-[12px]">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="bg-[#F6FBFA] p-4">
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
            <div className="mt-12 text-center space-y-2 md:h-[174px] h-[207px] flex flex-col justify-center items-center">
                <h3 className="text-2xl font-medium">
                    {data.notFind.question}
                </h3>
                <p
                    className="text-[#13171F]"
                    dangerouslySetInnerHTML={{ __html: data.notFind.answer }}
                />
            </div>
        </div>
    );
}
