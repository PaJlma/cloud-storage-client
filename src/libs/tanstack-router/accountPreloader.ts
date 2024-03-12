import { axiosWithAuth } from "@/axios";
import { IAccount } from "@/types/account";

export const accountPreloader = () => {
  let preloaded = false;
  return async () => {
    if (preloaded) return {};
    try {
      const account = (
        await axiosWithAuth.get<IAccount>("http://localhost:5000/auth/profile")
      ).data;
      preloaded = true;
      return { account };
    } catch {
      return {};
    }
  };
};
