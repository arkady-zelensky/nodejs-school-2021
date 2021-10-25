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

  return abRelationList.reduce((accObj, { aId, bId, value }) => {
    const aEntityRelation = aEntityList.find((aEntity) => aEntity.aId === aId);

    const bEntityRelation = bEntityList.find((bEntity) => bEntity.bId === bId);

    if (!accObj[aId]) {
      accObj[aId] = {
        name: aEntityRelation.name,
        bList: {
          [bId]: {
            name: bEntityRelation.name,
            value,
          },
        },
      };
    }

    if (!accObj[aId].bList[bId]) {
      accObj[aId].bList[bId] = {
        name: bEntityRelation.name,
        value,
      };
    }

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
