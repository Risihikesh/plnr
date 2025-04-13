export interface Article {
    _id: string;
    title: string;
    description: string;
    logo: string;
    logoAlt: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface MediaData {
    _id: string;
    imageTitle: string;
    imageAlt: string;
    title: string;
    articles: Article[];
    __v: number;
}
