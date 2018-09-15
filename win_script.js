//win_script.js
//outputs win message and stats

$( document ).ready(function() {
    $("#title").html("Congrats, you got your car back, ending the game with $" + getMoney() + " and a bill of $" + getBill() + ".");
});