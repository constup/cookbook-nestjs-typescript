import { Controller, Get } from '@nestjs/common';
import { promiseReturningDifferentTypesFunction } from './promise-returning-different-types';

@Controller('promise-returning-different-types')
export class PromiseReturningDifferentTypesController {
  @Get('simple-resolve-reject')
  async promiseReturningDifferentTypes(): Promise<string> {
    let promiseReturningObject = await promiseReturningDifferentTypesFunction(
      1,
    );
    let text = `Passing value 1.
    The promise will be resolved.
    The result is string:
    ${JSON.stringify(promiseReturningObject)}
    \r\n`;

    try {
      promiseReturningObject = await promiseReturningDifferentTypesFunction(2);
    } catch (error) {
      text += `Passing value 2.
      The promise will be rejected.
      The error payload is object:
      ${JSON.stringify(error)}
      `;
    }

    return text;
  }
}
