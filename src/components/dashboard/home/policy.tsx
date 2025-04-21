"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Understandthepolicyimg from "@/Assets/home/understand_the_policy_img.svg";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getHomeData } from "@/services/getHomeData";
import { HomeData, UnderstandSection } from "@/types/home";


const Policy = () => {
  const [data, setData] = useState<UnderstandSection | null>(null);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedInsurer, setSelectedInsurer] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = (await getHomeData()) as {
        res: { data: HomeData } | null;
        err: any;
      };
      setData(res?.res?.data?.understand || null);
    };
    fetchData();
  }, []);

  const products = data?.product || [];
  const insurers = data?.insurer || [];
  const policies = data?.policy || [];

  const filteredInsurers = selectedProduct
    ? insurers.filter((i) => i.product._id === selectedProduct)
    : [];

  const filteredPolicies = selectedInsurer
    ? policies.filter((p) => p.insurer._id === selectedInsurer)
    : [];


  return (
    <div
      id="compare"
      className="relative w-full p-[16px] h-fit flex items-center justify-center overflow-hidden bg-[#00587A12]"
    >
      <div className="relative text-center px-[12px]">
        <hr className="h-[3px] w-[80px] bg-[#00587A] m-auto mb-[37px] md:mb-[42px] mt-[87px] md:mt-[115px] border-none" />
        <h1 className="text-2xl sm:text-3xl md:text-[32px] leading-[34px] font-normal mb-4">
          Understand Your&nbsp;
          <span className="font-bold block sm:inline">Policy</span>
        </h1>
        <p className="text-normal sm:text-base leading-[24px] md:text-normal text-gray-500 max-w-xl mx-auto">
          {data?.description}
        </p>

        <div className="mt-[32px] md:mt-[100px] flex flex-col md:flex-row md:h-[70px] justify-center items-center gap-[10px] xl:gap-[15px] bg-transparent md:bg-white bg-none rounded-lg md:py-[8px] md:px-[10px] md:pl-[20px] p-0 border-none md:border-[1px] border-[#DDDDDD] pb-[100px] md:pb-auto">
          {/* <Select>
                      <SelectTrigger className="outline-none ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
                          <SelectValue placeholder="Select Product" />
                      </SelectTrigger>
                      <SelectContent className="p-[11px] gap-[10px] w-full lg:w-fit">
                          <SelectItem
                              value="option1"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 1
                          </SelectItem>
                          <SelectItem
                              value="option2"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 2
                          </SelectItem>
                          <SelectItem
                              value="option3"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 3
                          </SelectItem>
                      </SelectContent>
                  </Select> */}


        
          <Select onValueChange={(val) => {
            setSelectedProduct(val);
            setSelectedInsurer("");
            setSelectedPolicy("");
          }}>
            <SelectTrigger className="outline-none ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
              <SelectValue placeholder="Select Product" />
            </SelectTrigger>
            <SelectContent className="p-[11px] gap-[10px]">
              {products.map((p) => (
                <SelectItem key={p._id} value={p._id} className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]">
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <svg
            className="hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="52"
            viewBox="0 0 2 72"
            fill="none"
          >
            <path
              d="M1 70.5L1 1.5"
              stroke="#DDDDDD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {/* <Select>
                      <SelectTrigger className="outline-none text-[#818181] ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
                          <SelectValue placeholder="Select Insurer" />
                      </SelectTrigger>
                      <SelectContent className="p-[11px] gap-[10px]">
                          <SelectItem
                              value="option1"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 1
                          </SelectItem>
                          <SelectItem
                              value="option2"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 2
                          </SelectItem>
                          <SelectItem
                              value="option3"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 3
                          </SelectItem>
                      </SelectContent>
                  </Select> */}

          
          <Select onValueChange={(val) => {
            setSelectedInsurer(val);
            setSelectedPolicy("");
          }} disabled={!selectedProduct}>
            <SelectTrigger className="outline-none text-[#818181] ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
              <SelectValue placeholder="Select Insurer" />
            </SelectTrigger>
            <SelectContent className="p-[11px] gap-[10px]">
              {filteredInsurers.map((i) => (
                <SelectItem key={i._id} value={i._id} className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]">
                  {i.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <svg
            className="hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="52"
            viewBox="0 0 2 72"
            fill="none"
          >
            <path
              d="M1 70.5L1 1.5"
              stroke="#DDDDDD"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {/* <Select>
                      <SelectTrigger className="outline-none text-[#818181] ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
                          <SelectValue placeholder="Select the policy" />
                      </SelectTrigger>
                      <SelectContent className="p-[11px] gap-[10px]">
                          <SelectItem
                              value="option1"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 1
                          </SelectItem>
                          <SelectItem
                              value="option2"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 2
                          </SelectItem>
                          <SelectItem
                              value="option3"
                              className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]"
                          >
                              Option 3
                          </SelectItem>
                      </SelectContent>
                  </Select> */}



          <Select onValueChange={(val) => setSelectedPolicy(val)} disabled={!selectedInsurer}>
            <SelectTrigger className="outline-none text-[#818181] ring-0 bg-white md:bg-transparent py-[24px] px-[20px] md:px-0 md:py-0 border-none shadow-none text-[16px] lg:text-[18px] leading-[18px] font-medium focus:ring-0 justify-between md:justify-start gap-[20px] lg:gap-[40px] w-full lg:w-fit">
              <SelectValue placeholder="Select Policy" />
            </SelectTrigger>
            <SelectContent className="p-[11px] gap-[10px]">
              {filteredPolicies.map((p) => (
                <SelectItem key={p._id} value={p._id} className="focus:bg-primary focus:text-white text-[14px] leading-[20px] mb-[10px] py-[13px] px-[20px]">
                  {p.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Link href={`/details?product=${selectedProduct}&insurer=${selectedInsurer}&policy=${selectedPolicy}`} className="w-full md:w-fit">
            <button disabled={!selectedProduct || !selectedInsurer || !selectedPolicy} className="mt-[46px] md:mt-0 md:ml-4 ml-0 bg-primary text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-primary hover:text-primary border rounded-md px-[40px] py-[12px] transition md:w-auto w-[90%] font-semibold whitespace-nowrap">
              Check Now
            </button>
          </Link>
        </div>

        <div className=" hidden mt-12 md:flex justify-center">
          {data?.image ? (
            <Image
              src={data.image}
              width={288}
              height={180}
              alt={data.imageAlt || "Policy image"}
              className="w-72 lg:w-56 sm:w-96"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Policy;
