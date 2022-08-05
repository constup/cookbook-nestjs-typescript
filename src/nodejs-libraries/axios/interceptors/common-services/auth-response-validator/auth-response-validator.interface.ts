import { AuthResponse } from '../type/authentication/auth-response';

export interface AuthResponseValidatorInterface {
  validateAuthResponse(authResponse: AuthResponse): void;
}
