import Image from "next/image";
import { getHomeData } from "@/services/getHomeData";
import { HomeData } from "@/types/home";
interface NewsLogo {
    name: string;
    logo: any; // Using 'any' here as the imported SVG type can vary
    alt: string;
    width: number;
    height: number;
}

interface NewsSectionProps {
    logos: NewsLogo[];
}

export async function NewsSection() {

    const res = (await getHomeData()) as { res: { data: HomeData } | null; err: any };
        const data = res?.res?.data?.inNews;
        console.log(data)
    
    return (
        <section className="py-8 md:py-16 w-full aspect-[1943/425]">
            <div className="flex-col-center max-w-7xl mx-auto px-4">
                <hr className="h-[3px] w-[80px] bg-[#00587A] m-auto mb-[24px] md:mb-[33px]" />
                <h2 className="text-center text-[24px] leading-[28px] md:text-[40px] md:leading-[47px] font-light mb-8 md:mb-12">
                    PLNR <span className="font-bold md:font-light">In the</span>{" "}
                    <span className="font-bold">News</span>
                </h2>
                <div className="w-fit scroll-animation2">
                    <div className="flex flex-row items-start">
                        {data?.companies?.map((logo) => (
                            <div
                                key={logo.name}
                                //   className="relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                   src={logo.image as string }
                                   alt={logo.imageAlt as string || "home banner" } 
                                   width={94} 
                                   height={68}
                                    className={`object-contain object-left md:object-center h-[50px] md:h-fit`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-start">
                        {data?.companies?.map((logo) => (
                            <div
                                key={logo._id}
                                //   className="relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logo.image as string }
                                    alt={logo.imageAlt as string || "home banner" } 
                                    width={94} 
                                    height={68}
                                    className={`object-contain object-left md:object-center h-[50px] md:h-fit`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
