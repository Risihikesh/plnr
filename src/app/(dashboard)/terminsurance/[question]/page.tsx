import InsuranceTable from "@/components/dashboard/termInsurance/table";
import { getInsuranceFaq } from "@/data/insurance-faq";
import React from "react";

const Page = async ({ params }: { params: { question: string } }) => {
    const resolvedParams = await params;
    const data = getInsuranceFaq(resolvedParams.question);

    return (
        <div className="px-[20px] sm:px-[30px] w-full lg:w-[900px] m-auto h-fit py-[50px]">
            <div className="mb-[20px]">
                <h1 className="text-[18px] leading-[24px] font-semibold">
                    Term Insurance
                </h1>
                <div className="w-[300px] bg-[#00638d] pt-1"></div>
            </div>
            <h2 className="text-[22px] leading-[24px] sm:text-[24px] sm:leading-[30px] md:text-[28px] md:leading-[40px] font-bold">
                {data?.question}
            </h2>
            <hr className="w-full border my-[30px] sm:my-[50px] lg:my-[80px]" />
            <div className="w-full md:w-[717px] m-auto">
                <img
                    src={data?.image?.src}
                    alt=""
                    className="w-full mb-[30px]"
                />
                {data?.textContents.map((content, index) => (
                    <>
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                            className="text-[16px] leading-[24px] font-normal"
                        />
                        {data?.tables[index] && (
                            <div key={data?.slug}>
                                <InsuranceTable
                                    columns={data?.tables[index]?.columns}
                                    rows={data?.tables[index]?.rows}
                                />
                            </div>
                        )}
                    </>

                    // <div key={index}>{content}</div>
                ))}
            </div>
        </div>
    );
};

export default Page;
