import { StaticImageData } from "next/image";

export interface InsuranceTable {
    columns: string[];
    rows: string[][];
}

export interface InsuranceFaqItem {
    question: string;
    answer: string;
    slug: string;
    image: StaticImageData;
    textContents: string[];
    tables: InsuranceTable[];
}