/*Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have:
   A capacity of at least 20, and be 
   A school or community centre.
===============================================*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

chooseStations = (stations) => {
  const result = [];

  for (const element of stations) {
    if (
      (element[1] >= 20 && element[2] === 'school') ||
      element[2] === 'community centre'
    ) {
      result.push(element[0]);
    }
  }
  return result;
};

console.log(chooseStations(stations));
//['Bright Lights Elementary', 'Moose Mountain Community Centre']

/*Hint: https://www.youtube.com/watch?v=16UXovpvyf8&ab_channel=LighthouseLabs */

/*Breakdown in a better explaination
function chooseStations(stations) {
  const goodStation = [];

  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStation.push(station[0]);
      }
    }
  }
  return goodStation;
}
*/
