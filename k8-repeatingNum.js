//The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. The first will be the value to repeat, the second will be the amount of times to repeat that value.
//================================================================================

const repeatNumbers = function (data) {
  let result = [];

  for (let r = 0; r < data.length; r++) {
    for (let c = 0; c < data[r][1]; c++) {
      result.push(data[r][0]);
    }
  }
  return result.toString();
};

console.log(repeatNumbers([[1, 10]])); //1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); //11, 222

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); //10101010, 343434343434, 9292
