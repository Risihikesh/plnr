export interface LastMonthComplaint {
    sNo: number;
    receivedFrom: string;
    pendingLastMonth: number;
    resolved: number;
    resolvedPercent: number;
    totalPending: number;
    pendingForGreaterThan3Months: number;
    avgResolutionTime: number;
}

export interface MonthlyTrend {
    sNo: number;
    month: string;
    carriedForward: number;
    received: number;
    resolved: number;
    pending: number;
}

export interface AnnualTrend {
    sNo: number;
    year: string;
    carriedForward: number;
    received: number;
    resolved: number;
    pending: number;
}
export interface AuditStatus {
    sNo: number;
    Financial_Year: string;
    Compliance_Audit_Status?: string;
    Remarks: string;
}

export interface ComplaintsData {
    lastMonthComplaints: LastMonthComplaint[];
    monthlyTrend: MonthlyTrend[];
    annualTrend: AnnualTrend[];
    AuditStatus: AuditStatus[];
}

const data: ComplaintsData = {
    lastMonthComplaints: [
        {
            sNo: 0,
            receivedFrom: "Total",
            pendingLastMonth: 0,
            resolved: 0,
            resolvedPercent: 0,
            totalPending: 0,
            pendingForGreaterThan3Months: 0,
            avgResolutionTime: 0,
        },
        {
            sNo: 1,
            receivedFrom: "Directly from Investors",
            pendingLastMonth: 0,
            resolved: 0,
            resolvedPercent: 0,
            totalPending: 0,
            pendingForGreaterThan3Months: 0,
            avgResolutionTime: 0,
        },
        {
            sNo: 2,
            receivedFrom: "SEBI - SCORES",
            pendingLastMonth: 0,
            resolved: 0,
            resolvedPercent: 0,
            totalPending: 0,
            pendingForGreaterThan3Months: 0,
            avgResolutionTime: 0,
        },
        {
            sNo: 3,
            receivedFrom: "Other sources",
            pendingLastMonth: 0,
            resolved: 0,
            resolvedPercent: 0,
            totalPending: 0,
            pendingForGreaterThan3Months: 0,
            avgResolutionTime: 0,
        },
    ],
    monthlyTrend: [
        {
            sNo: 0,
            month: "Total",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 1,
            month: "Apr 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 2,
            month: "May 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 3,
            month: "June 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 4,
            month: "Jul 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 5,
            month: "Aug 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 6,
            month: "Sep 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 7,
            month: "Oct 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 8,
            month: "Nov 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 9,
            month: "Dec 2023",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 10,
            month: "Jan 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 11,
            month: "Feb 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 12,
            month: "Mar 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 13,
            month: "April 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 14,
            month: "May 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 15,
            month: "June 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 16,
            month: "July 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 17,
            month: "August 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 18,
            month: "September 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 19,
            month: "October 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 20,
            month: "November 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 21,
            month: "December 2024",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
    ],
    annualTrend: [
        {
            sNo: 0,
            year: "2023-24",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 1,
            year: "2024-25",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 2,
            year: "2025-26",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
        {
            sNo: 3,
            year: "2026-27",
            carriedForward: 0,
            received: 0,
            resolved: 0,
            pending: 0,
        },
    ],
    AuditStatus: [
        {
            sNo: 1,
            Financial_Year: "FY 2023-24",
            Compliance_Audit_Status: "",
            Remarks: "n/a",
        },
        {
            sNo: 2,
            Financial_Year: "FY 2024-25",
            Compliance_Audit_Status: "",
            Remarks: "n/a",
        },
    ],
};

export default data;
