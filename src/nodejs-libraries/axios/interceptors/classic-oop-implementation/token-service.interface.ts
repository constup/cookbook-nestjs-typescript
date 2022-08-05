import { AxiosInstance } from 'axios';

export interface TokenServiceInterface {
  readonly axiosInstance: AxiosInstance;

  fetchAuthToken(): Promise<string>;
}
