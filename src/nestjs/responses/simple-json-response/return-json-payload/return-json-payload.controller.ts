import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('return-json-payload')
export class ReturnJsonPayloadController {
  /**
   * This is a simple example of sending a JSON object as a response. As you can see, it can return a JSON object
   * directly.
   *
   * The @HttpCode() decorator is used to send a specific HTTP response code along with the payload. If no decorator is
   * present, the return code will be 200. See the full list of HTTP codes here:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
   *
   * You can also add @Header() decorator to return specific HTTP headers.
   * See the list of HTTP headers here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
   */
  @Get('simple')
  @HttpCode(202)
  @Header('Cache-Control', 'none')
  returnSimpleJsonPayloadFromGetRequest(): object {
    return {
      sample_string: 'sample value 01',
      sample_number: 9,
      sample_object: {
        sub_field01: 'sub field value',
        sub_field02: 'sub field 02',
      },
      sample_array: ['test', 'array', 'values'],
    };
  }

  /**
   * If you need to pick which response to return, you can't use decorators as in the example above. In this case, you
   * can use @Res() decorator on a Response (imported from express) property and configure each of the possible
   * responses manually.
   *
   * This example looks for URL parameter called "mode" and returns different payloads and HTTP response codes based on
   * the value of "mode".
   *
   * Please note that there are many ways to return different types of responses and that this is only one of them.
   *
   * This example uses techniques described in
   * src/nestjs/requests/incoming/read-request-payload/url-parameters/url-parameters.controller.ts
   * to fetch URL parameters.
   *
   * @param query
   * @param response
   */
  @Get('multiple-possible-response-codes')
  multiplePossibleResponseCodes(@Query() query, @Res() response: Response) {
    const value = {
      sample_string: 'sample value 01',
      sample_number: 9,
      sample_object: {
        sub_field01: 'sub field value',
        sub_field02: 'sub field 02',
      },
      sample_array: ['test', 'array', 'values'],
    };

    if (query.mode === 'test') {
      response.status(HttpStatus.OK).send(value);
    } else if (query.mode === 'accepted') {
      response.status(HttpStatus.ACCEPTED).send(value);
    } else {
      response.status(HttpStatus.FORBIDDEN).send();
    }
  }
}
