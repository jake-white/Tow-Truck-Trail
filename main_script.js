//main_script.js
//simply displays current stats and determines win condition

$( document ).ready(function() {
    displayValues();
    if(getStreet() <= 1) {
        if(getMoney() < getBill()) {
            $('#options').html("<a href='index.html'>You don't have the money. Better luck next time!</a>");
        }
        else {
            $('#options').html("<a href='win.html'><b>You got your car back!</b></a>");
        }
    }
});