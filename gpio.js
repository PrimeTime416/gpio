var Gpio = require('onoff').Gpio;
//Setup GIOP input 'even numbers' and output 'odd numbers'
var led4 = new Gpio(4,'out','none',true);
var led6 = new Gpio(6,'out','none',false);
var button = new Gpio(5,'in','both',false);

button.watch(function(err, value){
    if(err){
        //throw err;
        console.log('snap! error: ' + err );
        throw err;
    };

console.log('Button Value: ' + value);
//value = !(value);
console.log('Button Value: ' + Number(value));
led4.writeSync(Number(!value));
led6.writeSync(Number(value));
});

process.on('SIGINT', function(){
    led4.unexport();
    led6.unexport();
    button.unexport();
    console.log('GPIO Unexport Completed');
});




