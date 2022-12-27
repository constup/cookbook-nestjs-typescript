import {SomeCustomError} from './someCustomError';
import {ErrorProcessor} from './error-processor';

export class Service {
    constructor(private readonly errorProcessor: ErrorProcessor) {
    }

    doSomething(parameter: string): string {
        if (parameter === 'error') {
            // This is what we want to mock:
            const error = new SomeCustomError(parameter);
            this.errorProcessor.processError(error);
        } else {
            console.log("It's ok.");
        }

        return "Done";
    }
}