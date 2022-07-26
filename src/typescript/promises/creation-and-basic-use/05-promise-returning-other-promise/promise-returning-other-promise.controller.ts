import { Controller, Get } from '@nestjs/common';
import { promiseReturningOtherPromiseFunction } from './promise-returning-other-promise';

@Controller('promise-returning-other-promise')
export class PromiseReturningOtherPromiseController {
  @Get('await')
  async promiseReturningOtherPromise() {
    let text = '';

    // Passed value is 1. Both inner and outer Promise should be resolved.
    let promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(1);
    text += promiseReturningOtherPromise + '\r\n';

    // Passed value is 2. We are expecting the inner Promise to be rejected.
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(2);
    } catch (error) {
      text += error + '\r\n';
    }

    // Passed value is 3. We are expecting the inner Promise to be resolved after 2 seconds.
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(3);
      text += promiseReturningOtherPromise + '\r\n';
    } catch (error) {
      text += error + '\r\n';
    }

    // Passed value is 4. We are expecting the outer Promise to be rejected.
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(4);
    } catch (error) {
      text += error + '\r\n';
    }

    return text;
  }
}
