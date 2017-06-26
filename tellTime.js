var HOUR = 8; 
var MINUTE = 50;
var PERIOD = "AM";
var messageM = "<p>It's almost 9 in the moring</p>";
var messageE = "<p>It's just after 7 in the evening</p>";
var morning;
var evening;
function morningTime(){
    morning = true;
    evening = false;
    if (morning == true){
        HOUR = 8;
        MINUTE = 50;
        PERIOD = "AM";
    }
    var tickTock = [HOUR, MINUTE, PERIOD];
    return document.write(messageM + "<p>" + tickTock + "</p>");
};
function eveningTime(){
    evening = true; 
    morning = false;
    if (evening == true){
        HOUR = 7;
        MINUTE = 15;
        PERIOD = "PM";
    }
    var tickTock = [HOUR, MINUTE, PERIOD];
    return document.write(messageE + "<p>" + tickTock + "</p>");
};

function tellTime (){
    morningTime();
}
tellTime();