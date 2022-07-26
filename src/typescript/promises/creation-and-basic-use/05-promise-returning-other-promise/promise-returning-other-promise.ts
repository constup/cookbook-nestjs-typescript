export const promiseReturningOtherPromiseFunction = (sampleNumber: number) => {
  return new Promise((resolveOuter, rejectOuter) => {
    const insidePromise = new Promise((resolveInner, rejectInner) => {
      if (sampleNumber === 1) {
        resolveInner(`Inner promise resolved. sampleNUmber: ${sampleNumber}`);
      } else if (sampleNumber === 2) {
        rejectInner(`Inner promise error. sampleNumber: ${sampleNumber}`);
      } else {
        setTimeout(() => {
          resolveInner(`Inner promise resolved after 2 seconds.`);
        }, 2000);
      }
    });

    if (sampleNumber === 1) {
      resolveOuter(insidePromise);
    } else if (sampleNumber === 2) {
      resolveOuter(insidePromise);
    } else if (sampleNumber === 3) {
      resolveOuter(insidePromise);
    } else {
      rejectOuter(`Outer promise error. sampleNumber: ${sampleNumber}`);
    }
  });
};
