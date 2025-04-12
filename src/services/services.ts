import axiosInstance from "./_axios";

export const getServicesData = async () => {
    try {
        const res = await axiosInstance.get(`api/services/getServices`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};
