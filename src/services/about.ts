import { AboutData } from "@/types/about";
import axiosInstance from "./_axios";


export const getAboutData = async (): Promise<{ res: { data: AboutData } | null; err: any }> => {
    try {
        const res = await axiosInstance.get<{ data: AboutData }>(`api/aboutus/getAboutUs`);
        return { res: res.data, err: null };
    } catch (error) {
        return { res: null, err: error };
    }
};
