let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let hours = 0;
let minutes = 0;

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
    print("\nWhere do you want to go next?");
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

function Shopping() {
    clear();
    print("\nYou are shopping around the mall.");
    print("\nWhere do you want to go?");
    print("\n\tFood_Court");

    function processInput(input) {
        if (input.toLowerCase === "food_court") {
            Food_Court();
        } else {
            stayHere();
            waitThenCall(Shopping);
        }
    }

    waitForInput(processInput);
}

function Chipotle() {
    clear();
    print("\nThat was some delectible chipotle.");
    print("\nWhere do you want to go now?");
    print("\n/t Boba_Tea_Shop");
    print("\n\tMetro_Station");

    function processInput(input) {
        input = input.toLowerCase();
        
        if (input === "boba_tea_shop") {
           Boba_Tea_Shop();
       }
       else if (input === "metro_station") {
           Metro_Station();
       }
       else {
           stayHere();
           waitThenCall(Chipotle);
       }
   }

   waitForInput(processInput);
}

function Panda_Express() {
   clear();
   print("\nYou are at Panda Express.");
   print("\nWhere do you want to go?");
   print("\n\tBoba_Tea_Shop");
   print("\n\tMetro_Station");

   function processInput(input){
       input = input.toLowerCase();

       if (input === "boba_tea_shop") {
           Boba_Tea_Shop();
       }
       else if (input === "metro_station") {
           Metro_Station();
       }
       else {
           stayHere();
           waitThenCall(Panda_Express);
       }
   }

   waitForInput(processInput);
}

function Boba_Tea_Shop() {
   clear();
   print("\nYou are at the Boba Tea Shop.");
   print("\nWhere do you want to go?");
   print("\n\tMetro_Station");

   function processInput(input){
       if (input.toLowerCase() === "metro_station") {
           Metro_Station();
       } else {
           stayHere();
           waitThenCall(Boba_Tea_Shop);
       }
   }

   waitForInput(processInput);
}

function Metro_Station() {
   clear();
   print("\nYou are at the Metro Station.");
   print("\nWhere do you want to go?");
   print("\n\tTrain");

   function processInput(input){
       if (input.toLowerCase() === "train") {
           Train();
       } else {
           stayHere();
           waitThenCall(Metro_Station);
       }
   }

   waitForInput(processInput);
}

function Train() {
   clear();
   print("\nYou are riding the Train.");
   print("\nWhere do you want to go?");
   print("\n\tCapital_One_Arena");

   function processInput(input){
       if (input.toLowerCase() === "capital_one_arena") {
           Capital_One_Arena();
       } else {
           stayHere();
           waitThenCall(Train);
       }
   }

   waitForInput(processInput);
}

function Capital_One_Arena() {
   clear();
   print("\nYou arrive at Capital One Arena.");
   print("\nWhere do you want to go?");
   print("\n\tSeat");
   print("\n\tMerch_Shop");
   print("\n\tSnack_Shop");

   function processInput(input){
       input = input.toLowerCase();

       if (input === "seat") {
           Seat();
       }
       else if (input === "merch_shop") {
           Merch_Shop();
       }
       else if (input === "snack_shop") {
           Snack_Shop();
       }
       else {
           stayHere();
           waitThenCall(Capital_One_Arena);
       }
   }

   waitForInput(processInput);
}

function Seat() {
   clear();
   print("\nYou are sitting in your seat watching the game.");
   print("\nWhere do you want to go?");
   print("\n\tMerch_Shop");
   print("\n\tSnack_Shop");

   function processInput(input){
       input = input.toLowerCase();

       if (input === "merch_shop") {
           Merch_Shop();
       }
       else if (input === "snack_shop") {
           Snack_Shop();
       }
       else {
           stayHere();
           waitThenCall(Seat);
       }
   }

   waitForInput(processInput);
}

function Merch_Shop() {
   clear();
   print("\nYou are at the Merch Shop.");
   print("\nWhere do you want to go?");
   print("\n\tSnack_Shop");

   function processInput(input){
       if (input.toLowerCase() === "snack_shop") {
           Snack_Shop();
       } else {
           stayHere();
           waitThenCall(Merch_Shop);
       }
   }

   waitForInput(processInput);
}

function Snack_Shop() {
   clear();
   print("\nYou are at the Snack Shop.");
   print("\nWhere do you want to go?");
   print("\n\tSeat");

   function processInput(input){
       if (input.toLowerCase() === "seat") {
           Seat();
       } else {
           stayHere();
           waitThenCall(Snack_Shop);
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
