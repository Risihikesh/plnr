import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, tabItems } from "@/data/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQSection() {
    return (
        <div className="flex lg:flex-row flex-col container mx-auto py-8 mt-[300px] lg:mt-[100px] px-[20px] md:px-[100px] xll:px-[200px]">
            <div className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[450px]">
                <img src="/faq.svg" alt="" className="w-full" />
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="max-h-[847px] flex flex-col items-center flex-1">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full text-[18px] font-[400]"
                    >
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="bg-[#F6FBFA] p-4 text-[18px]">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <Link href="/faq" className="fit-content m-auto md:m-0">
                <Button variant={'outline'} className="text-primary w-fit font-semibold rounded-[4px] border-2 border-primary sm:m-0 m-auto px-[85px] sm:px-[36px] h-[50px] sm:h-[44px]">Check More FAQ</Button>
                 </Link>
            </div>
        </div>
    );
}
