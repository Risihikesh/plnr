import TermInsuranceContent from "./TermInsuranceContent";

export default function Page() {
    return (
        <div className="px-[20px] sm:px-[30px] w-full lg:w-[900px] m-auto h-fit py-[50px]">
            <div className="mb-[20px]">
                <h1 className="text-[18px] leading-[24px] font-semibold">
                    Term Insurance
                </h1>
                <div className="w-[300px] bg-[#00638d] pt-1"></div>
            </div>

            <TermInsuranceContent />
        </div>
    );
}
