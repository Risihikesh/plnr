export interface GetStartedData {
    res: {
        data: {
            image: string;
            steps: Array<{
                text: string;
                num: string;
                image: any;
                imageAlt: string;
            }>;
            description: string;
            cards: Array<{
                title: string;
                video: string;
                button: string;
                _id: string;
            }>;
        };
    };
}

export interface CardProps {
    text: string;
    num: string;
    image: any;
    imageAlt: string;
}