const decimal: number = 6

const fullName: string = 'Lu Dinh Hai'
const templateLiteral: string = `${fullName} is the my name`

const arrNums: number[] = [1, 2, 3, 4, 5]
const anotherArrNums: Array<Number> = [1, 2, 3, 4, 5]

// Tuple types allow you to express an array with a fixed number
//of elements whose types are known,
//but need not be the same

let initTuple: [string, number]
initTuple = ['21', 2]  // wrong if not same type in same position
// initTuple = [2, 3] => fail

// enum
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
console.log(c)

enum AnotherColor {Red, Green, Blue}
let colorName: string = AnotherColor[2]
console.log(colorName)

// any
let notSure: any = 4
notSure = 'maybe string instead'
notSure = !true

let anyArray: any[] = [1, 'dasdsa', false]
console.log(anyArray[1])

// never
//never is the return type for a function expression
//or an arrow function expression that always throws an exception
//or one that never returns

function error(message: string): never {
  throw new Error(message)
}

// return type never
function failExec() {
  return error('Something failed')
}

// function returing never must have unreacable endpoint
function infiniteLoop(): never {
  while (true) {
  }
}

// object -> non-primitive type
declare function create(o: object | null): void

create({ obj: 0 })
create(null)

// create(42) -> fail
// create('dasdsa') -> fail
// create(undefined) -> fail

// Type assertions
// way 1
let someValue: any = 'dasdsad'
let strLength: number = (<string>someValue).length

// way 2
strLength = (someValue as string).length
