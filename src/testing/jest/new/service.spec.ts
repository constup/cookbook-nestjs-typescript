import {Service} from './service';
import {ErrorProcessor} from './error-processor';
// Step 1: Import the class whose `new` call is being mocked.
import * as SomeCustomErrorModule from './someCustomError';
import {SomeCustomError} from './someCustomError';

describe('Example for mocking object instantiation with `new`.', () => {
    test('main test - should create and process error', () => {
        // This mock is not important for this example. It's just a sample mock used to instantiate the main Service for
        // this test.
        const errorProcessorMock = {
            processError: jest.fn(),
        } as unknown as ErrorProcessor;
        // Step 2: Spy on the class.
        const someCustomErrorMock = jest.spyOn(SomeCustomErrorModule, 'SomeCustomError');
        // Step 3: Mock the constructor implementation. If the constructor implementation is not mocked, the following
        // error will be thrown: `Class constructor SomeCustomError cannot be invoked without 'new'`
        someCustomErrorMock.mockImplementation((): SomeCustomError => {
            return "this is a mock of SomeCustomError" as unknown as SomeCustomError
        });
        const service = new Service(errorProcessorMock);
        const result = service.doSomething('error');
        expect(result).toStrictEqual("Done");
        // Step 4: Test that SomeCustomError constructor is called.
        expect(someCustomErrorMock).toHaveBeenCalledTimes(1);
        // Step 5: Test that the correct property value has been passed when calling SomeCustomError constructor.
        expect(someCustomErrorMock).toHaveBeenCalledWith('error');
    });
});