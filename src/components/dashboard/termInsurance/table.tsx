import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/insuranceTable";


const InsuranceTable = ({ columns, rows }: {
    columns: string[],
    rows: string[][]
}) => {
  return (
      <Table>
          <TableHeader>
              <TableRow>
                    {columns.map((column, index) => (
                        <TableHead key={index} className='font-semibold text-black text-center text-[16px]'>{column}</TableHead>
                    ))}
              </TableRow>
          </TableHeader>
          <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        {row.map((cell, index) => (
                            <TableCell key={index}>{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
          </TableBody>
      </Table>
  );
}

export default InsuranceTable