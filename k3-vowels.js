// In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
//================================================================================
const numberOfVowels = function (data) {
  let counter = 0;
  for (let letter of data) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      counter++;
    }
  }
  return counter;
};

console.log(numberOfVowels('orange')); //3
console.log(numberOfVowels('lighthouse labs')); //5
console.log(numberOfVowels('aeiou')); //5
console.log(numberOfVowels('my name is ann bui')); //6
