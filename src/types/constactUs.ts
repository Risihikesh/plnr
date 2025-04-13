export interface ContactUsDataType {
    data: {
        _id: string;
        image: string;
        imageAlt: string;
        imageText: string;
        title: string;
        description: string;
        contacts: Array<{
            text: string;
            link: string;
            logo: string;
            logoAlt: string;
            _id: string;
        }>
        basicInfoText: string;
        formHeading: string;
        __v: 0;
    };
}