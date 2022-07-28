import { Controller, Get, Query } from '@nestjs/common';
import { samplePromise } from './sample-promise';

@Controller('then-catch-finally')
export class SimpleUseOfThenController {
  /**
   * In this wrapper function we are going to use the sample Promise (returned by the samplePromise() function), apply
   * some additional processing to the Promise's result and pass the result to a controller. The result of this wrapper
   * function is also a Promise with its resolve and reject payloads processed and modified.
   *
   * Generally speaking, you can return just the result:
   *  return result;
   * The transpiler which converts the code from TypeScript to JavaScript during the build process will handle it
   * properly and return a Promise as the result.
   * However, there are some cases when transpilers don't behave as usually expected and create a bug by trying to
   * return the value directly in the built code. The safest way to avoid problems with transpilers is to return the
   * resolve directly with:
   *  return Promise.resolve(result);
   * This issue has been detected in React applications written in TypeScript combined with using specific
   * transpilers. It has not yet been seen in NodeJS applications written in TypeScript.
   *
   * Promise's then() method:
   *  - returns a Promise;
   *  - has 2 arguments
   *    - resolve function
   *      - the type of the argument of the resolve function is the same as the type of the original Promise's resolve()
   *        payload;
   *      - returns a new Promise;
   *      - you can process the original Promise's payload and pass the processed result to the new Promise;
   *    - reject function
   *      - the type of the argument of the reject function is the same as the type of the original Promise's reject()
   *        payload;
   *      - returns a new Promise;
   *        - even if you use "throw" to throw an error, it will be automatically repackaged into a new Promise;
   *      - you can process the original Promise's error payload and pass the processed result to the new Promise.
   *
   * Since then() method returns a Promise, multiple then() methods can be chained to include additional processing.
   * This will be covered in a separate example.
   *
   * @private
   * @return Promise<string>
   */
  private wrapperFunction(sampleNumber: number): Promise<string> {
    return samplePromise(sampleNumber).then(
      (promiseResult: string) => {
        // Processing of Promise's result can go here.
        const result = `\tThis is executed in the wrapper function. Promise result:\r\n ${promiseResult}`;
        /**
         * Using:
         *  return result;
         * should have the same effect, but can be bugged. See the comment section of this wrapper function for more
         * details.
         */
        return Promise.resolve(result);
      },
      (promiseError) => {
        // Processing of Promise's error can go here
        /**
         * You can also use:
         *  throw `\tThis is executed in the wrapper function. Promise error:\r\n ${promiseError}`;
         * or:
         *  throw new Error(`\tThis is executed in the wrapper function. Promise error:\r\n ${promiseError}`);
         * and the result should be exactly the same - a new Promise will be returned which uses the error message from
         * "throw" or Error() as the rejection payload.
         */
        return Promise.reject(
          `\tThis is executed in the wrapper function. Promise error:\r\n ${promiseError}`,
        );
      },
    );
  }

  /**
   * This example uses a wrapper function for the promise which we want to use.
   * The wrapper function allows us to apply additional processing to the original response of the Promise, whether it's
   * resolved successfully, or rejected with an error.
   * Since the result of the wrapper function is also a Promise, and Promises are passing resolve payloads and rejection
   * errors to their wrapper promises - we can easily add many layers of processing organized in different methods and
   * classes (corresponding to their purpose) while keeping the top-level code clean.
   * We also have the ability for a centralized error processing directly in the top-level code without the explicit
   * need to process errors wherever they happen in the code (there is, of course, a possibility for immediate error
   * processing if needed, but it's not mandatory).
   *
   * @param query
   */
  @Get('simple-then-example-with-wrapper')
  simpleThenExampleWithWrapper(@Query() query) {
    return this.wrapperFunction(parseInt(query.sampleNumber)).then(
      (resolveResult: string) => {
        return `This is executed in controller action. Resolve result:\r\n ${resolveResult}`;
      },
      (rejectResult) => {
        console.log(
          `This is executed in controller action. Reject result:\r\n ${rejectResult}`,
        );
      },
    );
  }

  /**
   * The promise is called in this controller action directly. Any additional processing is applied directly in the
   * controller. The code is not much different from the wrapper function. Adding some complex processing or chaining
   * multiple Promise.then() calls quickly reveals that controller actions can become too big or complex.
   *
   * @param query
   */
  @Get('simple-then-example-without-wrapper')
  simpleThenExampleWithoutWrapper(@Query() query) {
    return samplePromise(parseInt(query.sampleNumber)).then(
      (promiseResult) => {
        // Processing of Promise's result can go here.
        return `This is executed in controller action. Promise result:\r\n ${promiseResult}`;
      },
      (promiseError) => {
        // Processing of Promise's error can go here
        console.log(
          `This is executed in controller action. Promise error:\r\n ${promiseError}`,
        );
      },
    );
  }
}
