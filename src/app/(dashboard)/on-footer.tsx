import Link from "next/link";

const Onfooter = () => {
    return (
        <section className="bg-[#00587A] w-full flex flex-col md:flex-row items-center justify-between md:px-[100px]  gap-0 py-8 sm:py-16 px-4 sm:px-0">
            <div className="text-center w-[310px] md:w-auto md:text-start max-w-xl flex flex-col items-centre justify-center">
                <h2 className="text-white text-[24px] leading-[39px] font-light">
                    Ready to get <span className="font-semibold">Started?</span>
                </h2>

                <p className="text-white text-base leading-[24px] font-normal mt-2 w-[184px] md:w-full m-auto">
                    Financial Planning at Rs. 13,000 per year
                </p>

                <p className="text-white text-base leading-[24px] font-medium mt-1 w-[219px] md:w-full m-auto ">
                    Fee-Only | No Commission | No Product Selling
                </p>
            </div>
            <Link href="/signin">
                <button className="bg-white text-[#00587A] h-[54px] w-[310px] md:h-[50px] md:w-[213px] font-semibold rounded-lg mt-6 px-8 py-2 text-base sm:text-base hover:bg-gray-100 transition">
                    Get Started
                </button>
            </Link>
        </section>
    );
};

export default Onfooter;
