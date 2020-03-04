//reducer method executes function provided on each element of array and produces single output. It takes four values.
//Accumulator, current value, current index, source array. Reducers return value is assigned to accumulator whose value is remembered
//across each iteration and ultimately becomes final resulting value.

let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);
console.log(sum);

//Remove duplicate items using reduce
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let unique = myArray.reduce((accumulator, currentValue) => {
    if(accumulator.indexOf(currentValue) === -1){
        accumulator.push(currentValue)
    }
    return accumulator;
}, []);
console.log(unique);

//doubled positive numbers
const numbers = [-5, 6, 2, 0,];
const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
    if(currentValue > 0){
        const doubled = currentValue * 2
        accumulator.push(doubled);
    }
    return accumulator;
}, []);
console.log(doubledPositiveNumbers);


//Reverse a string
var reverseString = function(s) {
    return s.reduce((rev, char) => char+rev, "").split("");
  }
  console.log(reverseString(['h', 'e', 'l', 'l', 'o']));