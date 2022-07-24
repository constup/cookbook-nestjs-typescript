/**
 * This example shows that the type of the Promise is always equal to the type passed to resolve().
 * We are passing a string to resolve() and the return type of the function is Promise<string>, even though we've used
 * an object for the reject() payload.
 *
 * If you try to mark the return type of the function as Promise<object>, you will get an error:
 *  TS2345 Argument of type 'string' is not assignable to parameter of type 'object|PromiseLike<>'.
 */
export const promiseReturningDifferentTypesFunction = (
  sampleNumber: number,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const successString = 'Success!';
    const errorObject = {
      errorString: 'Error!',
      errorNumber: -2,
    };

    if (sampleNumber === 1) {
      resolve(successString);
    } else {
      reject(errorObject);
    }
  });
};
