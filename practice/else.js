"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

console.log("test");

/*
let yourName = prompt("What is your name?");

addToBody("Hi " + yourName)
*/

let temperature = prompt("What is the temperature outside?")
temperature =  Number(temperature)
if(temperature <= 32) {
    addToBody("Its freezing! Stay inside!");
} else if(temperature >=80) {
    addToBody("Beach day!");
} else {
    addToBody("Go on a walk chud");
}

addToBody("Have a nice day!");
