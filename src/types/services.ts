export interface ServicesDataType {
    data: {
        doNotAccept: {
            text: string;
            explanation: string;
        };
        _id: string;
        title: string;
        description: string;
        plan: Array<{
            title: string;
            amount: string;
            yearTag: string;
            includeText: string;
            services: Array<{
                title: string;
                description: string;
                _id: string;
            }>;
            buttons: Array<{
                text: string;
                link: string;
                _id: string;
            }>;
            _id: string;
        }>;
        __v: 0;
    };
}