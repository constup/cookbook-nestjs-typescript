import { Controller, Get, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Module({
  imports: [HttpModule],
})
@Controller('make-get-request')
export class MakeGetRequestController {
  constructor(private readonly httpService: HttpService) {}

  /**
   * This example sends a GET request to an endpoint and returns data fetched from that endpoint.
   *
   * It uses several libraries to do that:
   *    - Axios and HttpService (NestJS wrapper for Axios): https://github.com/axios/axios
   *      - HttpService for making the request
   *      - AxiosResponse for storing and processing of the response
   *    - RxJS: https://rxjs.dev/guide/overview
   *      - Observable: https://rxjs.dev/guide/observable
   *      - pipe(): https://rxjs.dev/guide/overview
   */
  @Get('make-simple-get-request')
  makeSimpleGetRequest(): Observable<AxiosResponse<any[]>> {
    return this.httpService
      .get('http://localhost:3000/fetch-request-headers/all-headers')
      .pipe(map((x) => x?.data));
  }
}
