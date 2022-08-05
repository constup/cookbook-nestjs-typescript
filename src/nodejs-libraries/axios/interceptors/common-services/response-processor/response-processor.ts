import { AuthResponseValidatorInterface } from '../auth-response-validator/auth-response-validator.interface';
import { ResponseProcessorInterface } from './response-processor.interface';
import { AuthResponse } from '../type/authentication/auth-response';

export class ResponseProcessor implements ResponseProcessorInterface {
  private readonly _authResponseValidator: AuthResponseValidatorInterface;

  constructor(authResponseValidator: AuthResponseValidatorInterface) {
    this._authResponseValidator = authResponseValidator;
  }

  get authResponseValidator(): AuthResponseValidatorInterface {
    return this._authResponseValidator;
  }

  fetchToken(AuthResponse: AuthResponse): string {
    this.authResponseValidator.validateAuthResponse(AuthResponse);

    return AuthResponse.token;
  }
}
