var Gpio = require('onoff').Gpio;
//Setup GIOP input 'even numbers' and output 'odd numbers'
var led4 = new Gpio(4,'out','none',true);
var led6 = new Gpio(6,'out','none',false);


function callBlink(){

var ledBlink = setInterval(function(){
    var value = led4.readSync();
    value = Number(!value);
    led4.writeSync(value);
    console.log('Led Value: ' + value);
    },250);

setTimeout(function(){
    console.log('Blink Done!');
    clearInterval(ledBlink);
},10000);

process.on('SIGINT', function(){
    led4.unexport();
    //led6.unexport();
    //button.unexport();
    console.log('GPIO Unexport Completed');
});
}

callBlink();




