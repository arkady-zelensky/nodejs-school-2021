import * as _ from "lodash";

interface AEntity {
  aId: number;
  name: string;
}

interface BEntity {
  bId: number;
  name: string;
}

interface ABRelation {
  aId: number;
  bId: number;
  value: string;
}

interface OutputData {
  [aId: number]: {
    name: string;
    bList: {
      [bId: number]: {
        name: string;
        value: string;
      };
    };
  };
}

export const implementation = (inputData: {
  aEntityList: AEntity[];
  bEntityList: BEntity[];
  abRelationList: ABRelation[];
}): OutputData => {
  const { aEntityList, bEntityList, abRelationList } = inputData;

  const aKeyedById = _(aEntityList)
    .keyBy(({ aId }) => aId)
    .mapValues(({ name }) => ({ name }))
    .value();

  const bKeyedById = _(bEntityList)
    .keyBy(({ bId }) => bId)
    .mapValues(({ name }) => ({ name }))
    .value();

  return abRelationList.reduce((accObj, { aId, bId, value }) => {
    const aName = _.get(aKeyedById, [aId, "name"]);
    const bName = _.get(bKeyedById, [bId, "name"]);

    _.set(accObj, [aId, "name"], aName);

    _.set(accObj, [aId, "bList", bId], {
      name: bName,
      value,
    });

    return accObj;
  }, {} as OutputData);
};

const inputData = {
  aEntityList: Array(100000)
    .fill(0)
    .map((_, index) => ({ aId: index + 1, name: `Name - ${index}` })),
  abRelationList: Array(100000)
    .fill(0)
    .map((_, index) => ({
      aId: index + 1,
      bId: index + 1,
      value: `Value - ${index}`,
    })),
  bEntityList: Array(100000)
    .fill(0)
    .map((_, index) => ({ bId: index + 1, name: `Name - ${index}` })),
};

console.time("start");

implementation(inputData);

console.timeEnd("start");
