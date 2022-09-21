import { Controller, Get } from '@nestjs/common';
import { promiseWrapperFunction } from './promise-returning-function';

@Controller('promise-returning-function')
export class PromiseReturningFunctionController {
  @Get('simple-function')
    async promiseReturningFunction() {
        const promiseReturningFunction = await promiseWrapperFunction();

        let result = `The Promise was already called and fulfilled in the previous line of code.
    However, the Promise didn't return a string, but a function which returns a string. 
    We haven't called the function returned from the Promise yet.
    ----------
    Calling the returned function...
    \r\n`;

        result += promiseReturningFunction(
            'String parameter passed in the controller.',
            200,
        );

        return result;
    }
}
