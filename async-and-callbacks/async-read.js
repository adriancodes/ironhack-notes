'use strict'
var fs = require('fs')

var l = (data) => console.log(data);

fs.readFile("werther.txt", function(err, content){
  l(content);  
});

fs.readFile("kafka.txt", function(err, content){
  l(content); 
});

fs.readFile("cicero.txt", function(err, content){
  l(content);  
});
