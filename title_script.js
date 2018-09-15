$( document ).ready(function() {
    console.log("Setting session variables.");
    sessionStorage.setItem('money', 100);
    sessionStorage.setItem('exhaustion', 0);
    sessionStorage.setItem('street', 11);
    sessionStorage.removeItem('location');
    sessionStorage.setItem('bill', 200);
});