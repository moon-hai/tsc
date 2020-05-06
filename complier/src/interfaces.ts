// type addFn = (a: number, b: number) => number;
// let add: addFn = (num1: number, num2: number) => num1 + num2

// add(1, 2)

interface AddFn {
  (a:number, b:number): number;
}

let add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
  outputName?: string
}

interface Greetable extends Named {
  greeting (pharse: string): void;
}

class Person implements Greetable {
  name: string;
  // age: 30;

  constructor(name: string) {
    this.name = name
  }

  greeting (pharse: string) {
    console.log(`${pharse} ${this.name}`)
  }
}

let user1 = new Person('Max')
// user1.name = 'dsadsa'

user1.greeting('Hello -')
console.log(user1)

interface StringArray {
  [props: string]: string
}

const arr: StringArray = {
  a: 'dadsa',
  b: 'dsada'
}

// const newStringArr: StringArray = ['first string', 'second string']
// console.log(newStringArr)
