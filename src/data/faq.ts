export type TabItem = {
    title: string;
    value: string;
    // faqItems?: FAQItem[];
};

export type FAQItem = {
    question: string;
    answer: string;
};
export const tabItems: TabItem[] = [
    { title: "Fee", value: "fee" },
    { title: "Information", value: "information" },
    { title: "Meeting", value: "meeting" },
    { title: "Financial Planning", value: "financial-planning" },
    { title: "Miscellaneous", value: "miscellaneous" },
  ];

  export const faqItems: FAQItem[] = [
    {
      question: "Are you Robo advisors?",
      answer: "No, we are not Robo advisors"
    },
    {
      question: "What is your annual fee?",
      answer: "Our annual fee structure is based on the complexity of your financial situation and the services provided."
    },
    {
      question: "Is the annual fee per person or per couple?",
      answer: "The annual fee is per household, covering both individuals in a couple."
    },
    {
      question: "Is your annual fee really this small?",
      answer: "Yes, we believe in providing affordable financial advice while maintaining high-quality service."
    },
    {
      question: "Why your annual fee is so low?",
      answer: "We leverage technology to streamline our processes while providing personalized service, allowing us to keep our fees competitive."
    },
    {
      question: "Do you offer any discount?",
      answer: "Yes, we offer special discounts for long-term clients and early adopters."
    },
    {
      question: "Is Renewal mandatory or voluntary?",
      answer: "Renewal is voluntary, but we recommend maintaining continuity for the best results."
    },
    {
      question: "Can I renew after a gap of 2-3 years?",
      answer: "Yes, you can renew after a gap, though continuous engagement is recommended for optimal financial planning."
    },
    {
      question: "Why pay for advice that I could research and do it myself?",
      answer: "While self-research is valuable, our expertise provides professional insights, saves time, and helps avoid costly mistakes."
    }
  ];