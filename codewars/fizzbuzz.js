/*
DESCRIPTION:
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
*/

const fizzBuzz = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3===0) {
      result.push('fizz');
    } else if (i % 5===0) {
      result.push('buzz');
    } else {
      result.push(i);
    }
  }
  return console.log(result);
};

fizzBuzz(10);

// for (let i = 1; i < 101;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)