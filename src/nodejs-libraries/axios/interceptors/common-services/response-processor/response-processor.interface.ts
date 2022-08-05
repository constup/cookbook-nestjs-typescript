import { AuthResponseValidatorInterface } from '../auth-response-validator/auth-response-validator.interface';
import { AuthResponse } from '../type/authentication/auth-response';

export interface ResponseProcessorInterface {
  readonly authResponseValidator: AuthResponseValidatorInterface;
  fetchToken(authResponse: AuthResponse): string;
}
