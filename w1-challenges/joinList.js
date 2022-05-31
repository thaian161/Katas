/* Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

const joinList = function (array) {
  // DOnt forget the "invitation", you cannot just show up!!!
  let result = '';

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    const spacer = i === array.length - 1 ? '' : ', ';
    result += array[i] + spacer;
  }
  return result;
};

// Test / Driver Code below...
const conceptList = [
  'gists',
  'types',
  'operators',
  'iteration',
  'problem solving',
];
const concepts = joinList(conceptList);

console.log(`Today I learned about ${concepts}.`);
