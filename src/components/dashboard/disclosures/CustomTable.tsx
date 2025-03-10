import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { JSX } from "react";


interface TableProps {
    headers: string[];
    rows: any[];
    renderRow: (row: any, index: number) => JSX.Element;
}

const CustomTable: React.FC<TableProps> = ({ headers, rows, renderRow }) => {
    return (
        <Table className="w-full border-b-[1px]">
            <TableHeader className="bg-[#00587A]">
                <TableRow className="hover:bg-[#00587A]">
                    {headers.map((header, index) => (
                        <TableHead
                            className="text-white font-semibold text-[13px] leading-[20.43px] text-center"
                            key={index}
                        >
                            {header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className="text-[13px] leading-[20.43px] text-center text-black/85">
                {rows.map((row, index) => renderRow(row, index))}
            </TableBody>
        </Table>
    );
};

export default CustomTable;
