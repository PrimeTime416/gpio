var Gpio = require('onoff').Gpio;
//Setup GIOP input 'even numbers' and output 'odd numbers'
var led4 = new Gpio(4,'out','none',true);
var led6 = new Gpio(6,'out','none',false);


function callBlink(led, hz, timeB){
    var timeB = timeB || 5000;
    var hz = hz || 250; 
    var ledRW = {};
    ledRW = led;


var ledBlink = setInterval(function(){
    var value = ledRW.readSync();
    value = Number(!value);
    ledRW.writeSync(value);
    console.log('Led Value: ' + value + ' ' + hz);
    },hz);

setTimeout(function(){
    console.log('Blink Done!' + ' ' + timeB);
    clearInterval(ledBlink);
},timeB);

process.on('SIGINT', function(led){
    var led = led.unexport();
    //led6.unexport();
    //button.unexport();
    console.log('GPIO Unexport Completed');
});
}

callBlink(led4,250,10000);




