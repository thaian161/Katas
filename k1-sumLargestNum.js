// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together
//===========================================================================================

const sumLargestNumbers = function (data) {
  newData = data.sort((a, b) => b - a);
  return newData[0] + newData[1];
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
