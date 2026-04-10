const numbers = [1,2,3,4,5]

const double_all_numbers = numbers.map(number => number * 2);
console.log(double_all_numbers)

const evens = numbers.filter(number => number % 2 === 0); // % gives the remainder of the division operation
console.log(evens)

// filter and map together
const result = numbers.filter(n => n % 2 === 0).map(n => n * 10);
console.log(result);