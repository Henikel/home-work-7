function getMaxSalary(salaries) {
  let maxSalary = -Infinity;
  for (let key in salaries) {
    if (salaries[key] > maxSalary) {
      maxSalary = salaries[key];
    }
  }
  return maxSalary === -Infinity ? null : maxSalary;
}

var salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250,
};

var salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50,
};

console.log(getMaxSalary(salaries1));
console.log(getMaxSalary(salaries2));

