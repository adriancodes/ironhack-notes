'use strict'
var nets = require('nets')

var l = (data) => console.log(data);

nets("werther.txt", function(err, resp, content){
  l(content.toString());  
});

nets("kafka.txt", function(err, resp, content){
  l(content.toString());  
});

nets("cicero.txt", function(err, resp, content){
  l(content.toString());  
});
