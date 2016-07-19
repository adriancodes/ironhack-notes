// Callback
function shout()  {
  console.log("Shout shout, let it all out!")
}

setTimeout(shout, 1000);


function sleepCount(seconds) {
  console.log(`It's been ${seconds} seconds`);
}
function sleep(seconds, callback) {
  var timer = seconds * 1000;
  setTimeout(function(timer) {callback(timer)}, timer)
}

sleep(10, sleepCount)
