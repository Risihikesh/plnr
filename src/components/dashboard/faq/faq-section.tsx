import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, tabItems } from "@/data/faq";

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="fee" className="w-full">
        <div className="relative w-full overflow-x-auto scrollbar-hide flex items-center justify-between m-auto border-b border-gray-200 mb-6">
          <TabsList className="flex items-center  w-fit min-w-fit border-none whitespace-nowrap mx-auto mb-4">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="inline-flex items-center justify-center px-4 py-3 text-base font-normal transition-all text-gray-600 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent after:transition-colors data-[state=active]:after:bg-blue-600 flex-shrink-0"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value="fee" className="space-y-6 flex flex-col">
          <h2 className="text-2xl font-extrabold mb-6 self-center m-auto">
            Fee
          </h2>
          <div className="h-[847px] flex flex-col items-center">
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
          <div className="mt-12 text-center space-y-2 md:h-[174px] h-[207px] flex flex-col justify-center items-center">
            <h3 className="text-2xl font-medium">Didn't find what you need?</h3>
            <p className="text-[#13171F]">
              Ask us at{" "}
              <a
                href="mailto:support@plnr.in"
                className="hover:underline text-[#13171F]"
              >
                support@plnr.in
              </a>
            </p>
          </div>
        </TabsContent>

        {/* Other tab contents would go here */}
        {tabItems.slice(1).map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <h2 className="text-2xl font-semibold mb-6">{tab.title}</h2>
            <p className="text-muted-foreground">
              Content for {tab.title} section coming soon...
            </p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

