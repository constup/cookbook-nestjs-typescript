import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface FetchPayloadApiInterface {
  readonly axiosInstance: AxiosInstance;

  makeRequest(
    baseUrl: string,
    endpoint: string,
    urlSearchParams: string,
    authToken: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<any>;
}
