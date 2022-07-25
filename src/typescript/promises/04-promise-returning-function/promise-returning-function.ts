/**
 * This example shows that a Promise can return a function.
 *
 * - Is the function `sampleReturnFunction` executed when the promise is instantiated?
 *    No. Whet you will get when you call:
 *      const doSomething = await promiseReturningFunctionFunction();
 *    is only a function. You can then use it like any other function, in our case:
 *      const result = doSomething('some string', 123);
 * - What is the return type of resolve() in this case?
 *    The return type is a function with the following definition:
 *      (stringParameter: string, numberParameter: number) => string
 *    It's a function asking for two attributes and returning a string.
 *    The type inside the Promise<> must be the same as the definition of a function which you are passing to resolve().
 * - What is the full type of the Promise?
 *    Promise<(stringParameter: string, numberParameter: number) => string>
 *
 * Note: The reject() was omitted because it's not relevant for this example.
 */
export const promiseWarpperFunction = (): Promise<
  (stringParameter: string, numberParameter: number) => string
> => {
  return new Promise((resolve) => {
    const sampleReturnFunction = (
      stringParam: string,
      numberParam: number,
    ): string => {
      return `This function is returned by a Promise.
        string param is: ${stringParam}
        numberParam is: ${numberParam}
        `;
    };

    resolve(sampleReturnFunction);
  });
};
