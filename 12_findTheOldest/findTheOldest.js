const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function (people) {
  let oldestAge = 0;
  let oldestPerson;
  let currentAge;
  people.reduce((sum, person, index) => {
    // property name must be a string, can't use ! operator
    if ("yearOfDeath" in person === false) {
      let currentYear = new Date().getFullYear();
      currentAge = (currentYear - person.yearOfBirth);
    } else {
      currentAge = (person.yearOfDeath - person.yearOfBirth);
    }
    if (currentAge > oldestAge) {
      oldestAge = currentAge;
      oldestPerson = people[index];
    }
  }, 0)
  return oldestPerson;
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
