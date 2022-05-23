// For this kata, we'll be adding only the numbers in the array which match the given condition.
//======================================================================

const conditionalSum = function (values, condition) {
  let result = 0;

  for (let value of values) {
    if (condition === 'even' && value % 2 === 0) {
      result += value;
    } else if (condition === 'odd' && value % 2 !== 0) {
      result += value;
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even')); //6
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd')); //9
console.log(conditionalSum([13, 88, 12, 44, 99], 'even')); //144
console.log(conditionalSum([], 'odd')); // 0
