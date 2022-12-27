import {SomeCustomError} from './someCustomError';

export class ErrorProcessor {
    processError(error: SomeCustomError): void {
        console.log(`The error with code: ${error.code} is now processed.`);
    }
}