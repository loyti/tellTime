var HOUR = [];
var MINUTE = []];
var PERIOD = ["AM", "PM"];
var morning = boolean;
var evening = boolean;
var messageM = "<p>It's almost 9 in the moring</p>";
var messageE = "<p>It's just after 7 in the evening</p>";
var tickTock = [HOUR, MINUTE, PERIOD];

function morningTime(){
    if (morning == true){
        HOUR = 8;
        MINUTE = 50;
        PERIOD = "AM";
    }
    return document.write(messageM + tickTock);
};
function eveningTime(){
    if (evening == true){
        HOUR = 7;
        MINUTE = 15;
        PERIOD = "PM";
    }
    return document.write(messageE + tickTock);
};

function tellTime (){
    morning = true;
    for( var i = 0; i < 2; i++){
        morningTime();
    };
    
}
tellTime();