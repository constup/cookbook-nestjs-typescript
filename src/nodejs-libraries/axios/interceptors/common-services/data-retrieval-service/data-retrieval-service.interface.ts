import { AxiosInstance } from 'axios';

export interface DataRetrievalServiceInterface {
  readonly axiosInstance: AxiosInstance;

  fetchDataFromEndpoint(authToken: string): Promise<any>;
}
