//global.js
//set of global functions to manage session variables, mostly

var ExhaustLevel = ["Wide Awake!", "Sweating a little.", "Getting tired.", "Exhausted.", "Basically dead."];
var blockAmount = 11;

var displayValues = function() { //displays session values
    var money = sessionStorage.getItem('money');
    var exhaustion = ExhaustLevel[getExhaustion()];
    var street = getStreetText();
    var bill = getBill();
    $('#money').text("Money: $"+money);
    $('#exhaustion').text("Exhaustion Level: "+exhaustion);
    $('#street').text("You are on " + street + " street.");
    $('#bill').text("Bill: $"+bill);
}

//global functions for getting arithmetic friendly session values

var getMoney = function() {
    return parseInt(sessionStorage.getItem('money'));
}

var getBill = function() {
    return parseInt(sessionStorage.getItem('bill'));
}

var getExhaustion = function() {
    return parseInt(sessionStorage.getItem('exhaustion'));
}

var getStreet = function() {
    return parseInt(sessionStorage.getItem('street'));
}

var getStreetText = function() {
    street = getStreet();
    streetText = "";
    if(street == 3) streetText = "3rd";
    else if(street == 2) streetText = "2nd";
    else if(street == 1) streetText = "1st";
    else streetText = street + "th";
    return streetText;
}

//global functions for changing session values

var increaseMoney = function(value) {
    var money = getMoney();
    sessionStorage.setItem('money', money + value);
}
var increaseBill = function(value) {
    var bill = getBill();
    sessionStorage.setItem('bill', bill + value);
}

var exhaustionUp = function() {
    var exhaustion = getExhaustion();
    if(exhaustion < ExhaustLevel.length) {
        exhaustion++;
        sessionStorage.setItem('exhaustion', exhaustion);
    }
}

var exhaustionDown = function() {
    var exhaustion = getExhaustion();
    if(exhaustion > 0) {
        exhaustion--;
        sessionStorage.setItem('exhaustion', exhaustion);
    }
}

var moveForward = function() {
    var street = getStreet();
    street--;
    sessionStorage.setItem('street', street);
}
