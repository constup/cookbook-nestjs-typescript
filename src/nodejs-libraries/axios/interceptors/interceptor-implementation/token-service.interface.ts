import { AxiosInstance } from 'axios';

export interface TokenServiceInterface {
  endpoint: string;
  readonly axiosInstance: AxiosInstance;

  fetchAuthToken(): Promise<string>;
}
