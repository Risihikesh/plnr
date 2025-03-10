import Bg from '@/Assets/Dashboard/about/id-31-img.svg';
import BannerHeading from '@/components/custom_ui/BannerHeading';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { grievanceData } from '@/data/grievance';

const page = () => {
    return (
        <div className="m-auto flex flex-col">
            <div className="cursor-pointer">
                <BannerHeading img={Bg} heading="Grievance Redressal/ Escalation Matrix" />
            </div>
            <div className="pt-[60px] w-full flex flex-col items-center m-auto">

                <div className="overflow-x-auto w-full lg:w-[1051px] max-w-full">
                    <Table className="border-b border-gray-300 min-w-[1000px]">
                        <TableHeader className="bg-[#00587A] text-[13px] font-[600] leading-[20px]">
                            <TableRow>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Details of Designation</TableHead>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Contact Person Name</TableHead>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Address where the Physical Location</TableHead>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Contact Number</TableHead>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Email ID</TableHead>
                                <TableHead className="text-white px-[12px] pt-[11px] pb-[13px]">Working hours when <br /> compliant can call</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {grievanceData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.designation}</TableCell>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.name}</TableCell>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.address}</TableCell>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.contactNumber}</TableCell>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.email}</TableCell>
                                    <TableCell className="pt-[11px] px-[12px] pb-[13px] leading-[20px]">{item.workingHours}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default page;
