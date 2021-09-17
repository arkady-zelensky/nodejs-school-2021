export const arrayMutateRemove = <TArrayElement>(
  array: TArrayElement[],
  predicate: (element: TArrayElement, index?: number) => boolean
): TArrayElement[] =>
  array.reduce(
    (acc, currentElement, index) => {
      const isPredicateTrue = predicate(currentElement, index)
     
      if (isPredicateTrue) {
        const [removedElement] = array.splice(index, 1)

        return [...acc, removedElement]
      }

      return acc
    },
    [] as TArrayElement[]
  )
