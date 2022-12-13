//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

const runningSum1 = (arrOfNum) => {
  let currentSum = 0;
  return arrOfNum.map((num) => (currentSum += num));
};

const runningSum2 = (arrOfNum) => {
  let currentSum = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    currentSum = currentSum + arrOfNum[i];
    arrOfNum[i] = currentSum;
  }
  return arrOfNum;
};

const runningSum = (arrOfNum) => {
  //this line checks to make sure we're not working with an empty array and returns if the array of number is empty
  if (arrOfNum.length == 0) return [];
  //we then create an array to hold our output called sumArray

  const sumArray = [];
  //We start by getting the first item in our array since we're sure the array is not empty.
  let currentSum = arrOfNum[0];

  //The first item will always remain the same for all solutions so we add it as the first item of our output array sumArray
  sumArray.push(currentSum);

  //Loop through the remaining array (starting at index 1), storing the sums in the currentSum variable
  for (let i = 1; i < arrOfNum.length; i++) {
    currentSum += arrOfNum[i];
    //and adding it to the sumArray
    sumArray.push(currentSum);
  }
  //Finally, return sumArray.
  return sumArray;
};

//===TEST CODE===
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10] Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5] Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
