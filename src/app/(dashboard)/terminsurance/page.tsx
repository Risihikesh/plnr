import { insuranceFaq } from "@/data/insurance-faq";
import Link from "next/link";
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
                  {insuranceFaq.map((faq, index) => (
                      <div key={index} className="space-y-2">
                          <Link
                              href={`/terminsurance/${faq.slug}`}
                              className="text-[20px] font-[700] hover:text-primary"
                          >
                              {index + 1}. {faq.question}
                          </Link>
                          <div className="text-[16px] leading-[24px] font-[400] text-muted-foreground">
                              {faq.answer}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default page;
