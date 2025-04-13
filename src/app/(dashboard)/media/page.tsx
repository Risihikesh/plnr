import BannerHeading from '@/components/custom_ui/BannerHeading';
import MediaCard from '@/components/custom_ui/MediaCard';
// import { data } from '@/data/mediaData';
import { FC } from 'react';
import Bg from '@/Assets/Dashboard/about/id-31-img.svg';
import { MediaData } from '@/types/media';
import { getMediaData } from '@/services/media';


const MediaPage = async () => {
    const { res, err } = await getMediaData();
    const data = res?.data as MediaData;
    return (
        <div>
            <BannerHeading img={Bg} heading='' highlightedText="Media" />
            <div className=" py-10 flex flex-col items-center gap-[13px]">

                {/* heading  */}
                <div className='py-[30px]'>
                    <h1 className="text-xl md:text-[36px] text-[32px] font-[600] capitalize">
                        <span className="font-bold">Press Coverage</span>
                    </h1>

                    <div className="relative px-[30px] before:content-['_'] before:bg-[#00587A] before:h-[2px] before:absolute before:w-[40px] before:left-[40%] before:-top-[55px] "></div>
                </div>
                {/* cards */}
                <div className="flex md:w-[80%] px-[10px] lg:px-[25px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.articles?.map((item) => (
                            <MediaCard
                                key={item._id}
                                id={item._id}
                                title={item.title}
                                description={item.description}
                                logo={item.logo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MediaPage;
