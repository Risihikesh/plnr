
"use client";

import Image from "next/image";
import Divider from "../../../Assets/Dashboard/hero/Horizontal Divider.svg";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Policy from "@/components/dashboard/home/policy";
const url = process.env.NEXT_PUBLIC_API_BASE_URL;


const Detail = () => {
    const searchParams = useSearchParams();
    const product = searchParams.get("product");
    const insurer = searchParams.get("insurer");
    const policy = searchParams.get("policy");

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (product && insurer && policy) {
            fetch(`${url}api/homescreen/understandYourPolicy?product=${product}&insurer=${insurer}&policy=${policy}`)
                .then((res) => res.json())
                .then((json) => {
                    setData(json?.data?.[0] || null);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [product, insurer, policy]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Policy />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-red-500">Policy not found.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center m-10 gap-y-10">
            <p className="text-2xl font-bold">{data?.title || "Overview"}</p>
            <Image src={Divider} alt="divider" />
            <div className="bg-[#F8FBFF] min-h-[60vh] flex flex-col p-4 w-full items-center gap-y-8 shadow-md">
                <p>{data?.insurer.name}</p>
                <p className="text-[24px] leading-[38px] md:text-[36px] md:leading-[47px] font-bold whitespace-nowrap">{data?.policy.name}</p>
                <Link href="/" className="text-[#0898E1] font-semibold underline text-[14px] leading-[34.57px] md:text-[20px] md:leading-[34.57px]">
                    View policy brochure
                </Link>

                <div
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </div>
        </div>
    );
};

export default Detail;
