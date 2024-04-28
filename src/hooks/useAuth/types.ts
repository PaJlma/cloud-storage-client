import { FormInstance } from "antd";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload {
  login: string;
  email: string;
  password: string;
}

export type Login = (payload: LoginPayload) => Promise<void>;
export type Registration = (payload: RegistrationPayload) => Promise<void>;
export type Logout = () => Promise<void>;

export interface UseAuthReturns {
  login: Login;
  registration: Registration;
  logout: Logout;
}

export type UseAuth = (form?: FormInstance) => UseAuthReturns;
