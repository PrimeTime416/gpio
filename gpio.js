var Gpio = require('onoff').Gpio;
//Setup GIOP input 'even numbers' and output 'odd numbers'
var led4 = new Gpio(4,'out');
var led6 = new Gpio(6,'out');
var button = new Gpio(5,'in','both');

button.watch(function(err, value){
    if(err){
        throw err;
    };
led4.writeSync(value);
led6.writeSync(value);
});

process.on('SIGINT', function(){
    led4.unexport();
    led6.unexport();
    button.unexport();
    console.log('GPIO Unexport Completed');
});

