import axiosInstance from "./_axios";

export const getHelpLinksData = async () => {
    try {
        const res = await axiosInstance.get(`api/helplinks/getHelpLinksPage`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};
