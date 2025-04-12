import axiosInstance from "./_axios";

export const getGetStartedData = async () => {
    try {
        const res = await axiosInstance.get(`api/getstarted/getGetStarted`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};
