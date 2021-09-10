const joinNumbersTS = (numbers: number[]): string => {
  return numbers.join();
};

const joinNumbersJS = (numbers) => {
  return numbers.join();
};

// *********************

const sortNumbersTS = (
  numbers: number[],
): {
  positive: number[];
  negative: number[];
} => {
  const positiveNumbers: number[] = [];
  const negativeNumbers: number[] = [];

  numbers.forEach((number: number) => {
    if (number >= 0) {
      positiveNumbers.push(number);
    } else {
      negativeNumbers.push(number);
    }
  });

  return {
    positive: positiveNumbers,
    negative: negativeNumbers,
  };
};

const sortNumbersJS = (numbers) => {
  const positiveNumbers = [];
  const negativeNumbers = [];

  numbers.forEach((number) => {
    if (number >= 0) {
      positiveNumbers.push(number);
    } else {
      negativeNumbers.push(number);
    }
  });

  return {
    positive: positiveNumbers,
    negative: negativeNumbers,
  };
};

// *****************************************

const array1: number[] = [1, 2, 3];

const array2: Array<number> = [1, 2, 3];

const array3: [number, number, number] = [1, 2, 3];

// ******************************************

const greet1 = (name: string): string => `Hello, ${name.toUpperCase()}!!`;

function greet2(name: string): string {
  return `Hello, ${name.toUpperCase()}!!`;
}

greet1(123);

// *****************************************

// const printCoord = (pt: { x: number; y: number; z: number }) => {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// };

// printCoord({ x: 3, y: 7 });

// ***************************************

// const printId = (id: number | string) => {
//   console.log('Your ID is: ' + id);
// };

// printId(101);

// printId('202');

// printId({ myID: 22342 });

// *******************************************

// type Point = {
//   x: number;
//   y: number;
// };

// const printCoord = (pt: Point) => {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// };

// printCoord({ x: 100, y: 100 });

// **********************************************

type ID = number | string;

const printId = (id: ID) => {
  console.log('Your ID is: ' + id);
};

// *******************************************

// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// ***********************************************

let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;

// *********************************************

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// *****************************************

interface Point {
  x: number;
  y: number;
}

enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const move = (currentPoint: Point, direction: Direction): Point => {
  switch (direction) {
    case Direction.UP:
      return {
        x: currentPoint.x,
        y: currentPoint.y + 1,
      };

    case Direction.LEFT:
      return {
        x: currentPoint.x - 1,
        y: currentPoint.y,
      };

    case Direction.RIGHT:
      return {
        x: currentPoint.x + 1,
        y: currentPoint.y,
      };

    case Direction.DOWN:
      return {
        x: currentPoint.x,
        y: currentPoint.y - 1,
      };
  }
};

// *****************************************

// interface User {
//   email: string;
//   phone: string | undefined;
// }

// interface User {
//   email: string;
//   phone?: string;
// }

// interface User {
//   email: string;
//   phone: string | null;
// }

// const user: User = {
//   email: 'some@email.com',
//   phone: null,
// };

// user.phone.toUpperCase();

// if (user.phone) {
//   user.phone.toUpperCase();
// }

// ********************************

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(): void {
    console.log(`${this.name.toUpperCase()} is moving!`);
  }
}

// **************************

// class Greeter {
//   public greet() {
//     console.log('hi!');
//   }
// }

// const g = new Greeter();

// g.greet();

// ***************************

// class Greeter {
//   public greet() {
//     console.log("Hello, " + this.getName());
//   }

//   protected getName() {
//     return "hi";
//   }
// }

// class SpecialGreeter extends Greeter {
//   public howdy() {
//     console.log("Howdy, " + this.getName());
//   }
// }

// const g = new SpecialGreeter();

// g.greet();

// g.getName();

// ****************************

// class Base {
//   private greet() {
//     console.log('Hello there!');
//   }
// }

// const b = new Base();

// b.greet();

// ****************************

// const chunkArray = (
//   array: Array<number>,
//   chunkSize: number,
// ): Array<Array<number>> => {
//   const chunksCount = Math.ceil(array.length / chunkSize);

//   return new Array(chunksCount)
//     .fill(null)
//     .map((_, index) =>
//       array.slice(index * chunkSize, index * chunkSize + chunkSize),
//     );
// };

// const arrayOfNumberChunks = chunkArray([1, 2, 3, 4, 5], 2);

// const arrayOfStringChunks = chunkArray(['a', 'b', 'c', 'd', 'e'], 2);

// ****************************

// const chunkArray = (
//   array: Array<any>,
//   chunkSize: number,
// ): Array<Array<any>> => {
//   const chunksCount = Math.ceil(array.length / chunkSize);

//   return new Array(chunksCount)
//     .fill(null)
//     .map((_, index) =>
//       array.slice(index * chunkSize, index * chunkSize + chunkSize),
//     );
// };

// const arrayOfNumberChunks = chunkArray([1, 2, 3, 4, 5], 2);

// const arrayOfStringChunks = chunkArray(['a', 'b', 'c', 'd', 'e'], 2);

// ******************************

const chunkArray = <TArrayItem>(
  array: Array<TArrayItem>,
  chunkSize: number,
): Array<Array<TArrayItem>> => {
  const chunksCount = Math.ceil(array.length / chunkSize);

  return new Array(chunksCount)
    .fill(null)
    .map((_, index) =>
      array.slice(index * chunkSize, index * chunkSize + chunkSize),
    );
};

const arrayOfNumberChunks = chunkArray([1, 2, 3, 4, 5], 2);

const arrayOfStringChunks = chunkArray(['a', 'b', 'c', 'd', 'e'], 2);
