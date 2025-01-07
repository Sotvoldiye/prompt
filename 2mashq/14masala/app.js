const result = []
const fizzBuzzFunc = function (number) {
  for(let i = 1; i <= number; i++) {
  if (i % 3 ==0 && i % 5 == 0) {
    result.push('Fizz');
  } else if (i % 5 ==0) {
    result.push('Buzz');
    } else if(i % 3 == 0){
      result.push('FizzBuzz');
  } else {
    result.push(i);
  }
}}

fizzBuzzFunc(25)
console.log(result)

