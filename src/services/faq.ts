import axiosInstance from "./_axios";

export const getFaqData = async () => {
    try {
        const res = await axiosInstance.get(`api/faq/getFaqPage`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};
