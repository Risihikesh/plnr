import BlogCard from "@/components/custom_ui/BlogCard";
import { blogContent } from "@/data/blogContent";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

const Page = () => {
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
        {blogContent.map((obj, i) => (
          <BlogCard
            key={i}
            index={obj.id}
            title={obj.title}
            description={obj.description}
            btn_text={obj.btn_text}
            btn_link={obj.btn_link}
            chapters={obj.chapters}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
