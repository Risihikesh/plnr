import { insuranceFaq } from "@/data/insurance-faq";
import { getAllChapters } from "@/services/blog";
import { allChaptersDataType } from "@/types/blog";
import Link from "next/link";
import React from "react";

async function page() {

    const res = (await getAllChapters("term-insurance")).res as allChaptersDataType;
    const data = res.data;
    
  return (
      <div className="flex flex-col items-center justify-center ">
          <div className="h-[193px] w-[408px] md:w-full md:h-[169px] flex items-center justify-center ">
              <div className="w-[390px] md:w-[1192px] border-b border-gray-300 h-full flex items-center justify-center">
                  <h1 className="text-4xl font-bold">{data.item.title}</h1>
              </div>
          </div>
          <div className="md:h-fit flex justify-center items-center">
              <div className="w-full  max-w-5xl mx-auto p-4 space-y-8">
                  {data.item.chapters.map((faq, index) => (
                      <div key={index} className="space-y-2">
                          <Link
                              href={`/terminsurance/${faq.slug}`}
                              className="text-[20px] font-[700] hover:text-primary"
                          >
                              {index + 1}. {faq.title}
                          </Link>
                          <div className="text-[16px] leading-[24px] font-[400] text-muted-foreground">
                              {faq.description}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default page;
