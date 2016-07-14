// Closures

// Closures

var add = function(value1)  {
  return function(value2) {
    return value1 + value2
  };
}

var incrementBy3 = add(3)
l(incrementBy3(10));



// // Example 1

// function ticketBuilder(transport) {
//   var passengerNumber = 0;
//   return function(name){
//     passengerNumber++;
//     console.log("Welcome, " + name + ". Here is your ticket for the " + transport +
//                 " You are passenger #" + passengerNumber + ".");
//   };
// }


// var getPlainTicket = ticketBuilder("plane");
// var getTrainTicket = ticketBuilder("train");

// getPlainTicket("John Smith");
// getTrainTicket("Jane Smith");

// // Example 2

// function checkInPassenger(name, customersArray){
//   var passengerChecked;
//   customersArray.forEach(function(value, index) {
//     if (value === name) {
//       passengerChecked = function() {
//         console.log("Hi, " + name + ". You're passenger #" + (index + 1));
//       };
//     };
//   });
//   return passengerChecked;
// }


// var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
// var counterCheckIn = checkInPassenger("Gede", flightToBali);
// counterCheckIn();


// // Example 3

// function checkInPassenger(name, customersArray){
//   customersArray.forEach(function(value, index) {
//     if (customersArray[index] === name) {
//       return function() {
//         console.log("Hi, " + name + ". You're passenger #" + (index + 1));
//       };
//     };
//   });
// }


// var flightToBali = ["Wayan", "Putu", "Gede", "Ni Luh", "Nyoman"];
// var counterCheckIn1 = checkInPassenger("Gede", flightToBali);
// counterCheckIn1();

// console.log(declaredLater);
// var declaredLater = "Now it's defined!";

// isItHoisted()
// function isItHoisted(){
//   console.log("Yes!");
// }

// isNotHoisted();

// var isNotHoisted = function() {
//   console.log("Yes!");
// }

// var isNotHoisted; 
// isNotHoisted();

// isNotHoisted = function() {
//   console.log("Yes!");
// }
