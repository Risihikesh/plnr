"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import InsuranceTable from "@/components/dashboard/termInsurance/table";
import { getInsuranceFaq } from "@/data/insurance-faq";
import { StaticImageData } from "next/image";
import { InsuranceFaqItem } from "@/types";
import { getChapterData } from "@/services/blog";
import { chapterDataType } from "@/types/blog";

export default function TermInsuranceContent() {
    const params = useParams();
    const [res, setRes] = useState<chapterDataType>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                if (params.question) {
                    const res = (await getChapterData(params.question as string)).res as chapterDataType;
                    setRes(res);
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
    if (!res) return <div>No data found</div>;

    return (
        <>
            <h2 className="text-[22px] leading-[24px] sm:text-[24px] sm:leading-[30px] md:text-[28px] md:leading-[40px] font-bold">
                {res?.data?.item?.title}
            </h2>
            <hr className="w-full border my-[30px] sm:my-[50px] lg:my-[80px]" />
            <div className="w-full md:w-[717px] m-auto">
                <img
                    src={res?.data?.item?.image}
                    alt=""
                    className="w-full mb-[30px]"
                />
                <div dangerouslySetInnerHTML={{__html: res?.data?.item?.content }} className="text-[16px] leading-[24px] font-[400] text-muted-foreground" />
            </div>
        </>
    );
}
