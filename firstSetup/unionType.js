function combine(input1, input2, target) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && target === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(30, 27, 'as-number'));
console.log(combine('Lu', 'Hai', 'as-number'));
console.log(combine('Lu', 'Hai', 'as-text'));
function add(num1, num2) {
    return num1 + num2;
}
var addValue = add;
console.log(addValue(10, 20));
//callbacl
function addAndHandle(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
function logData(num) {
    console.log(num);
}
addAndHandle(2, 3, logData);
function doubleMoney(money) {
    return function totalMoney(rate) {
        return money + money * rate;
    };
}
console.log(doubleMoney(doubleMoney(100)(0.15))(0.1));
