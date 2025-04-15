export interface blogDataType {
    data: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        items: Array<{
            _id: string;
            title: string;
            description: string;
            status: string;
            slug: string;
            chapters: String[];
        }>;
    };
}

export interface chapterDataType {
    data: {
        item: {
            _id: string;
            title: string;
            description: string;
            module: {
                _id: string;
                title: string;
            };
            image: string;
            imageAlt: string;
            createdAt: string;
            updatedAt: string;
            slug: string;
            __v: 0;
            content: string;
        };
    };
}

export interface allChaptersDataType {
    data: {
        item: {
            _id: string;
            title: string;
            description: string;
            status: string;
            chapters: Array<{
                _id: string;
                title: string;
                description: string;
                slug: string;
            }>;
            createdAt: string;
            updatedAt: string;
            slug: string;
            __v: 0;
        };
    };
}
