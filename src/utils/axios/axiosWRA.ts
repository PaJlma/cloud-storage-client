/**
 *  Конфигурация для axios с повторной аутентификацией, если access токен умер
 */

import axios from "axios";

const host = "http://localhost:5000/auth";

export const axiosWRA = axios.create();
axiosWRA.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("access")}`;
axiosWRA.defaults.withCredentials = true;

axiosWRA.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      throw error;
    }

    const refreshResponse = await axios.get(`${host}/refresh`, {
      withCredentials: true,
    });
    const { access } = refreshResponse.data;
    localStorage.setItem("access", access);
    axiosWRA.defaults.headers.common.Authorization = `Bearer ${access}`;
    return axios({
      ...error.config,
      headers: {
        ...error.config.headers,
        Authorization: `Bearer ${access}`,
      },
    });
  },
);
