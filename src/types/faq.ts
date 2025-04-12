export interface FaqDataType {
    res: {
        data: {
            data: {
                notFind: {
                    question: string;
                    answer: string;
                };
                _id: string;
                title: string;
                faqs: Array<{
                    topic: string;
                    faqs: FaqType[];
                }>
                __v: 0;
                image: string;
                imageAlt: string;
            };
            topics: string[];
        };
    };
}

export interface FaqType {
    question: string;
    answer: string;
}