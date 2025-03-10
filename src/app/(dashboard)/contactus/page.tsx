import { ContactForm } from "@/components/dashboard/contactus/contact-form";
import { ActionButtons } from "@/components/dashboard/contactus/action-buttons";
import contactusBG from "@/Assets/Dashboard/hero/contactus.svg";
import Image from "next/image";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata();

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-fit self-center m-auto max-w-[1062px]  max-h-[1141px] flex-col justify-centre md:flex-row">
      <div
        className="hidden md:flex md:w-1/2 max-w-[386.66px] max-h-full  relative bg-cover bg-center"
        style={{ backgroundImage: `url(${contactusBG.src})` }}
      >
        <div className="relative z-10 p-12 text-white">
          <h1 className="text-4xl mb-2">Financial</h1>
          <h1 className="text-4xl mb-2">Planning</h1>
          <h1 className="text-4xl font-bold">Redefined.</h1>
        </div>
      </div>

      <div className="flex-1 p-6 md:px-12 md:py-0">
        <div className="max-w-[565px] mx-auto">
          <h2 className="text-[28px] font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-[#000000D9] font-[500] text-[15px] mb-4">
            Before you decide about engaging with us, you can have a
            no-obligation introductory call with us, to learn more about how we
            can help you.
          </p>

          <ActionButtons />

          <p className="text-[13px] text-gray-400 mt-4 mb-8">
            For all the basic information about the services offered and the
            fees, please refer to the Services page.
          </p>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
