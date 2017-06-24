var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function tellTime (tickTock, morning, evening){
    morning = true;
    evening = false;
    messageM = "<p>It's almost 9 in the moring</p>";
    messageE = "<p>It's just after 7 in the evening</p>";
    tickTock = [HOUR, MINUTE, PERIOD];
    for ( var i = 0; i < tickTock.length; i++){
        if (morning == true){
            document.write(messageM);
        }
    }
}
tellTime();