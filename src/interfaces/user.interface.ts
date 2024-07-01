// Interfaces
import { IBaseQueryParams } from './common.interface';

export interface ICreateUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUpdateUser {
  id: number;
  email?: string;
  password?: string;
  firstName: string;
  lastName: string;
}

export interface IUserQueryParams extends IBaseQueryParams {
  keyword?: string;
}
