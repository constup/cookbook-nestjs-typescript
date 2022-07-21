import { Controller, Get, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Module({
  imports: [HttpModule],
})
@Controller('make-post-request')
export class MakePostRequestController {
  constructor(private readonly httpService: HttpService) {}

  /**
   * This example sends a POST request to an endpoint and return data fetched from that endpoint.
   *
   * It uses several libraries to do that:
   *   - Axios and HttpService (NestJS wrapper for Axios): https://github.com/axios/axios
   *      - HttpService for making the request
   *      - AxiosResponse for storing and processing of the response
   *    - RxJS: https://rxjs.dev/guide/overview
   *      - Observable: https://rxjs.dev/guide/observable
   *      - pipe(): https://rxjs.dev/guide/overview
   */
  @Get('make-simple-post-request')
  makeSimplePostRequest(): Observable<AxiosResponse<any[]>> {
    const payload = {
      sample_01:
        'this payload was sent by /make-post-request/make-simple-post-request',
      sample_02: 236427,
      sample_03: true,
    };

    return this.httpService
      .post('http://localhost:3000/post-payload', payload)
      .pipe(map((x) => x?.data));
  }
}
