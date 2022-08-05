import { ErrorProcessingServiceInterface } from './error-processing-service.interface';
import { AxiosError } from 'axios';
import { AuthenticationError } from '../type/authentication/authentication-error';

export class ErrorProcessingService implements ErrorProcessingServiceInterface {
  processError(error: AxiosError): void {
    const processedError: AuthenticationError = {
      responseStatus: error.response.status,
      responseStatusText: error.response.statusText,
      code: error.code,
      requestHeaders: error.config.headers,
      url: error.config.url,
      method: error.config.method,
      responseHeaders: error.response.headers,
      responseData: JSON.stringify(error.response.data),
    };
    console.log(
      'This is a sample of a processed error by the ErrorProcessingService:',
    );
    console.log(processedError);
  }
}
