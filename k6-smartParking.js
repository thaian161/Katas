/*
There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

    Regular cars can only park in R spots.
    Small cars can park in R or S spots.
    Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are wr           itten in both lower-case and upper-case. 

    Upper-case letters = spot is AVAILABLE
    Lower-case letters = spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.
====================================================================*/

const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      let spot = spots[y][x];
      if (vehicle === 'regular') {
        if (spot === 'R') {
          return [x, y];
        }
      } else if (vehicle === 'small') {
        if (spot === 'R' || spot === 'S') {
          return [x, y];
        }
      } else if (vehicle === 'motorcycle') {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [x, y];
        }
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      //0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S'], // 5
    ],
    'regular'
  )
); //[4, 0]

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M'],
    ],
    'small'
  )
); //false

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S'],
    ],
    'motorcycle'
  )
); //[3, 1]

/* Hint: https://www.youtube.com/watch?v=PU4xyyg2uGA&ab_channel=LighthouseLabs */
