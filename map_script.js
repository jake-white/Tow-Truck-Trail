//map_script.js
//displays current street and objective

$( document ).ready(function() {
    $('#street').text("The towing company is on 1st street. You are on " + getStreetText() + " street.");
});