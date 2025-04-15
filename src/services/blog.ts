import axiosInstance from "./_axios";

export const getBlogData = async () => {
    try {
        const res = await axiosInstance.get(`api/blog/getModules`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};

export const getChapterData = async (slug: string) => {
    try {
        const res = await axiosInstance.get(`api/blog/getChapter?slug=${slug}`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
}

export const getAllChapters = async (slug: string) => {
    try {
        const res = await axiosInstance.get(`api/blog/getModules?slug=${slug}`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
}
