'use strict'

var nets = require('nets');
var l = (data) => console.log(data)

nets("werther.txt", function(error, response, content){
  if(error) {
    l("Hey something went wrong! See:" + error);
  } else {
    l(content.toString());
  }
});

nets("kafka.txt", function(error, response, content){
  if(error) {
    l("Hey something went wrong! See:" + error);
  } else {
    l(content.toString());
  }
});

nets("cicero.txt", function(error, response, content){
  if(error) {
    l("Hey something went wrong! See:" + error);
  } else {
    l(content.toString());
  }
});

// var callBackFunction = function(error, someVar) {};
// nets("something.txt", function(error, someVar) {
  
// });
