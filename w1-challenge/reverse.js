const args = process.argv.slice(2);

const reverseStr = function (string) {
  let array = [];

  //Split string into an array of characters
  //From "thaian"
  //To [ 'T', 'h', 'a', 'i', 'a', 'n' ]
  let characterArray = string.split('');

  for (let i = characterArray.length - 1; i >= 0; i--) {
    //console.log(characterArray[i]);
    array.push(characterArray[i]);
  }

  //turn [ 'n', 'a', 'i', 'a', 'h', 'T' ] to naiahT
  return array.join('');
};

//loop thru all args character to reverse it
for (let i of args) {
  console.log(reverseStr(i));
}

//console.log(reverseStr('Thaian'));
//console.log(reverseStr(args[0]));

// //Easy Way using reverse() and join()
// function reverseStringEasy(string) {
//   return string.split('').reverse().join('');
// }
// //console.log(reverseStringEasy('Thai An'));
