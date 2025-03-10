import React from 'react';
import img from '@/Assets/Dashboard/hero/Component2.svg';
import Link from 'next/link';

const FinancePlan = ({ }) => {
    return (
        <div className="bg-[#00587A] flex md:flex-row flex-col items-center justify-between md:py-auto gap-10 md:py-[20px] py-[52px] px-[16px] lg:px-[180px]">
            <div className="flex items-center w-full relative">

                <img src={img.src} className="lg:flex hidden h-[261px] w-[261px]" />
                <div className="flex flex-col lg:absolute md:text-left text-center md:px-auto px-[28px] left-32 w-full md:w-fit">
                    <h2 className="w-fit text-white text-[24px] leading-[38px] md:text-[26px] md:leading-[39px] font-light gap-[10px] md:mb-[8px]">Download <span className='font-semibold'>Financial Plan</span></h2>
                    <p className="w-fit text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] font-[400]">
                        Explore how PLNR streamlines your financial planning process
                    </p>
                </div>
            </div>

            {/* Button Section */}
            <div>
                <a href="/sample_plan.pdf" download className="bg-white text-[#00587A] px-[104px] md:px-[56px] py-[14px] md:py-[12px] text-[16px] font-semibold rounded-md hover:bg-blue-100">
                    Download
                </a>
            </div>
            
        </div>
    );
};

export default FinancePlan;
