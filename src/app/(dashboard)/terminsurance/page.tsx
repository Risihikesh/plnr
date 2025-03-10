import { faqData } from "@/data/insurance-faq";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-[193px] w-[408px] md:w-full md:h-[169px] flex items-center justify-center ">
        <div className="w-[390px] md:w-[1192px] border-b border-gray-300 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">Term Insurance</h1>
        </div>

      </div>
      <div className="md:h-[1337px] flex justify-center items-center">
        <div className="w-full  max-w-5xl mx-auto p-4 space-y-8">
          {faqData.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-[20px] font-[700]">
                {index + 1}. {faq.question}
              </h2>
              <div className="text-[16px] leading-[24px] font-[400] text-muted-foreground">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
