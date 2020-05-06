type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmplyee = Admin & Employee;

const e1: ElevatedEmplyee = {
  name: 'Max',
  privileges: ['admin', 'root'],
  startDate: new Date()
}

type UnkownEmployee = Admin | Employee
function printEmployeeInfomation (epl: UnkownEmployee) {
  console.log(epl.name)

  if ('privileges' in epl) {
    console.log(epl.privileges)
  }

  if ('startDate' in epl) {
    console.log(epl.startDate)
  }
}

printEmployeeInfomation(e1)
printEmployeeInfomation({ name: 'Max', startDate: new Date() })

type Combinable = number | string

// function overload
function addNum(a: number, b: number): number
function addNum(a: string, b: string): string
function addNum(a: number, b: string): string
function addNum(a: string, b: number): string

function addNum(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const fullName = addNum('Dinh ', 'Hai')
fullName.split(' ') // -> it work due to overload function

const total25 = addNum(2, 5)
total25 * 100 // -> it work due to overload function

class Car {
  drive() {
    console.log('Driving.....')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck.....')
  }

  loadCargo(amout: number) {
    console.log(`Loading cargo ...${amout}`)
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100)
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed;

  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break;
    case 'horse':
      speed = animal.runningSpeed
      break;
  }

  console.log(`Moving with speed: ${speed}`)
}

moveAnimal({ type: 'bird', flyingSpeed: 200 })
moveAnimal({ type: 'horse', runningSpeed: 500 })

// const userInputElement = <HTMLInputElement>document.querySelector('input');
// userInputElement.value = 'dasdas'

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a character'
}

// Optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {
    title: 'CEO',
    description: 'My own company'
  },
  // description: {
  //   id: 1
  // }
}

console.log(fetchedUserData.job.title);
// console.log(fetchedUserData?.description?.id);
