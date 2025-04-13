// services/getHomeData.ts
import axiosInstance from "./_axios";
import { HomeData } from "@/types/home";

export const getHomeData = async (): Promise<{ res: { data: HomeData } | null; err: any }> => {
  try {
    const res = await axiosInstance.get<{ data: HomeData }>(`api/homescreen/getHomeScreen`);
    return { res: res.data, err: null };
  } catch (error) {
    return { res: null, err: error };
  }
};
