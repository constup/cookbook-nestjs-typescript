import {
    asyncCreationExample,
    promiseCreationExample,
} from './async-and-promise-creation';

export const usePromiseWithThen = (sampleNumber: number): Promise<string> => {
    return promiseCreationExample(sampleNumber).then(
        (promiseResult: string) => {
            // Processing of the result can go here.
            return Promise.resolve(`Promise used with "then" and resolved successfully.
      Result: ${promiseResult}
      `);
        },
        (promiseError) => {
            // Processing of Promise's error can go here.
            return Promise.reject(`Promise used with "then" and rejected.
      Error payload: ${promiseError}
      `);
        },
    );
};

export const useAsyncWithAwait = async (
    sampleNumber: number,
): Promise<string> => {
    try {
        const asyncResult = await asyncCreationExample(sampleNumber);
        // Processing of the result can go here.
        return `Async used with "await" and resolved successfully.
    Result: ${asyncResult}
    `;
    } catch (error) {
    // Processing of the error payload can go here.
        throw `Async used with "await" and rejected.
    Error payload: ${error}
    `;
    }
};
