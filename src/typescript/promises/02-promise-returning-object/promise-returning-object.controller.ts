import { Controller, Get } from '@nestjs/common';
import { promiseReturningObjectFunction } from './promise-returning-object';

@Controller('02-promise-returning-object')
export class PromiseReturningObjectController {
  /**
   * This example shows that objects can be passed to the resolve() and reject() functions and returned by the Promise.
   * You would fetch the resulting object the same way as in the "01-simple-promise-returning-string" example.
   *
   * @see promiseReturningObjectFunction
   */
  @Get('simple-resolve-reject')
  async promiseReturningObject(): Promise<string> {
    let promiseReturningObject = await promiseReturningObjectFunction(1);
    let text = `Passing value 1.
    The promise will be resolved.
    The result is:
    ${JSON.stringify(promiseReturningObject)}
    \r\n`;

    try {
      promiseReturningObject = await promiseReturningObjectFunction(2);
    } catch (error) {
      text += `Passing value 2.
      The promise will be rejected.
      The error payload is:
      ${JSON.stringify(error)}
      `;
    }

    return text;
  }
}
