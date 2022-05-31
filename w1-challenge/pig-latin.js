//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

const args = process.argv.slice(2);

const pigLatin = function (string) {
  let array = [];

  //Split string into an array of characters
  //From "Pig Latin" to ['P', 'i', 'g', 'L', 'a', 't', 'i', 'n']
  let characterArray = string.split('');
  console.log(characterArray);

  //loop thru string backwards
  for (let i = characterArray.length - 1; i >= 0; i--) {
    array.push(characterArray[i]);
  }

  //turn [ 'n', 'i', 't', 'a', 'L', 'g', 'i', 'P' ] to nitaLgiP
  return array.join('');
};

//loop thru all args character to reverse it
for (let i of args) {
  console.log(pigLatin(i));
}
