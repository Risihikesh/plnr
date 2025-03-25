"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import InsuranceTable from "@/components/dashboard/termInsurance/table";
import { getInsuranceFaq } from "@/data/insurance-faq";
import { StaticImageData } from "next/image";
import { InsuranceFaqItem } from "@/types";

export default function TermInsuranceContent() {
    const params = useParams();
    const [data, setData] = useState<InsuranceFaqItem>({ question: "", answer: "", slug: "", image: {} as StaticImageData, textContents: [], tables: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                if (params.question) {
                    const result = getInsuranceFaq(
                        params.question as string
                    );
                    if (result) {
                        setData(result);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [params.question]);

    if (isLoading) return <div>Loading...</div>;
    if (!data) return <div>No data found</div>;

    return (
        <>
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
                {data?.textContents?.map((content, index) => (
                    <div key={index}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                            className="text-[16px] leading-[24px] font-normal"
                        />
                        {data?.tables?.[index] && (
                            <div key={data?.slug}>
                                <InsuranceTable
                                    columns={data?.tables[index]?.columns}
                                    rows={data?.tables[index]?.rows}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
