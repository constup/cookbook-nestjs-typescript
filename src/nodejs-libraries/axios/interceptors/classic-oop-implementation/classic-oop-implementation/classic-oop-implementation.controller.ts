import { Controller, Get } from '@nestjs/common';
import { AxiosInstanceFactory } from '../../common-services/axios/axios-instance-factory';
import { TokenService } from '../token-service';
import { FetchPayloadApi } from '../../common-services/fetch-payload-api/fetch-payload-api';

@Controller('classic-oop-implementation')
export class ClassicOopImplementationController {
  @Get()
  async fetchAuthToken(): Promise<string> {
    console.log('Classic OOP HTTP request implementation.');
    console.log('**********');
    const axiosInstance = new AxiosInstanceFactory().produce();
    const tokenService = new TokenService(axiosInstance);
    const authToken = await tokenService.fetchAuthToken();
    const fetchPayloadApi = new FetchPayloadApi(axiosInstance);
    const dataRequestedFromEndpoint = await fetchPayloadApi.makeRequest(
      axiosInstance.getUri(),
      '/sample-third-party-server/post-auth-data-fetch',
      '',
      authToken,
    );
    const resultMessage = `Classic OOP HTTP request implementation.
Auth token: ${authToken}
Data requested from endpoint ${JSON.stringify(dataRequestedFromEndpoint, undefined, 4)}`;
    console.log(resultMessage);
    console.log('----------');
    console.log('END');

    return resultMessage;
  }
}
