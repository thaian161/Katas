// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
//====================================================================

const urlEncode = function (text) {
  text = text.trim();
  let result = '';
  for (let letter of text) {
    if (letter === ' ') {
      result = result + '%20';
    } else {
      result = result + letter;
    }
  }
  return result;
};

// const urlEncode = function (text) {
//   text = text.trim();
//   let encode = '';
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === ' ') {
//       encode = encode + '%20';
//     } else {
//       encode = encode + text[i];
//     }
//   }
//   return encode;
// };

console.log(urlEncode('Lighthouse Labs'));
//Lighthouse%20Labs

console.log(urlEncode(' Lighthouse Labs '));
//Lighthouse%20Labs

console.log(urlEncode('blue is greener than purple for sure'));
//blue%20is%20greener%20than%20purple%20for%20sure
