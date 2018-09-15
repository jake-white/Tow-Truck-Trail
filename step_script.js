//step_script.js
//determines information to display for the current step, such as events and bill

$( document ).ready(function() {
    normalStep();
    displayValues();
});

var money = function() {
    var output = "";
    var amount = Math.floor(15 + Math.random() * 60); // $15-60 find
    increaseMoney(amount);
    output += "<img src='assets/coin.png' width=100px>";
    output += "<p>You found $" + amount + " on the street!</p><br/>";
    output += 
    `<audio id='jingle' controls = 'controls'>
    <source src = 'assets/jingle.mp3' type = 'audio/mp3' />
    <a href = "whooHoo.mp3">WooHoo</a>
    </audio> `;
    $('#step_event').html(output);
}

var normalStep = function() {
    var output = "";
    var amount = Math.floor(2 + (Math.random()*5)); // $2-7 increase per turn
    increaseBill(amount);
    output+= "Your bill is now $" + getBill() + ".";
    if(getExhaustion() >= ExhaustLevel.length - 1) {
        output+="\n<b>You try to walk further but you're too tired!</b> Sounds like it's time to visit a shop for a refreshment.";
    }
    else {
        var randInt = Math.floor(Math.random() * events.length);
        events[randInt]();
        moveForward();
        output+="\nYour exhaustion increases but you manage to walk another block. <b>You are now at " + getStreetText() + " street.</b>";
        exhaustionUp();
    }
    $("#step").html(output);
}

var bus = function() {
    $("#step_event").text("You manage to catch a bus instead of walk, so you conserve your stamina this block!");
    exhaustionDown();
}

var nothing = function(){}

var events = [money, bus, nothing]
