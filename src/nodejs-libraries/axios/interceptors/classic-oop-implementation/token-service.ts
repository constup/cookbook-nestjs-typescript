import { AxiosInstance } from 'axios';
import { TokenServiceInterface } from './token-service.interface';
import { CredentialsService } from '../common-services/credentials-service/credentials-service';
import { AuthResponse } from '../common-services/type/authentication/auth-response';
import { ErrorProcessingService } from '../common-services/error-processing-service/error-processing-service';
import { AuthResponseValidator } from '../common-services/auth-response-validator/auth-response-validator';
import { ResponseProcessor } from '../common-services/response-processor/response-processor';
import { RequestTokenApi } from '../common-services/request-token-api/request-token-api';

export class TokenService implements TokenServiceInterface {
  private readonly _axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
  }

  get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  async fetchAuthToken(): Promise<string> {
    const requestTokenApi = new RequestTokenApi(this.axiosInstance);
    const credentials = new CredentialsService().fetchCredentialsFromEnv();

    let authResponse: AuthResponse;
    try {
      authResponse = await requestTokenApi.requestAuthenticationToken(
        credentials,
      );
    } catch (error) {
      new ErrorProcessingService().processError(error);
      throw 'Authentication failure.';
    }
    const authResponseValidator = new AuthResponseValidator();
    const responseProcessor = new ResponseProcessor(authResponseValidator);

    return responseProcessor.fetchToken(authResponse);
  }
}
