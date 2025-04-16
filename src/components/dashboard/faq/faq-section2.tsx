import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { tabItems } from "@/data/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getHomeData } from "@/services/getHomeData";
import { HomeData } from "@/types/home";

export default async function FAQSection() {

    const res = (await getHomeData()) as { res: { data: HomeData } | null; err: any };
    const data = res?.res?.data?.homeFaqs;
    const faqTopic = data?.faqs;
    return (
        <div className="flex lg:flex-row flex-col container mx-auto py-8 mt-[300px] lg:mt-[100px] px-[20px] md:px-[100px] xll:px-[200px]">
            <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[450px]">
                <img src="/faq.svg" alt="" className="w-full" />
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="max-h-[847px] flex flex-col items-center flex-1">
                    <Accordion type="single" collapsible className="w-full text-[18px] font-[400]">
                        {faqTopic?.faqs?.map((item, index) => (
                            <AccordionItem key={item._id} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-[16px] leading-[24px] font-normal p-[12px]">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="bg-[#F6FBFA] text-[16px] leading-[24px] px-[23px] py-[30px]">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <Link href="/faq" className="fit-content m-auto md:m-0">
                    <Button
                        variant={"outline"}
                        className="text-primary w-fit font-semibold rounded-[4px] border border-primary sm:m-0 m-auto px-[85px] sm:px-[36px] h-[50px] sm:h-[44px]"
                    >
                        Check More FAQ
                    </Button>
                </Link>
            </div>
        </div>
    );
}
