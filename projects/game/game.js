let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let hours = 0;
let minutes = 0;
let currentLocation = "Bus";

//If you need, add any "helper" functions here


//Make one function for each location
function Bus() {
    clear();
    print("\nYou are on the bus heading to Pentagon City Mall.");
    print("\nWhere do you want to go next?");
    print("\n\tFood_Court");
    
    function processInput(input){
        if (input.toLowerCase() === "food_court") {
            Food_Court();
        } else {
            stayHere();
            waitThenCall(Bus);
        }
    }
    waitForInput(processInput);
}

function Food_Court() {
    clear();
    print("\nYou are in the Food Court");
    print("\nWhere do you want to go next?")?
    print("\n\tShopping");
    print("\n\tChipotle");
    print("\n\tPanda_Express");
    
    function processInput(input){
        if (input.toLowerCase() === "shopping") {
            Shopping();
        } else if (input.toLowerCase() === "chipotle") {
            Chipotle();
        } else if (input.toLowerCase() === "panda_express") {
            Panda_Express();
        } else {
            stayHere();
            waitThenCall(Food_Court);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            Bus();
    }
    waitForInput(processInput);
}
