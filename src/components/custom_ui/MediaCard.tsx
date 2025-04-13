import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import mintImg from '@/Assets/icons/mint.svg'
import { FC } from 'react';


type CardData = {
    id: string;
    title: string;
    description: string;
    logo?: string;
};

const MediaCard: FC<CardData> = ({ title, description, logo }) => (
    <div className="">
        <div className="relative p-[16px] bg-white border-[1px] border-[#F1F1F1] rounded-[12px] overflow-hidden">
            <div
                className="absolute -top-[150px] w-full h-[20em] inset-0 bg-gradient-radial from-[#00577a17] via-transparent to-transparent"
                aria-hidden="true"
            ></div>
            <div className="relative py-2 px-2 flex flex-col gap-[24px]">
                <Image
                    src={logo || 'mintImg'}
                    alt="Logo"
                    width={107}
                    height={90}
                    className="w-[107px] h-[90px] object-contain"
                />
                <h2 className="text-[20px] md:text-[24px] leading-[36px] tracking-[-0.5px] font-bold text-black">{title}</h2>
                <p className="text-[16px] font-[400] text-gray-600">{description}</p>
                <Link href="#" className="text-blue-500 hover:underline">
                    View more
                </Link>
            </div>
        </div>
    </div>
);

export default MediaCard