import { IAccessToken } from "@/types/account";
import axios from "axios";

export const axiosWithAuth = axios.create();
axiosWithAuth.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("access")}`;
axiosWithAuth.defaults.withCredentials = true;

axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.data.statusCode !== 401) throw error;
    const refreshResponse = await axios.get<IAccessToken>(
      "http://localhost:5000/auth/refresh",
      { withCredentials: true },
    );
    localStorage.setItem("access", refreshResponse.data.access);
    axiosWithAuth.defaults.headers.common.Authorization = `Bearer ${refreshResponse.data.access}`;
    return axios({
      ...error.config,
      headers: {
        ...error.config.headers,
        Authorization: `Bearer ${refreshResponse.data.access}`,
      },
    });
  },
);
