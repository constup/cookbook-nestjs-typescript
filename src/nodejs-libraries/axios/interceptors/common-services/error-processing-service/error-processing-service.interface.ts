import { AxiosError } from 'axios';

export interface ErrorProcessingServiceInterface {
  processError(error: AxiosError): void;
}
