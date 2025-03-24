import Image from "next/image";
import Divider from "../../../Assets/Dashboard/hero/Horizontal Divider.svg";
import Link from "next/link";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

const Detail = () => {
  return (
      <div className="flex flex-col justify-center items-center m-10 gap-y-10">
          <p className="text-2xl font-bold">Overview</p>
          <Image src={Divider} alt="no-img" />
          <div className="bg-[#F8FBFF] min-h-[60vh] flex flex-col p-[8px] py-4 md:p-4 w-full items-center gap-y-[12px] md:gap-y-8 shadow-md">
              <p>HDFC LIFE</p>
              <p className="text-[24px] leading-[38px] md:text-[36px] md:leading-[47px] font-bold whitespace-nowrap">Click2Protect Super</p>
              <Link href="/" className="text-[#0898E1] font-semibold underline text-[14px] leading-[34.57px] md:text-[20px] md:leading-[34.57px]">
                  View policy brochure
              </Link>
              <p className="text-left md:text-center text-base leading-[24px] md:text-[16px] md:leading-[24px] text-[#3B414D] md:text-[#13171F] font-normal md:font-normal">
                  HDFC Life Click2Protect (C2P) Super is a good plan but one
                  that is relatively expensive for most profiles we’ve evaluated
                  so far. And while HDFC Life does carry the HDFC brand name, a
                  good track record and relatively smooth operations, the price
                  may be off-putting to a lot of people. If you set aside the
                  price however, you’ll see that this is a good product marketed
                  by a solid life insurance company and one that offers
                  significant customization options.
              </p>
              {/* <div className="flex flex-col md:flex-row gap-4 w-full md:w-fit">
                  <div className="p-2 text-white bg-[#0898E1] font-semibold border border-[#0898E1] rounded-md h-10 md:w-40 w-full flex items-center justify-center text-sm md:text-lg">
                      <Link href="/">Buy Now</Link>
                  </div>
                  <div className="p-2 text-[#0898E1] font-semibold border border-[#0898E1] rounded-md h-10 md:w-40 w-full flex items-center justify-center text-sm md:text-lg">
                      <Link href="/" className="whitespace-nowrap">Policy Wording</Link>
                  </div>
              </div> */}
          </div>
      </div>
  );
};

export default Detail;
