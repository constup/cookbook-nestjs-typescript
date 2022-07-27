/**
 * NOTE: This example is made to demonstrate what happens when nested Promises are resolved or rejected. It does not
 * show the best implementation practices.
 */

import { Controller, Get } from '@nestjs/common';
import { promiseReturningOtherPromiseFunction } from './promise-returning-other-promise';

@Controller('promise-returning-other-promise')
export class PromiseReturningOtherPromiseController {
  /**
   * When a Promise is used as a parameter for another Promise's resolve() call, the inner promise will be run and its
   * result will be the final result of your outer promise call.
   *
   * The following situations are covered in this example (each triggered by passing a different number to Promise's
   * wrapper function):
   *  - 1. resolveOuter(innerPromise) -> resolveInner('some result') - the end result will be success with 'some result'
   *    as payload;
   *  - 2. resolveOuter(innerPromise) -> rejectInner('some error') - the end result will be an error with 'some error'
   *    as payload;
   *  - 3. resolveOuter(innerPromise) -> resolveInner('some result') with a 2-second delay - the end result will be
   *    success with 'some result' payload. The result will be returned after 2 seconds.
   *  - 4. rejectOuter(innerPromise) -> resolveInner('some result') - the end result will be the inner Promise object
   *    returned as an error by rejecting the outer Promise. The inner Promise will still execute and be resolved.
   *  - 5. rejectOuter(innerPromise) -> rejectInner('some error') - the end result will be the inner Promise object
   *    returned as an error by rejecting the outer Promise. The inner Promise will still execute and be rejected. Watch
   *    out for cases like this, because they can leave unhandled Promise rejections. See the concrete example in this
   *    controller below for more details.
   */
  @Get('await')
  async promiseReturningOtherPromise() {
    let text = '';

    // Passed value is 1. Both inner and outer Promise should be resolved.
    let promiseReturningOtherPromise =
      await promiseReturningOtherPromiseFunction(1);
    text += promiseReturningOtherPromise + '\r\n';

    // Passed value is 2. We are expecting the inner Promise to be rejected.
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(
        2,
      );
    } catch (error) {
      text += error + '\r\n';
    }

    // Passed value is 3. We are expecting the inner Promise to be resolved after 2 seconds.
    promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(
      3,
    );
    text += promiseReturningOtherPromise + '\r\n';

    // Passed value is 4. We are expecting the outer promise to be rejected and inner promise object to be returned as
    // an error. The inner promise will be successfully resolved, but the result will not be passed as an error result
    // of the outer promise. Instead, the inner Promise will be returned as an object. You can see the result in the
    // console.
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(
        4,
      );
    } catch (error) {
      text += error + '\r\n';
      console.log(
        'This is just a marker so you can see it in console logs. sampleNumber is: 4',
      );
      console.log(error);
    }

    /**
     * Passed value is 5. We are expecting the outer promise to be rejected and inner promise object to be returned as
     * an error. The inner promise will be rejected, but he error result will not be passed as an error result of the
     * outer promise. Instead, the inner Promise will be returned as an object. You can see the result in the console.
     *
     * If you take a look at the console, you will also notice the following error:
     *  UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch
     *  block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason
     *  "Inner promise error. sampleNumber: 5".
     */
    try {
      promiseReturningOtherPromise = await promiseReturningOtherPromiseFunction(
        5,
      );
    } catch (error) {
      text += error + '\r\n';
      console.log(
        'This is just a marker so you can see it in console logs. Passed value is: 5',
      );
      console.log(error);
    }
    console.log(
      'This is just a marker so you can see it in console logs. End of messages.',
    );

    return text;
  }
}
