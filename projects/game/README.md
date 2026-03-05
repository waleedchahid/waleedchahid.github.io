# Wizards Game!

# Setting

This game takes place at the Pentagon city mall and the Capital One Arena.
Scattered along are a metro station, and come places to get some food before
the game. The player will start by exiting a bus at pentagon city mall.

## Map

```mermaid
graph TD;
    bus(((Bus)))-->Food Court;
    Food Court-->Shopping;
    Food Court-->Chipotle;
    Food Court-->Panda Express;
    Panda Express-->Boba Tea Shop;
    Chipotle--> Boba Tea Shop;
    Boba Tea Shop-->Metro Station;
    Chipotle-->Metro Station;
    Panda Express-->Metro Station;
    Metro Station-->Train;
    Train-->Capital One Arena;
    Capital One Arena-->Seat;
    Capital One Arena-->Merch Shop;
    Capital One Arena-->Snack Shop;
```

The player starts on the bus, and is then directed to the Food Court. they can
explore, but they must eventually make their way to their seat before tip off.
