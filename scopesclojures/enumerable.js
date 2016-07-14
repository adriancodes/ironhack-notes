'use strict'
var coll = [1, 15, 27, 4, 35, 46];
var l = (data) => console.log(data)


// for (var i = 0; i < coll.length; i++) {
//   l(coll[i]);
// }

// coll.forEach(function(value, index, arr) {
//   console.log(`index: ${index} value: ${value}`)
// })

// coll.map(function(item) {
//   console.log(item + 3);
// });

// var filtered = coll.filter(function(item){
//   return item % 2 === 0;
// })
// console.log(filtered);

// var reduced = coll.reduce(function(previousValue, currentValue, currentIndex){
//   console.log(`previousValue: ${previousValue} currentValue: ${currentValue} currentIndex:  ${currentIndex}`);
//   console.log(`Total: ${previousValue + currentValue}`);
//   return previousValue + currentValue;
// });
// console.log(reduced);

// // Recursion

// var counter = 10;
// while(counter > 0) {
//   console.log(counter--);
// }


// var countdown = function(value) {
//   if (value === 0) {
//     return value;
//   } else {
//     console.log(value);
//     return countdown(value - 1);
//   }
// };
// countdown(10);

// Factorial Example
// Example: 4! is shorthand for 4 x 3 x 2 x 1
// n! = n × (n−1)!

// var factorial = function(number) {
//   if (number <= 0) { 
//     return 1;
//   } else { 
//     return (number * factorial(number - 1));
//   }
// };
// console.log(factorial(6));
