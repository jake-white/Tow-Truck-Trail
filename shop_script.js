//shop_script.js
//allows the purchase of water bottles and energy drinks to decrease exhaustion

$( document ).ready(function() {
    displayValues();
});

var water = function() {
    if(getMoney() >= 4) {
        console.log(getMoney());
        increaseMoney(-4);
        exhaustionDown();
    }
    displayValues();
}
var energy = function() {
    if(getMoney() >= 6) {
        increaseMoney(-6);
        exhaustionDown();
        exhaustionDown();
    }
    displayValues();
}