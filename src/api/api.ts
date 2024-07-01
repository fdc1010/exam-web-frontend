
import axios, { InternalAxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;
interface RequestConfigWithQueryParams
  extends InternalAxiosRequestConfig {
  params?: {
    token?: string;
  };
}
interface RequestConfigWithData extends InternalAxiosRequestConfig {
  data?: {
    token?: string;
  };
}
export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Creates an Axios Client configured for API
 */
const makeApiClient = () =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });


/**
 * Axios api client containing the token from user session if user is logged in
 */
export function useApiClient() {
  const token = localStorage.getItem("accessToken");
  api.interceptors.request.use(
    (
      config: RequestConfigWithData,
    ): RequestConfigWithData => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  );
  return api;
}

export const loginUser = (data: {email: string, password: string}) => useApiClient().post('/auth/login', JSON.stringify(data));
export const logoutUser = (data: {email: string, password: string}) => useApiClient().post('/auth/login', JSON.stringify(data));

export const fetchUsers = () => useApiClient().get('/user');

export const updateUser = (id: number, data: {  email: string, firstName: string, lastName: string }) => {
  return useApiClient().put(`/user/${id}`, JSON.stringify(data));
};

export const deleteUser = (id: number) => {
  return useApiClient().delete(`/user/${id}`)
}

export const addUser = (newUser: { email: string, firstName: string, lastName: string }) => {
  return useApiClient().post(`/auth/register`, JSON.stringify(newUser))
}