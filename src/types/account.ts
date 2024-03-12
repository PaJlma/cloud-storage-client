export interface IAccount {
  _id?: string;
  login?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  color?: string;
}

export interface IAccessToken {
  access: string;
}
