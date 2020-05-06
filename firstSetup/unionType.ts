type Combiable = string | number
type CombiableDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combiable,
  input2: Combiable,
  target: CombiableDescriptor
) {
  let result

  if (typeof input1 === 'number' && typeof input2 === 'number' && target === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

console.log(combine(30, 27, 'as-number'))
console.log(combine('Lu', 'Hai', 'as-number'))
console.log(combine('Lu', 'Hai', 'as-text'))


function add(num1: number, num2: number): number {
  return num1 + num2
}

let addValue: Function = add
console.log(addValue(10, 20))

//callbacl

function addAndHandle(num1: number, num2: number, callback: (num: number) => void) {
  let result = num1 + num2
  callback(result)
}

function logData(num: number) {
  console.log(num)
}

addAndHandle(2, 3, logData)

// function doubleMoney(money) {
//   return function totalMoney(rate) {
//     return money + money * rate
//   }
// }
// console.log(doubleMoney(doubleMoney(100)(0.15))(0.1))
