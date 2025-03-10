import Image from "next/image";

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

export function NewsSection({ logos }: NewsSectionProps) {
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
                        {logos.map((logo) => (
                            <div
                                key={logo.name}
                                //   className="relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logo.logo}
                                    alt={logo.alt}
                                    // width={logo.width}
                                    height={logo.height}
                                    className={`object-contain object-left md:object-center h-[50px] md:h-fit`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-start">
                        {logos.map((logo) => (
                            <div
                                key={logo.name}
                                //   className="relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logo.logo}
                                    alt={logo.alt}
                                    height={logo.height}
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
