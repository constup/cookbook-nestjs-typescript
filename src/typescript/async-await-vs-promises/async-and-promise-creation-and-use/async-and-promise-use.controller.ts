import { Controller, Get, Query } from '@nestjs/common';
import { useAsyncWithAwait, usePromiseWithThen } from './async-and-promise-use';

@Controller('async-and-promise-creation-and-use')
export class AsyncAndPromiseUseController {
  @Get('promise-example')
  promiseExample(@Query() query) {
    return usePromiseWithThen(parseInt(query.sampleNumber)).then(
      (promiseResult) => {
        return `Promise example success.\r\n\t${promiseResult}`;
      },
      (promiseError) => {
        console.log(`Promise example error.\r\n\t${promiseError}`);
      },
    );
  }

  @Get('async-example')
  async asyncExample(@Query() query) {
    try {
      const promiseResult = await useAsyncWithAwait(
        parseInt(query.sampleNumber),
      );
      return `Async example success.\r\n\t${promiseResult}`;
    } catch (promiseError) {
      console.log(`Async example error.\r\n\t${promiseError}`);
    }
  }

  /**
   * The next two examples are confirming that no matter which syntax you use, async or Promise(), you are getting the
   * same result - a Promise object which can, again, be processed with any syntax.
   */

  @Get('promise-mix-with-async')
  async promiseMixedWithAsync(@Query() query) {
    try {
      const promiseResult = await usePromiseWithThen(
        parseInt(query.sampleNumber),
      );
      return `Promise processed in async syntax.\r\n\t${promiseResult}`;
    } catch (promiseError) {
      console.log(`Promise processed in async syntax.\r\n\t${promiseError}`);
    }
  }

  @Get('async-mix-with-promise')
  asyncMixWithPromise(@Query() query) {
    return useAsyncWithAwait(parseInt(query.sampleNumber)).then(
      (promiseResult) => {
        return `Async processed in Promise.then() syntax.\r\n\t${promiseResult}`;
      },
      (promiseError) => {
        console.log(
          `Async processed in Promise.then() syntax\r\n\t${promiseError}`,
        );
      },
    );
  }
}
