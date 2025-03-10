'use client'
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const RegulatoryDisclosureModal: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(7);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mx-2 md:mx-auto">
            <div className="bg-white rounded-lg shadow-lg w-[100%] max-w-xl h-[85%] p-5 md:p-10 overflow-auto">
                <h2 className="text-[17px] md:text-[32px] font-bold text-center text-[#065374]">Regulatory Disclosures</h2>
                <p className="mt-4 text-[13px] font-[500] text-center text-black text-opacity-85 leading-[19px] md:leading-[28px]">
                    PLNR INVESTMENT ADVISORS is a SEBI Registered Investment Advisor (INA000018966). SEBI requires RIA's to
                    disclose complaint status on their homepage. Pursuant to the same, please note:
                </p>
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-[12px] md:text-sm border text-center border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2 md:px-4 md:py-2">Complaint Status as on 1st December 2024</th>
                                <th className="border border-gray-300 p-2 md:px-4 md:py-2">Number of Complaints</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">At the Beginning of Month</td>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">0</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">Received during the month</td>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">0</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">Resolved during the month</td>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">0</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">Pending at the ending of the month</td>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">0</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">Reason for pendency</td>
                                <td className="border border-gray-300 p-2 md:px-4 md:py-[15px]">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col gap-[12px]'>

                    <p className="mt-4 text-center text-sm text-gray-500">This modal closes in {timeLeft} seconds</p>
                    <div className="mt-4 text-center">
                        <Button onClick={() => setIsVisible(false)} variant="close">
                            CLOSE
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegulatoryDisclosureModal;
