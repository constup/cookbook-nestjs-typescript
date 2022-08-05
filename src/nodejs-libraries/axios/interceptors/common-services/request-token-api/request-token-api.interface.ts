import { AxiosInstance } from 'axios';
import { AuthRequestPayload } from '../type/authentication/auth-request-payload';
import { AuthResponse } from '../type/authentication/auth-response';

export interface RequestTokenApiInterface {
  readonly axiosInstance: AxiosInstance;
  readonly endpoint: string;

  requestAuthenticationToken(
    authRequestPayload: AuthRequestPayload,
  ): Promise<AuthResponse>;
}
