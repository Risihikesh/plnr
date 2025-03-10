interface Blog {
    id: number;
    title: string;
    chapters?: string; // Optional field
    description: string;
    btn_text: string;
    btn_link: string;
}

export const blogContent: Blog[] = [
    {
        id: 1,
        title: "Introduction to Financial Planning",
        description: "Financial Planning is a step-by-step strategy to achieve your financial goals that too with peace of mind. This module will cover the basics of what and why financial planning is important.",
        btn_text: "Coming Soon",
        btn_link: "#"
    },
    {
        id: 2,
        title: "Term Insurance",
        chapters: "8 chapters",
        description: "Insurances are the basic pillar of any financial plan and term insurance is the most important one. This module will cover the basic to advance level concepts of term insurance and how to select a term insurance policy for you.",
        btn_text: "View Module",
        btn_link: "/terminsurance"
    },
];
