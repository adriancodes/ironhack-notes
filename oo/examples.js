var l = function(data) {console.log(data)}; 

var foo = {bar: "Hello from Object Literal"}
l(foo);

var foo = new Object()
foo.bar = "Hello from new Object";
l(foo);

var foo = Object.create({},
                        {bar:
                         {value: "Hello from Object create",
                          configurable:true,
                          writable:true}});
l(foo.bar);

// Car Exercise

var Car = function(model, noise) {
  this.model = model;
  this.noise = noise;
}
Car.prototype.wheels = 4;

Car.prototype.makeNoise = function() {
  console.log("The " + this.model + " goes " + this.noise);
}

var bmw = new Car("M3", "Vroom");
var tesla = new Car("Model S", "Whirrrr");
var toyota = new Car("Prius", "MeepMeep");


bmw.makeNoise();
tesla.makeNoise();
toyota.makeNoise();


