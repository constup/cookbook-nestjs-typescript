export const samplePromise = (sampleNumber: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (sampleNumber === 1) {
      resolve('\t\tThis success payload is coming from the sample Promise');
    } else {
      reject('\t\tThis error payload is coming from the sample Promise');
    }
  });
};
