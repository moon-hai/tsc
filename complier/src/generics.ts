// const names = ['Max', 'Manuel'];
const anotherNames: any[] = []
const names: Array<string> = [] // string[]
// console.log(names[0].split(' ')[0]) -> it work

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!')
  }, 1000)
})

promise.then(data => {
  data.split(' ')
})

// using extends object to define T and U have to object
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// const mergeObj = merge({ name: 'Max' }, 20) -> wrong due to generic contraints
const mergeObj = merge({ name: 'Max' }, { age: 20 })
console.log(mergeObj.age)

interface Lengthwise {
  length: number
}

function countAndDescribe<T extends Lengthwise>(element: T): [T, string] {
  let descriptionText = 'Got not value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText]
}

console.log(countAndDescribe(['dasdas', 2, 123]))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value of ${key} is ${obj[key]}`
}

console.log(extractAndConvert({ name: 'Hai', age: 19 }, 'name'))
// console.log(extractAndConvert({ name: 'Hai', age: 19 }, 'n')) -> wrong

class DataStorage<T extends string | number> {
  private data: T[] = []

  constructor(data: T[]) {
    this.data = data
  }

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const numberStorage = new DataStorage<number>([12, 21, 121])
numberStorage.addItem(2)
numberStorage.addItem(9)
numberStorage.addItem(200)
console.log(numberStorage.getItems())
numberStorage.removeItem(2)
console.log(numberStorage.getItems())

const stringStorage = new DataStorage<string>(['dassda', 'dasdsa', 'aaa'])
stringStorage.addItem('Hai')
stringStorage.addItem('Lu')
stringStorage.addItem('Dinh')
console.log(stringStorage.getItems())
stringStorage.removeItem('Hai')
console.log(stringStorage.getItems())

// union types
// class UnionDataStorage {
//   private data: string[] | number[] = []

//   constructor(data: string[] | number[]) {
//     this.data = data
//   }

//   addItem(item: string | number) {
//     this.data.push(item)
//   }

//   removeItem(item: string | number) {
//     this.data.splice(this.data.indexOf(item), 1)
//   }

//   getItems() {
//     return [...this.data]
//   }
// }

// const unionData = new UnionDataStorage([123, 123])

interface CourseGoal {
  title: string;
  description: string;
  compleUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}  // set courseGoal is a Parital of CourseGoal
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.compleUntil = date

  return courseGoal as CourseGoal
  // return {
  //   title,
  //   description,
  //   compleUntil: date
  // }
}

const allNames: Readonly<string[]> = ['Hai', 'Moon'];
// allNames.push('Manu'); //error
// allNames.pop(); //error
console.log(allNames)

// class Collection<T> {
//   private _things:T[];

//   constructor() {
//     this._things = [];
//   }

//   add(something: T): void {
//     this._things.push(something);
//   }

//   get(index: number): T {
//     return this._things[index];
//   }
// }
// let Stringss = new Collection<string>();
// // Stringss.add(001);
// Stringss.add("world");
// console.log(Stringss.get(0).substr(0, 1));

// const Numerss = new Collection<number>();
// Numerss.add(200)
// console.log(Numerss.get(0))

// function printName<T extends number>(arg: T) {
//   // console.log(arg.length);
//   return arg;
// }
// printName(3);

// interface Lengthwise {
//   length: number;
// }

// function loggingLength<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }

// loggingLength('dasdsa')
// loggingLength({ length: 122 })
