import { ContactForm } from "@/components/dashboard/contactus/contact-form";
import { ActionButtons } from "@/components/dashboard/contactus/action-buttons";
import contactusBG from "@/Assets/Dashboard/hero/contactus.svg";
import Image from "next/image";
import { constructMetadata } from "@/lib/utils";
import { ContactUsDataType } from "@/types/constactUs";
import { getContactUsData } from "@/services/contactUs";

export const metadata = constructMetadata();

export default async function ContactPage() {
    const res = (await getContactUsData()).res as ContactUsDataType;
    const data = res.data;

    return (
        <div className="flex min-h-screen w-fit self-center m-auto max-w-[1062px]  max-h-[1141px] flex-col justify-centre md:flex-row">
            <div
                className="hidden md:flex md:w-1/2 max-w-[386.66px] max-h-full  relative bg-cover bg-center"
                style={{ backgroundImage: `url(${data.image})` }}
            >
                <h1
                    className="relative z-10 p-12 text-white text-4xl"
                    dangerouslySetInnerHTML={{ __html: data.imageText }}
                />
            </div>

            <div className="flex-1 p-6 md:px-12 md:py-0">
                <div className="max-w-[565px] mx-auto">
                    <h2 className="text-[28px] font-semibold text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    <p className="text-[#000000D9] font-[500] text-[15px] mb-4">
                        {data.description}
                    </p>

                    <ActionButtons buttons={data.contacts} />

                    <p className="text-[13px] text-gray-400 mt-4 mb-8">
                        {data.basicInfoText}
                    </p>

                    <ContactForm heading={data.formHeading} />
                </div>
            </div>
        </div>
    );
}
