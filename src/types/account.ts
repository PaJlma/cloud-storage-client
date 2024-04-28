export interface AccountInterface {
  _id: string;
  login: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  color: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload {
  login: string;
  email: string;
  password: string;
}

export interface AccessTokenInterface {
  access: string;
}
