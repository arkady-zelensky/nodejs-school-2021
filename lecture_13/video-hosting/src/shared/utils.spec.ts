import {shuffle} from "./utils";

describe('utils', () => {
  it('shuffle: should return array with same length', () => {
    const input = [1, 2 , 3, 4, 5];

    const result = shuffle(input);

    expect(result.length).toEqual(input.length);
  });

  it('shuffle: should return array with different order of items', () => {
    const input = [1, 2, 3, 4, 5];

    const shuffled = shuffle([...input]);

    expect(input.sort()).toEqual(shuffled.sort());
  });
});
