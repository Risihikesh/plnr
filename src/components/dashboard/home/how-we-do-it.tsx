// import { useState } from "react";
import Image from "next/image";
import playbtn from "@/Assets/Dashboard/video-sections/yt-play.svg";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import type { VideoSection } from "@/lib/youtube";
import { getHomeData } from "@/services/getHomeData";
import { HomeData } from "@/types/home";
interface HowWeDoItProps {
    sections: VideoSection[];
}

export async function HowWeDoIt() {
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //     setIsClient(true);
    // }, []);

    // if (!isClient) {
    //     return null; // or a loading placeholder
    // }

    //  const res = (await getGetStartedData()) as GetStartedData;
    //     const data = res?.res?.data;


    const res = (await getHomeData()) as { res: { data: HomeData } | null; err: any };
    const data = res?.res?.data?.howWeDoIt;



    return (
        <section className="py-8 lg:mt-[-120px]  bg-white">
            <div className="px-[10px] sm:px-[30px] md:px-[80px] mx-auto">
                <div className="text-center flex flex-col items-center justify-between gap-8 mb-8">
                    <div className="md:h-[3px] h-[2px] w-[80px] mb-[2.5%] bg-[#00587A]" />
                    <h2 className="text-2xl text-[#13171F] md:text-[35px] leading-[35px] font-[300] mb-[-10]">
                        How We <span className=" font-bold"> Do it</span>
                    </h2>
                    <p className="text-[#13171F] text-base leading-[24px] font-normal max-w-[300px] md:max-w-lg mx-auto md:px-4">
                        {/* Watch these quick 1-minute videos and read the FAQ page!
                        In just 15 minutes you'll understand how we can work with
                        you. Then you can get started with PLNR! */}

                        {data?.content?.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {data?.content?.cards?.map((section) => (
                        <div
                            key={section._id}
                            className="flex flex-col items-center"
                        >
                            <h3 className="text-[14px] leading-[20px] whitespace-nowrap overflow-hidden text-[#00587A] lg:text-[24px] lg:leading-[30px] mb-[4px] md:mb-[13px] font-semibold lg:font-bold  ">
                                {section.title}
                            </h3>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="relative aspect-[336/196] w-[165px] md:w-[280px] xl:w-[336px] cursor-pointer group">
                                        <img
                                             src={`https://img.youtube.com/vi/${getYouTubeVideoId(section.video)}/hqdefault.jpg`}
                                             alt={section.title}
                                            className="rounded-lg object-cover w-full h-full"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg">
                                            <div className="w-16 h-16 flex items-center justify-center ">
                                                <Image
                                                    src={playbtn}
                                                    alt="play"
                                                    className="w-8 h-8 "
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <div className="hidden">
                                    <DialogTitle>{section.title}</DialogTitle>
                                </div>
                                <DialogContent className="sm:max-w-[800px]">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(section.video)}`}
                                        title={section.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="rounded-lg"
                                    />
                                </DialogContent>
                            </Dialog>
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 text-primary border-primary text-xs md:text-sm"
                            >
                                WATCH IN HINDI
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
function getYouTubeVideoId(url: string): string | null {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regExp);
    return match?.[1] || null;
}