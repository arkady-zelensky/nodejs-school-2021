import * as _ from "lodash";

export const createHashMap = <TArrayElement>(
  array: TArrayElement[],
  iteratee: _.ValueIterateeCustom<TArrayElement, string | number | symbol>
): HashMap<TArrayElement> =>
  _(array)
    .keyBy(iteratee)
    .mapValues((data) => data)
    .value();

export interface HashMap<TElement> {
  [x: string]: TElement;
}
