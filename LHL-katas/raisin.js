const raisinAlarm = function (cookie) {
  //loop thru it for of
  for (let item of cookie) {
    if (item === '🍇') {
      return 'Raisin Alert';
    }
  }
  return 'All Good';
};
//=== TEST CODE ===
console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫'])); //Raisin alert!
console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇'])); //Raisin alert!
console.log(raisinAlarm(['🍫', '🍫', '🍫'])); //All good!
