var Gpio = require('onoff').Gpio;
//Setup GIOP input 'even numbers' and output 'odd numbers'
var led4 = new Gpio(4,'out');
var led6 = new Gpio(6,'out');
var button = new Gpio(5,'in','both');

button.watch(function(err, value){
led.writeSync(value);
});

