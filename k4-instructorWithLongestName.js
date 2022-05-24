// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
//======================================================================

const instructorWithLongestName = function (instructors) {
  let longestName = instructors[0].name;
  for (let i = 0; i < instructors.length; i++) {
    if (longestName.length < instructors[i].name.length) {
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
); //{name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
); //{name: "Domascus", course: "Web"}
