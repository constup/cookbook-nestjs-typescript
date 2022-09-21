import 'dotenv/config';
import { CredentialsServiceInterface } from './credentials-service.interface';
import { AuthRequestPayload } from '../type/authentication/auth-request-payload';

export class CredentialsService implements CredentialsServiceInterface {
    fetchCredentialsFromEnv(): AuthRequestPayload {
        const username: string = process.env.MOCK_AUTH_API_USERNAME;
        const password: string = process.env.MOCK_AUTH_API_PASSWORD;

        if (typeof username === 'undefined' || typeof password === 'undefined') {
            throw new Error('Credentials are missing or could not be read.');
        }

        return {
            auth: {
                username: username,
                password: password,
            },
        };
    }
}
