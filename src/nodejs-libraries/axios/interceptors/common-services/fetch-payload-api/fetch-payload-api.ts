import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { FetchPayloadApiInterface } from './fetch-payload-api.interface';

export class FetchPayloadApi implements FetchPayloadApiInterface {
    private readonly _axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this._axiosInstance = axiosInstance;
    }

    get axiosInstance(): AxiosInstance {
        return this._axiosInstance;
    }

    async makeRequest(
        baseUrl: string,
        endpoint: string,
        urlSearchParams: string,
        authToken: string,
        config?: AxiosRequestConfig<any>,
    ) {
        const url = new URL(endpoint, baseUrl);
        url.search = urlSearchParams;

        if (typeof config === 'undefined') {
            config = {
                headers: { Authorization: authToken },
            };
        } else {
            config.headers.Authorization = authToken;
        }

        const requestResult = await this._axiosInstance.get(url.toString(), config);

        return requestResult.data;
    }
}
