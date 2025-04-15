import BlogCard from "@/components/custom_ui/BlogCard";
import { blogContent } from "@/data/blogContent";
import { constructMetadata } from "@/lib/utils";
import { getBlogData } from "@/services/blog";
import { blogDataType } from "@/types/blog";

export const metadata = constructMetadata();

const Page = async () => {

    const res = (await getBlogData()).res as blogDataType;
    const data = res.data;
    
    
  return (
    <div className="flex flex-col justify-center items-center">
      {/* heading */}
      <div className="py-[64px] px-[16px] md:px-[284px]">
        <h1 className="leading-[40px] text-[36px] font-[700]">
          DIY Personal Financial Planning
        </h1>
      </div>

      {/* cards */}
      <div className="py-[65px] md:px-[96px] flex lg:items-start items-center md:flex-row flex-col flex-wrap justify-center lg:justify-between gap-4 max-w-[1152px] w-full border-y-[1px] border-[#dfe1e5]">
        {data.items.map((obj, i) => (
          <BlogCard
            key={i}
            index={i+1}
            title={obj.title}
            description={obj.description}
            btn_text={obj.status}
            btn_link={'/terminsurance'}
            chapters={obj.chapters.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
