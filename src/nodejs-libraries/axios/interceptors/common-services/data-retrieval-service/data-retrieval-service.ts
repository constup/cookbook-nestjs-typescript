import { AxiosInstance } from 'axios';
import { FetchPayloadApi } from '../fetch-payload-api/fetch-payload-api';
import { ErrorProcessingService } from '../error-processing-service/error-processing-service';
import { DataRetrievalServiceInterface } from './data-retrieval-service.interface';

export class DataRetrievalService implements DataRetrievalServiceInterface {
  private readonly _axiosInstance: AxiosInstance;
  private readonly endpoint = '/sample-third-party-server/post-auth-data-fetch';

  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
  }

  get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }

  async fetchDataFromEndpoint(authToken: string) {
    const makeGetRequestService = new FetchPayloadApi(this.axiosInstance);

    let requestResponse: Promise<any>;
    try {
      requestResponse = await makeGetRequestService.makeRequest(
        this.axiosInstance.getUri(),
        this.endpoint,
        '',
        authToken,
      );
    } catch (error) {
      new ErrorProcessingService().processError(error);
      throw 'Data retrieval error.';
    }

    return requestResponse;
  }
}
