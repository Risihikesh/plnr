export type TabItem = {
    title: string;
    value: string;
    faqItems?: FAQItem[];
};

export type FAQItem = {
    question: string;
    answer: string;
};

export const tabItems: TabItem[] = [
    {
        title: "Fee",
        value: "fee",
        faqItems: [
            {
                question: "Are you Robo advisors?",
                answer: "No, we are not Robo advisors",
            },
            {
                question: "What is your annual fee?",
                answer: "Our annual fee structure is based on the complexity of your financial situation and the services provided.",
            },
            {
                question: "Is the annual fee per person or per couple?",
                answer: "The annual fee is per household, covering both individuals in a couple.",
            },
            {
                question: "Is your annual fee really this small?",
                answer: "Yes, we believe in providing affordable financial advice while maintaining high-quality service.",
            },
            {
                question: "Why your annual fee is so low?",
                answer: "We leverage technology to streamline our processes while providing personalized service, allowing us to keep our fees competitive.",
            },
            {
                question: "Do you offer any discount?",
                answer: "Yes, we offer special discounts for long-term clients and early adopters.",
            },
            {
                question: "Is Renewal mandatory or voluntary?",
                answer: "Renewal is voluntary, but we recommend maintaining continuity for the best results.",
            },
            {
                question: "Can I renew after a gap of 2-3 years?",
                answer: "Yes, you can renew after a gap, though continuous engagement is recommended for optimal financial planning.",
            },
            {
                question:
                    "Why pay for advice that I could research and do it myself?",
                answer: "While self-research is valuable, our expertise provides professional insights, saves time, and helps avoid costly mistakes.",
            },
        ],
    },
    {
        title: "Information",
        value: "information",
        faqItems: [
            {
                question:
                    "Do I have to share my secure information (bank account details, MF folio number, insurance policy number) with you?",
                answer: "No, we do not want your secure information like bank account details, MF folio number, insurance policy number, etc.",
            },
            {
                question: "Do I have to link any of my accounts to PLNR?",
                answer: "No, you do not have to link any of your accounts to PLNR.",
            },
            {
                question:
                    "Can I just send my data in excel and would you be able to put it together?",
                answer: "No, you will have to fill in all the information by yourself after signing in to our portal. We do not have access to the client’s side of the portal.",
            },
            {
                question: "Is my information secure with PLNR?",
                answer: "Yes, we keep your data very confidential and we do not share it with any third party.",
            },
        ],
    },
    {
        title: "Meeting",
        value: "meeting",
        faqItems: [
            {
                question: "Do you visit clients?",
                answer: "No, we do not visit clients.",
            },
            {
                question: "Can I come and visit your office?",
                answer: "Yes, you can visit us at our office with a prior appointment.",
            },
            {
                question: "What is the language used for communication?",
                answer: "We are comfortable in Hindi and English.",
            },
            {
                question: "What is your preferred mode of communication?",
                answer: "E-mail, phone, WhatsApp, and video conferencing.",
            },
            {
                question:
                    "Can I schedule a meeting time with you which is convenient for me?",
                answer: "Likely yes but no guarantee on this. Most of our clients schedule meetings with us that are just fine for their schedule. It might depend on how soon you want to meet and what time zone you are in! You might have to meet with us later at night or in the morning or during your work day.",
            },
        ],
    },
    {
        title: "Financial Planning",
        value: "financial-planning",
        faqItems: [
            {
                question: "What is covered in the financial plan?",
                answer: "<a href='/services' class='text-blue-500 underline'>Services</a>",
            },
            {
                question: "How long does it take to make a financial plan?",
                answer: "It takes around 10-15 days if you are quick to provide us with the required information during the creation of the financial plan.",
            },
            {
                question:
                    "What happens after you deliver the plan? Is the annual fee per person or per couple?",
                answer: "If you need help in implementing these recommendations, we would extend our support to do so. We will review the plan after 6 months to check if you have implemented the plan.",
            },
            {
                question:
                    "How many times can I contact you after you deliver the plan since the engagement is for 1 year?",
                answer: "There is no limit on how often you can contact us throughout the year. But please do not abuse it. Our success depends on clients appreciating our business model and time. Do not reach out to us every other week on why stock markets are going up or down, what should I do now? Do not send every new product which has come into the market to analyze.",
            },
            {
                question: "How soon do you respond to emails? For some",
                answer: "Normally we respond to emails in 2 working days.",
            },
            {
                question: "Do you offer direct equity or stock advice?",
                answer: "No, on the equity side, we suggest only equity mutual funds.",
            },
            {
                question: "Do you offer tax advice?",
                answer: "Yes, we suggest tax-efficient instruments for investments but we do not provide tax filing services. You need to consult your CA for any complex taxation issues.",
            },
            {
                question: "Can I include my parents’ savings in the same plan?",
                answer: "Yes, if you are planning to use their savings for your financial goals, otherwise no as their risk profile would be different from yours.",
            },
            {
                question: "What happens if my life situation changes?",
                answer: "Financial planning is a process that keeps changing as per the life situation. You can seek our advice provided the engagement is active.",
            },
            {
                question: "Do I have to invest in products recommended by you?",
                answer: "No, you can invest in whatever instruments you want. We give investment advice based on your goals but where you invest is your own decision.",
            },
        ],
    },
    {
        title: "Miscellaneous",
        value: "miscellaneous",
        faqItems: [
            {
                question: "What kind of clients are not a good match for PLNR?",
                answer: "There are several types of clients who are not a good match for PLNR. If you are always interested in meeting in person i.e. every time, we give you some suggestions and you want to meet in person, you are not a good match. If you are looking for a complicated portfolio like alternative investments, cryptocurrency, PMS, etc. we do not offer these. If you are coming to us expecting just higher returns from your investments, we are not the right match. We have the solution for your need but not your greed.",
            },
            {
                question: "Can I send you the documents on my investments?",
                answer: "No, unless we ask for the same to review it. Also, please do not send your lengthy excels (if you have any) to us for review.",
            },
            {
                question: "Do you suggest investing via a platform?",
                answer: "Though we give suggestions, you are free to choose any platform you are comfortable with.",
            },
            {
                question:"Can I talk to some of your clients to check about your services?",
                answer: "No, we respect our clients privacy. Though our clients love to refer us and you can check their testimonials here - <a href='/testimonials' class='text-blue-500 underline'>Testimonials</a>",
            },
        ],
    },
];

