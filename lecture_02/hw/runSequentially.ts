export const runSequentially = <TArrayElement, TResult>(
  array: TArrayElement[],
  sequenceCallback: (element: TArrayElement, index: number) => Promise<TResult>,
): Promise<TResult[]> => {
  return array.reduce(
    (promise, current, index) =>
      promise.then((acc) =>
        sequenceCallback(current, index).then((result) => [...acc, result]),
      ),
    Promise.resolve([]) as Promise<TResult[]>,
  );
};

export const runSequentiallyAwait = async <TArrayElement, TResult>(
  array: TArrayElement[],
  sequenceCallback: (element: TArrayElement, index: number) => Promise<TResult>,
): Promise<TResult[]> => {
  return array.reduce(
    async (promise, current, index) => {
      const acc = await promise;

      const callbackResult = await sequenceCallback(current, index)

      return [...acc,  callbackResult]    
    },
    Promise.resolve([]) as Promise<TResult[]>,
  );
};
