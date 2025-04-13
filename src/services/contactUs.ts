import axiosInstance from "./_axios";

export const getContactUsData = async () => {
    try {
        const res = await axiosInstance.get(`api/contactus/getContactUs`);
        return { res: res.data, err: null };
    } catch (error) {
        return { err: error, res: null };
    }
};
