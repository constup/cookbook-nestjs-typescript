export const promiseReturningOtherPromiseFunction = (sampleNumber: number): Promise<string> => {
  return new Promise((resolveOuter, rejectOuter) => {
    const innerPromise: Promise<string> = new Promise(
      (resolveInner, rejectInner) => {
        if (sampleNumber === 1) {
          resolveInner(`Inner promise resolved. sampleNUmber: ${sampleNumber}`);
        } else if (sampleNumber === 2) {
          rejectInner(`Inner promise error. sampleNumber: ${sampleNumber}`);
        } else if (sampleNumber === 3) {
          setTimeout(() => {
            resolveInner(`Inner promise resolved after 2 seconds.`);
          }, 2000);
        } else if (sampleNumber === 4) {
          resolveInner(`Inner promise resolved. sampleNumber: ${sampleNumber}`);
        } else {
          rejectInner(`Inner promise error. sampleNumber: ${sampleNumber}`);
        }
      },
    );

    if (sampleNumber === 1) {
      resolveOuter(innerPromise);
    } else if (sampleNumber === 2) {
      resolveOuter(innerPromise);
    } else if (sampleNumber === 3) {
      resolveOuter(innerPromise);
    } else {
      rejectOuter(innerPromise);
    }
  });
};
