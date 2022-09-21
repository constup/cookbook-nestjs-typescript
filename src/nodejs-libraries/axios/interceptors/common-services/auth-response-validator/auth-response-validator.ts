import { AuthResponseValidatorInterface } from './auth-response-validator.interface';
import { AuthResponse } from '../type/authentication/auth-response';

export class AuthResponseValidator implements AuthResponseValidatorInterface {
    validateAuthResponse(authResponse: AuthResponse): void {
        console.log('AuthResponseValidator received the following payload:');
        console.log(authResponse);
        console.log('----------');
        if (
            typeof authResponse === 'string' ||
      typeof authResponse === 'undefined' ||
      !authResponse.token
        ) {
            throw 'Invalid auth response';
        }

        if (authResponse.status !== 'OK') {
            throw 'Authentication status is not ok.';
        }
    }
}
