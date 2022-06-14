var Button1 = document.getElementById("btn1");
var clickTimes = document.getElementById("clicktimes");
var counter = 0;
window.onload = function init() {

    Button1.oninput = function(event) {

        counter++;
        clickTimes.innerHTML = counter;

    };

};