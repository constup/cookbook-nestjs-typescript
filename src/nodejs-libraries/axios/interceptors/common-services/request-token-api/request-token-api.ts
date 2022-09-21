import { AxiosInstance } from 'axios';
import { AuthRequestPayload } from '../type/authentication/auth-request-payload';
import { AuthResponse } from '../type/authentication/auth-response';
import { RequestTokenApiInterface } from './request-token-api.interface';

export class RequestTokenApi implements RequestTokenApiInterface {
    private readonly _axiosInstance: AxiosInstance;
    readonly endpoint = '/sample-third-party-server/authenticate';

    constructor(axiosInstance: AxiosInstance) {
        this._axiosInstance = axiosInstance;
    }

    get axiosInstance(): AxiosInstance {
        return this._axiosInstance;
    }

    async requestAuthenticationToken(
        authRequestPayload: AuthRequestPayload,
    ): Promise<AuthResponse> {
        const requestResult = await this.axiosInstance.post(
            this.axiosInstance.getUri() + this.endpoint,
            authRequestPayload,
        );

        return requestResult.data;
    }
}
