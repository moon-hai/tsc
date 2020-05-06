interface LabledValue {
  label: string
  a?: string
}

function printLabel(labelObject: LabledValue) {
  console.log(labelObject.label)
}

let myObj: LabledValue = {
  label: 'dasdsa'
}

printLabel(myObj)

// optional
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // if you want to add extra property
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

console.log(createSquare({}))
console.log(createSquare({ color: 'black' }))
console.log(createSquare({ colour: 'black', abc: 'dasdsa' }))

//readonly
interface Point {
  readonly x: number
  readonly y: number
}

let p: Point = {
  x: 10,
  y: 20
}
// p.x = 5 -> error

// Function type
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(src: string, sub: string): boolean {
  return src.search(sub) > 1
}

// Indexable Types
interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ['Bob', 'Fred']
let myStr: string = myArray[0]

// Class type
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date()

  setTime(d: Date) {
    this.currentTime = d
  }

  constructor(h: number, m: number) {}
}

//Instance && Class
interface ClockContructor {
  new (hour: number, minute: number)
}

class NewClock implements ClockContructor {
  currentTime: Date
  constructor(h: number, m: number) {}
}
