import { AxiosInstance } from 'axios';

export interface AxiosInstanceFactoryInterface {
  produce(): AxiosInstance;
}
