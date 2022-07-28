/**
 * When creating asynchronous functions, you have two options:
 *  - 1) By using a Promise()
 *  - 2) By using async
 *  These examples show you how to implement each of them.
 */

/**
 * Create an asynchronous function by using a new Promise().
 *
 * You must use resolve() to successfully resolve the Promise.
 * You must use reject() to throw an error and reject the Promise.
 *
 * @param sampleNumber
 * @return Promise<string>
 */
export const promiseCreationExample = (
  sampleNumber: number,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (sampleNumber === 1) {
      resolve('success from promise');
    } else {
      reject('error from promise');
    }
  });
};

/**
 * Create an asynchronous function by using "async" keyword.
 * This method is pretty much the same as creating the new Promise() and returning it, but it's simpler to read and use.
 * Note: As soon as you mark a function with "async", the return type of the function is automatically set to
 *    Promise<some_type>, where "some_type" is the type of the payload which you are returning. Async is just a "syntax
 *    sugar" which makes code look more sequential.
 *
 * You must return the result to successfully resolve the Promise.
 * You must throw an error to reject the Promise.
 *
 * @param sampleNumber
 * @return Promise<string>
 */
export const asyncCreationExample = async (
  sampleNumber: number,
): Promise<string> => {
  if (sampleNumber === 1) {
    return 'success from async';
  } else {
    throw 'error from async';
  }
};

/**
 * If it's easier for you to read the above functions as class methods, the following class contains both of above
 * function implementations as methods.
 */
export class CreationExampleClass {
  createPromise(sampleNumber: number) {
    return new Promise((resolve, reject) => {
      if (sampleNumber === 1) {
        resolve('success from promise');
      } else {
        reject('error from promise');
      }
    });
  }

  async createAsync(sampleNumber: number) {
    if (sampleNumber === 1) {
      return 'success from async';
    } else {
      throw Error('error from async');
    }
  }
}
