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

  @Get('make-simple-get-request')
  makeSimpleGetRequest(): Observable<AxiosResponse<any[]>> {
    return this.httpService
      .get('http://localhost:3000/fetch-request-headers/all-headers')
      .pipe(map((x) => x?.data));
  }
}
