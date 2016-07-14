// Prototype Examples
var foo = new Function();


console.log(foo.__proto__);
console.log(foo.__proto__.__proto__);
console.log(foo.__proto__.__proto__.__proto__);

// foo.prototype.hello = function(name) {
//   console.log("Hi, " + name + "!");
// }

// foo.goodbye = function(name) {
//   console.log("Goodbye, " + name);
// }

// try {
//   foo.hello("steve");  
// } catch(err) {
//   console.log(err);
// }

// foo.goodbye("steve");


// var bar = new foo;

// bar.hello("Sally");

// try {
//   bar.goodbye("Sally");  
// } catch(err) {
//   console.log(err);
// }

// bar.constructor.goodbye("Sally");


// var exampleArray = [2, -5, 10, 5, 4, -10, 0];

// function process(data) {
//   var positions = [];
//   data.forEach(function(a, i){
//     data.forEach(function(b, j){
//       if ((a + b)  === 0) {
//         positions.push(i + "," + b);
//       } 
//     });
//   });
//   return positions;
// }

// var results = process(exampleArray);
// console.log(results);

// function betterProcess(data) {
//   var positions = [];
//   data.forEach(function(a, i){
//     if (a + Math.abs(a) === 0) {
//         positions.push(i + "," + a);
//       } 
//   });
//   return positions;
// }

// var results = betterProcess(exampleArray);
// console.log(results);

// Exercise

// var numbers = '80:70:90:100';

// function averageColon(numbers) {
//   if (arguments.length === 0) {
//     return arguments.length;
//   }
//   var numbersArray = numbers.split(/[:,&]/).map(Number);
//   var total = numbersArray.reduce(function(a, b) {return a + b}, 0);
//   return total / numbersArray.length; 
// }

// console.log(averageColon(numbers) === 85);
// console.log(averageColon() === 0);
// console.log(averageColon('80&70&90&100') === 85);
// console.log(averageColon('80:70&90:100') === 85);






