import { useNavigate } from "@tanstack/react-router";
import { Login, Logout, Registration, UseAuth } from "./types";
import { useAppDispatch } from "../redux";
import axios, { isAxiosError } from "axios";
import { IAccessToken } from "@/types/account";
import { logout as _logout } from "@/store/reducers/slices/account.slice";
import { getProfile } from "@/store/reducers/slices/account.slice";

const useAuth: UseAuth = (form) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login: Login = async (payload) => {
    try {
      const response = await axios.post<IAccessToken>(
        "http://localhost:5000/auth/login",
        payload,
        { withCredentials: true },
      );
      localStorage.setItem("access", response.data.access);
      await dispatch(getProfile());
      navigate({ to: "/" });
    } catch (error) {
      if (!isAxiosError(error)) throw error;
      const { cause, description } = error.response?.data.message[0];
      form && form.setFields([{ name: cause, errors: [description] }]);
    }
  };

  const registration: Registration = async (payload) => {
    try {
      const response = await axios.post<IAccessToken>(
        "http://localhost:5000/auth/registration",
        payload,
        { withCredentials: true },
      );
      localStorage.setItem("access", response.data.access);
      await dispatch(getProfile());
      navigate({ to: "/" });
    } catch (error) {
      if (!isAxiosError(error)) throw error;
      const { cause, description } = error.response?.data.message[0];
      form && form.setFields([{ name: cause, errors: [description] }]);
    }
  };

  const logout: Logout = async () => {
    await dispatch(_logout());
    navigate({ to: "/" });
  };

  return { login, registration, logout };
};

export default useAuth;
