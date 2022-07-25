import { Controller, Get } from '@nestjs/common';
import {
  PromiseSampleClass,
  somePromiseFunction,
} from './simple-promise-returning-string';

@Controller('simple-promise-returning-string')
export class SimplePromiseReturningStringController {
  /**
   * @see somePromiseFunction
   */
  @Get('simple-resolve-reject')
  async simplePromiseExample() {
    let somePromise = await somePromiseFunction(1);
    let text = `Passing value: 1. The promise will be resolved. The result is: ${somePromise}\r\n`;

    /*
     * Note:
     * Without using try/catch here, the reject() call of the promise will throw an actual error. This controller will
     * then return HTTP 500 (Internal server error) and the error will be visible in the execution terminal (if you're
     * running npm start run:dev  in a terminal).
     */
    try {
      somePromise = await somePromiseFunction(2);
    } catch (error) {
      text += `Passing value 2. The promise will be rejected. The resulting error is: ${error}\r\n`;
    }

    return text;
  }

  /**
   * @see PromiseSampleClass
   */
  @Get('simple-promise-external-variables')
  async simplePromiseExternalVariables() {
    const simplePromise = new PromiseSampleClass();

    try {
      return await simplePromise.returnPromise();
    } catch (error) {
      return 'The error is caught.';
    }
  }
}
