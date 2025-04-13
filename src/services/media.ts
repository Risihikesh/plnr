import axiosInstance from "./_axios";
import { MediaData } from "@/types/media";

export const getMediaData = async (): Promise<{ res: { data: MediaData } | null; err: any }> => {
    try {
        const res = await axiosInstance.get<{ data: MediaData }>(`api/media/getMedia`);
        return { res: res.data, err: null };
    } catch (error) {
        return { res: null, err: error };
    }
};
