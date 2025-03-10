import { TableCell, TableRow } from "@/components/ui/table";
import CustomTable from "./CustomTable";
import data from "@/data/disclosureTableData";

const SebiDisclosuresBody: React.FC = () => {
    return (
        <div className="lg:px-[190px] px-[16px] space-y-8">
            <div>
                <h2 className="font-[500] text-[24px] leading-[37.72px] mt-[32px]">
                    SEBI Registration Details
                </h2>
                <div className="text-[14px] font-[500] pt-[27.7px] text-black text-opacity-85">
                    <p>
                        RIA Name: PLNR INVESTMENT ADVISORS | RIA No:
                        INA000018966 | Reg. Type: Non-Indivdual | Validity :
                        Perpetual| Reg. address: Shop No. 2, 1st Floor, Tulip
                        Plaza, Plot No. 114, Sector 13, Kharghar Navi
                        Mumbai-410210 | Phone: 8860000332
                    </p>
                    <p>
                        Associated SEBI regional office: Plot No. C 4-A , G
                        Block, SEBI Bhavan, Bandra Kurla Complex, Bandra
                        East,Mumbai-400051
                    </p>
                </div>
            </div>

            <div>
                <h2 className="font-[500] text-[24px] leading-[37.72px] mt-[32px]">
                    Regulatory Complaints Disclosure
                </h2>
                <p className="text-[14px] leading-[22px] font-[400] pt-[27.7px]">
                    SEBI mandates all RIAs to display the complaints status on
                    the website as shown below. Investors can first contact the
                    intermediary in case of complaints, in our case through the
                    email support@plnr.in. The SEBI "SCORES" website that
                    facilitates investors in logging any complaints against
                    listed companies or intermediaries can be accessed here.
                </p>
            </div>
            <div className="p-[24px] flex flex-col gap-[24px]">
                {/* table started */}
                <div>
                    <h2 className="text-[18px] leading-[28.29px] font-medium mb-[7.28px] text-black/85">
                        Data as of last month ending : November 30, 2024
                    </h2>
                    <CustomTable
                        headers={[
                            "S.No",
                            "Received From",
                            "Pending as of Last Month",
                            "Received",
                            "Resolved*",
                            "Total Pending#",
                            "Pending > 3 Months",
                            "Avg Resolution Time",
                        ]}
                        rows={data.lastMonthComplaints}
                        renderRow={(row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {row.sNo !== 0 ? row.sNo : ""}
                                </TableCell>
                                <TableCell>{row.receivedFrom}</TableCell>
                                <TableCell>{row.pendingLastMonth}</TableCell>
                                <TableCell>{row.resolved}</TableCell>
                                <TableCell>{row.resolvedPercent}</TableCell>
                                <TableCell>{row.totalPending}</TableCell>
                                <TableCell>
                                    {row.pendingForGreaterThan3Months}
                                </TableCell>
                                <TableCell>{row.avgResolutionTime}</TableCell>
                            </TableRow>
                        )}
                    />
                </div>

                {/* Monthly Trend Table */}
                <div>
                    <h2 className="text-[18px] leading-[28.29px] font-medium mb-[7.28px]">
                        Trend of Monthly Disposal of Complaints
                    </h2>
                    <CustomTable
                        headers={[
                            "S.No",
                            "Month",
                            "Carried fwd. from prev. month",
                            "Received",
                            "Resolved*",
                            "Pending#",
                        ]}
                        rows={data.monthlyTrend}
                        renderRow={(row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {row.sNo !== 0 ? row.sNo : ""}
                                </TableCell>
                                <TableCell>{row.month}</TableCell>
                                <TableCell>{row.carriedForward}</TableCell>
                                <TableCell>{row.received}</TableCell>
                                <TableCell>{row.resolved}</TableCell>
                                <TableCell>{row.pending}</TableCell>
                            </TableRow>
                        )}
                    />
                </div>

                {/* Annual Trend Table */}
                <div>
                    <h2 className="text-[18px] leading-[28.29px] font-medium mb-[7.28px]">
                        Trend of Annual Disposal of Complaints
                    </h2>
                    <CustomTable
                        headers={[
                            "S.No",
                            "Year",
                            "Carried fwd. from prev. month",
                            "Received",
                            "Resolved*",
                            "Pending#",
                        ]}
                        rows={data.annualTrend}
                        renderRow={(row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {row.sNo !== 0 ? row.sNo : ""}
                                </TableCell>
                                <TableCell>{row.year}</TableCell>
                                <TableCell>{row.carriedForward}</TableCell>
                                <TableCell>{row.received}</TableCell>
                                <TableCell>{row.resolved}</TableCell>
                                <TableCell>{row.pending}</TableCell>
                            </TableRow>
                        )}
                    />
                </div>

                <p className="text-[12px] leading-[18.86px] font-bold mt-[10px] mb-[-5px]">
                    *Inclusive of complaints of previous months/years resolved
                    in the current month/year | ^Time in days | # Inclusive of
                    complaints pending as on the last day of the month/year.
                </p>

                {/* last Table  */}
                <div>
                    <h2 className="text-[18px] leading-[28.29px] font-medium mb-[7.28px]">
                        Disclosure with respect to compliance with Annual
                        compliance audit requirement under Regulation 19(3) of
                        SEBI (Investment Advisers) Regulations, 2013 for the
                        previous and current financial year are as under:
                    </h2>

                    <CustomTable
                        headers={[
                            "S.No",
                            "Financial Year",
                            "Compliance Audit Status",
                            "Remarks, if any*",
                        ]}
                        rows={data.AuditStatus}
                        renderRow={(row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {row.sNo !== 0 ? row.sNo : ""}
                                </TableCell>
                                <TableCell>{row.Financial_Year}</TableCell>
                                <TableCell>
                                    {row.Compliance_Audit_Status}
                                </TableCell>
                                <TableCell>{row.Remarks}</TableCell>
                            </TableRow>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default SebiDisclosuresBody;
