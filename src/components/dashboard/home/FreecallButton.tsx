"use client";

import React from "react";
import { useRouter } from "next/navigation";

const FreecallButton = ({ disabled }: {
    disabled?: boolean;
}) => {

    const router = useRouter();
    
    return (
        <button
            className="sm:w-fit w-full flex bg-[#0898E1] active:bg-[#0281C1] active:text-white py-[10px] sm:px-[20px] lg:px-[48px] rounded-md text-white font-semibold gap-2 justify-center items-center cursor-pointer hover:bg-white border-2 border-transparent hover:border-primary hover:text-primary group disabled:bg-[#E5E7EB] disabled:cursor-not-allowed disabled:text-[#A2A7B3] disabled:hover:border-transparent whitespace-nowrap"
            onClick={() => {
                router.push("/contactus");
            }}
            disabled={disabled}
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    className="fill-white group-hover:fill-primary group-active:fill-white group-disabled:fill-[#A2A7B3]"
                    d="M10.9031 12.8375L12.5656 11.1734C12.6835 11.0561 12.7771 10.9165 12.8409 10.7629C12.9047 10.6092 12.9375 10.4445 12.9375 10.2781C12.9375 9.93906 12.8047 9.62031 12.5656 9.38125L10.775 7.59063C10.6576 7.47272 10.5181 7.37918 10.3644 7.31536C10.2108 7.25154 10.0461 7.21871 9.87969 7.21875C9.54062 7.21875 9.22187 7.35156 8.98281 7.59063L7.67344 8.9C6.99787 8.59351 6.3833 8.16738 5.85938 7.64219C5.33291 7.11831 4.90523 6.50379 4.59688 5.82813L5.90625 4.51875C6.02415 4.40137 6.1177 4.26184 6.18151 4.1082C6.24533 3.95455 6.27816 3.78981 6.27812 3.62344C6.27812 3.28438 6.14531 2.96563 5.90625 2.72656L4.11719 0.934376C3.99959 0.81633 3.8598 0.722704 3.70588 0.658883C3.55196 0.595062 3.38694 0.562306 3.22031 0.562501C2.88125 0.562501 2.5625 0.695313 2.32344 0.934376L0.6625 2.59531C0.279688 2.97656 0.0625 3.50313 0.0625 4.04375C0.0625 4.15781 0.0718746 4.26719 0.0906248 4.375C0.4375 6.48125 1.55781 8.57031 3.24219 10.2563C4.925 11.9406 7.0125 13.0594 9.125 13.4109C9.77031 13.5172 10.4344 13.3031 10.9031 12.8375Z"
                />
            </svg>
            <p className="text-[16px] leading-[30px] whitespace-nowrap">Free Call</p>
        </button>
    );
};

export default FreecallButton;
