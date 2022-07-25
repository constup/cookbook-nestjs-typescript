/**
 * This is a simple Promise example which returns strings when resolved or rejected. More complex examples are
 * available in other files as well.
 *
 * This example shows a couple of things:
 *  - How to create a Promise?
 *    - A Promise is just an object with one function. The function has two arguments, both of them are functions:
 *        - The first argument is: resolve: (value: unknown) => void
 *          - "value" will be returned if a Promise is resolved/fulfilled successfully.
 *          - You can grab the value of this example with something like:
 *              const promiseResult = await somePromiseFunction(1);
 *        - The second argument is: reject: (reason?: any) => void
 *          - If a Promise is rejected, an Error will be thrown
 *          - An optional parameter "reason" can be used to send some data along with the Error
 *          - You can grab the contents of the error from this example with something like:
 *            try {
 *              promiseResult = await somePromiseFunction(2);
 *            } catch (error) {
 *              console.log(error);
 *            }
 *  - How to always have a return type of your Promises?
 *    - Wrap it in a function and mark the function's return type. Any function with a defined return type will do, even
 *      class methods.
 *  - What should be the return type of a function returning a Promise?
 *    - Return type, in our case, is:
 *        Promise<string>
 *      Whatever the type your successPayload in `resolve(successPayload)` is, you should use it as the internal type of
 *      a Promise.
 *  - How to pass a parameter/variable to a Promise and use it inside?
 *    - You can, for example, wrap a Promise in a function and use function's arguments inside the Promise.
 *  - What not to do in a Promise?
 *    - Return a value using "return" statement without calling either resolve() or reject(). See the comments in the
 *      example below for more details.
 *
 * @see simplePromiseExample
 */
export const somePromiseFunction = (sampleNumber: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (sampleNumber === 1) {
      // If you call somePromiseFunction(1), the Promise will resolve and return 'Correct number'.
      resolve('Correct number');
    } else if (sampleNumber === 2) {
      // If you call somePromiseFunction(2) the promise will reject and throw an Error with text 'Wrong number'.
      // You can then catch the error in a try/catch block.
      reject('Wrong number');
    } else {
      /**
       * Don't do this!!!
       * A Promise can have 3 states: resolved (sometimes referred as "fulfilled"), rejected and pending. By default, a
       * Promise is considered to be in a "pending" state until resolve() or reject() is called inside it.
       * Returning a value directly, without calling either resolve() or reject(), will get the Promise stuck in
       * "pending" state.
       * If you then call the somePromiseFunction() in your application like this:
       *    const value = await somePromiseFunction(3);
       * your application will get stuck on that line, waiting for a Promise to either be resolved or rejected, which
       * will never happen.
       */
      return 'You are now officially stuck.';
    }
  });
};

/**
 * This is pretty much the same simple Promise implementation as in the example above (without the bad third "else"
 * statement). It just shows that you can use any variable inside promise's internal code which is in the same scope as
 * Promise instantiation.
 *
 * @see simplePromiseExternalVariables
 */
export class PromiseSampleClass {
  returnPromise(): Promise<string> {
    const sampleNumber = 1;
    const sampleText = "See? It's returned by the promise.";

    return new Promise((resolve, reject) => {
      if (sampleNumber === 1) {
        resolve(`It's still a correct number and... ${sampleText}`);
      } else {
        reject('Wrong number');
      }
    });
  }
}
