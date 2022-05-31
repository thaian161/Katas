//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

const args = process.argv.slice(2);

const pigLatin = function (string) {
  let result = '';

  for (let i = 1; i < string.length; i++) {
    result += string[i];
  }
  result += string[0] + 'ay';
  return result;
};

//loop thru all args character to reverse it
let finalResult = '';
for (let i = 0; i < args.length; i++) {
  const spacer = i === args.length - 1 ? '' : ' ';
  finalResult += pigLatin(args[i]) + spacer;
}
console.log(finalResult);
//console.log(pigLatin(args));
