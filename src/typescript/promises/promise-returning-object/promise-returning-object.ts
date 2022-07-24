/**
 * This example shows that objects can be passed to the resolve() and reject() functions and returned by the Promise.
 * You would fetch the resulting object the same way as in the "simple-promise-returning-string" example.
 *
 * @see promiseReturningObject
 */
export const promiseReturningObjectFunction = (
  sampleNumber: number,
): Promise<object> => {
  return new Promise((resolve, reject) => {
    const successObject = {
      successString: 'Success!',
      successNumber: 42,
    };
    const errorObject = {
      errorString: 'Error!',
      errorNumber: -1,
    };

    if (sampleNumber === 1) {
      resolve(successObject);
    } else {
      reject(errorObject);
    }
  });
};
