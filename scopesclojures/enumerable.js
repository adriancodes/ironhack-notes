'use strict'
var coll = [1, 15, 27, 4, 35, 46];

for (var i = 0; i < coll.length; i++) {
  console.log(coll[i]);
}

coll.forEach(function(value, index, arr) {
  console.log(`index: ${index} value: ${value}`)
})

coll.map(function(item) {
  console.log(item + 3);
});

var filtered = coll.filter(function(item){
  return item % 2 === 0;
})
console.log(filtered);

var reduced = coll.reduce(function(previousValue, currentValue, currentIndex){
  console.log(`previousValue: ${previousValue} currentValue: ${currentValue} currentIndex:  ${currentIndex}`);
  console.log(`Total: ${previousValue + currentValue}`);
  return previousValue + currentValue;
});
console.log(reduced);
