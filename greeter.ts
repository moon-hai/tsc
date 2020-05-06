// interface Person {
//   firstName: string,
//   lastName: string
// }

// function greeter(person: Person) {
//   return 'Hello ' + person.firstName + ' ' + person.lastName;
// }

// const user = {
//   firstName: 'Dinh',
//   lastName: 'Hai'
// }
// document.body.textContent = greeter(user);

class Student {
  fullName: string

  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

const user = new Student('Lu', 'Dinh', 'Hai')
console.log(user)

console.log(greeter(user))

interface Person {
  firstName: string,
  lastName: string
}

function greeter (person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName
}
