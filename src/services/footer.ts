import { FooterData } from "@/types/footer";
import axiosInstance from "./_axios";

export const getFooterData = async (): Promise<{ res: FooterData | null; err: any }> => {
  try {
    const response = await axiosInstance.get<{ data: FooterData }>("api/footer/getFooter");
    return { res: response.data.data, err: null };
  } catch (error) {
    return { res: null, err: error };
  }
};
