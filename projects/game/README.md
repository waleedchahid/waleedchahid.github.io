# Wizards Game!

# Setting

This game takes place at the Pentagon city mall and the Capital One Arena.
Scattered along are a metro station, and come places to get some food before
the game. The player will start by exiting a bus at pentagon city mall.

## Map

```mermaid
graph TD;
    bus(((Bus)))-->Food_Court;
    Food_Court-->Shopping;
    Food_Court-->Chipotle;
    Food_Court-->Panda_Express;
    Panda_Express-->Boba_Tea_Shop;
    Chipotle--> Boba_Tea_Shop;
    Boba_Tea_Shop-->Metro_Station;
    Chipotle-->Metro_Station;
    Panda_Express-->Metro_Station;
    Metro_Station-->Train;
    Train-->Capital_One_Arena;
    Capital_One_Arena-->Seat;
    Capital_One_Arena-->Merch_Shop;
    Capital_One_Arena-->Snack_Shop;
    Seat-->Merch_Shop;
    Sea--Snack_Shop;
    Merch_Shop-->Snack_Shop;
```

The player starts on the bus, and is then directed to the Food Court. they can
explore, but they must eventually make their way to their seat before tip off.
