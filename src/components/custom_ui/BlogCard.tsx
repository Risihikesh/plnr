import Link from 'next/link';
import React from 'react'


interface BlogCardProps {
    index: number;
    title: string;
    chapters?: string;
    description: string;
    btn_text: string;
    btn_link: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ index, title, description, btn_text, btn_link, chapters }) => {
    return (
        <div className='sm:w-[358px] md:w-[460px] md:p-0 p-[16px]'>
            <div className='text-[36px] font-[500] relative before:absolute before:content-["_"] before:h-[5px] before:w-[90%] md:before:w-[427px] before:bg-[#00638d] before:right-1  before:top-[42%]'>
                {index}
            </div>
            <h1 className='text-[20px] font-[700] leading-[28px]'>
                {title}
            </h1>
            <p className='text-[16px] font-[400] leading-[24px] py-[4px]'>
                {chapters && chapters}
            </p>
            <p className={`text-[16px] font-[400] text-wrap leading-[24px] pb-[16px] ${!chapters && "pt-[24px]"}`}>
                {description}
            </p>
            <Link href={btn_link} className=' text-[#3f83f8] text-[16px] leading-[24px] font-[500]'>
                {btn_text}
            </Link>
        </div>
    );
};
export default BlogCard


