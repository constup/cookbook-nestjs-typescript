import { AuthRequestPayload } from '../type/authentication/auth-request-payload';

export interface CredentialsServiceInterface {
  fetchCredentialsFromEnv(): AuthRequestPayload;
}
