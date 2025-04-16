import Link from "next/link";
interface GetStartedData {
    title: string;
    description: string;
    tags: string[];
    _id: string;
}

interface OnfooterProps {
    data?: GetStartedData;
}

const Onfooter = ({ data }: OnfooterProps) => {
    return (
        <section className="bg-[#00587A] w-full flex flex-col md:flex-row items-center justify-between md:px-[100px]  gap-0 py-8 sm:py-16 sm:px-0">
            <div className="text-center w-full sm:w-[310px] md:w-auto md:text-start max-w-xl flex flex-col items-centre justify-center">
                <h2 className="text-white text-[24px] leading-[39px] font-light">
                    Ready to get <span className="font-semibold">Started?</span>
                </h2>

                <p className="text-white text-base leading-[24px] font-normal mt-2 w-[184px] md:w-full m-auto">
                    {data?.description}
                </p>

                {data?.tags?.length ? (
                    <p className="text-white text-[14px] sm:text-base whitespace-nowrap leading-[24px] font-medium mt-1 w-fit md:w-full m-auto">
                        {data.tags.join(" | ")}
                    </p>
                ) : null}
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
