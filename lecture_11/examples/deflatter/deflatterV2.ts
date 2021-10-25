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

  const aKeyedById: {
    [aId: string]: {
      name: string;
    };
  } = aEntityList.reduce((acc, curr) => {
    if (!acc[curr.aId]) {
      acc[curr.aId] = {
        name: curr.name,
      };
    }

    return acc;
  }, {});

  const bKeyedById: {
    [bId: string]: {
      name: string;
    };
  } = bEntityList.reduce((acc, curr) => {
    if (!acc[curr.bId]) {
      acc[curr.bId] = {
        name: curr.name,
      };
    }

    return acc;
  }, {});

  return abRelationList.reduce((accObj, { aId, bId, value }) => {
    if (!accObj[aId]) {
      accObj[aId] = {
        name: aKeyedById[aId].name,
        bList: {
          [bId]: {
            name: bKeyedById[bId].name,
            value,
          },
        },
      };
    }

    if (!accObj[aId].bList[bId]) {
      accObj[aId].bList[bId] = {
        name: bKeyedById[bId].name,
        value,
      };
    }

    return accObj;
  }, {} as OutputData);
};

const inputData = {
  aEntityList: Array(1000000)
    .fill(0)
    .map((_, index) => ({ aId: index + 1, name: `Name - ${index}` })),
  abRelationList: Array(1000000)
    .fill(0)
    .map((_, index) => ({
      aId: index + 1,
      bId: index + 1,
      value: `Value - ${index}`,
    })),
  bEntityList: Array(1000000)
    .fill(0)
    .map((_, index) => ({ bId: index + 1, name: `Name - ${index}` })),
};

console.time("start");

implementation(inputData);

console.timeEnd("start");
