const talkingCalendar = function (date) {
  let arrayOfDate = date.split('/');
  //[ '2017', '12', '02' ]
  for (const element of arrayOfDate) {
    console.log(element);
  }
};

console.log(talkingCalendar('2017/12/02')); //December 2nd, 2017
console.log(talkingCalendar('2007/11/11')); //November 11th, 2007
console.log(talkingCalendar('1987/08/24')); //August 24th, 1987
