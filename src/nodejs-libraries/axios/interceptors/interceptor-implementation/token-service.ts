import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CredentialsService } from '../common-services/credentials-service/credentials-service';
import { AuthResponseValidator } from '../common-services/auth-response-validator/auth-response-validator';
import { ErrorProcessingService } from '../common-services/error-processing-service/error-processing-service';
import { TokenServiceInterface } from './token-service.interface';

export class TokenService implements TokenServiceInterface {
    private readonly _axiosInstance: AxiosInstance;
    readonly endpoint = '/sample-third-party-server/authenticate';

    constructor(axiosInstance: AxiosInstance) {
        this._axiosInstance = axiosInstance;
    }

    get axiosInstance(): AxiosInstance {
        return this._axiosInstance;
    }

    async fetchAuthToken(): Promise<string> {
        const authTokenRequestInterceptor =
      this.axiosInstance.interceptors.request.use(
          (axiosRequestConfig: AxiosRequestConfig) => {
              axiosRequestConfig.data =
            new CredentialsService().fetchCredentialsFromEnv();

              return axiosRequestConfig;
          },
          (error) => {
              return Promise.reject(error);
          },
      );
        const authTokenResponseInterceptor =
      this._axiosInstance.interceptors.response.use(
          (response: AxiosResponse) => {
              new AuthResponseValidator().validateAuthResponse(response.data);

              return response;
          },
          (error) => {
              new ErrorProcessingService().processError(error);
              throw 'Authentication failure.';
          },
      );

        const requestResult = await this.axiosInstance.post(
            this.axiosInstance.getUri() + this.endpoint,
        );

        /**
     * When an Interceptor is attached, it will stay attached to that Axios instance.
     * In our case, we are making 2 API calls in the same controller action by using the same Axios instance:
     *    - the first: sending API credentials and obtaining an Authentication token;
     *    - the second: making an API call to fetch some data while using the authentication token fetched in the
     *      previous step;
     * If we don't eject the interceptors here, in the first call, they will stay attached and be executed on the second
     * call as well. This leads to errors and unintended consequences. For example, we don't need to send credentials to
     * the data fetching endpoint (present in the request interceptor), or, the error processing is not the same for
     * both API token and data fetching calls (the response interceptor). Obviously, you can model your code to handle
     * these cases and make more universal interceptors which can handle multiple types of requests, but that's not the
     * point of this simple Interceptor example.
     *
     * The important lesson here is: Once the interceptor is attached to an Axios instance, it will stay attached to
     * that instance and execute each time the instance is used to make a request or process a response.
     *
     * If you want to check what will happen when interceptors are left attached, you can comment out the following two
     * "eject" calls, run the call and monitor the console.
     */
        this.axiosInstance.interceptors.request.eject(authTokenRequestInterceptor);
        this.axiosInstance.interceptors.response.eject(
            authTokenResponseInterceptor,
        );

        return requestResult.data.token;
    }
}
