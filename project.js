"use strict"

// As a developer, make at least three commits.

// Day Trip Generator

// As a user, Destination randomly generated for my day trip.

let dest = [];

let destSel = ['Miami FL','Long Beach CA','Outer Banks NC','Bahamas'];

// let random = Math.floor(Math.random()*destSel.length);

// let ranDest = destSel[random];
// console.log(ranDest); // Random destination successful! 

// Now create a function to generate 
//and push random destination to dest[]; 
//and return dest to be used again later!

function genRanDest(ranDest){
    let random = Math.floor(Math.random()*destSel.length);
    ranDest = destSel[random];
    dest.push(ranDest);
    return dest;
}

// Function for randomly generated destination complete!

// As a user, Restaurant to be randomly generated for my day trip.
let rest = [];

let restSel = [" Outback", " Apple Bees", " Ruby Tuesdays", " Red Lobster"];

function genRanRest(ranRest){
    let random = Math.floor(Math.random()*restSel.length);
    ranRest = restSel[random];
    rest.push(ranRest);
    return rest;
}
// Function for randomly generated restaurant complete!

// As a user, Mode of transportation to be randomly generated for my day trip.
let trans = [];

let tranSel = [" Plane", " Train", " Vehicle", " Boat"];

function genRanTran(ranTran){
    let random = Math.floor(Math.random()*tranSel.length);
    ranTran = tranSel[random];
    trans.push(ranTran);
    return trans;
}
// Function for randomly generated transportation complete!

// As a user, Form of entertainment to be randomly generated for my day trip.
let ent = [];
let entSel = [" Live Music", " Theater", " Football Game", " Netflix"];

function genRanEnt(ranEnt){
    let random = Math.floor(Math.random()*entSel.length);
    ranEnt = entSel[random];
    ent.push(ranEnt);
    return ent;
}
// Function for randomly generated entertainment complete!

// Create a function to call each "genRan" function to generate our "Day trip"
// Create a new array to push all the random "selections" into
// console new array 

let dayTrip = [];
dayTrip[0] = dest
dayTrip[1] = rest
dayTrip[2] = trans
dayTrip[3] = ent

function genRanDayTrip(){
    genRanDest();
    genRanRest();
    genRanTran();
    genRanEnt();
    dayTrip.push(dest,rest,trans,ent);
    console.log(dayTrip.toString());// add a space at the start of strings in selections

}

genRanDayTrip();// Function calling all randomly generated selections for day trip complete!

// As a user, I want to be able to randomly re-select a dest, rest, trans, and/or ent
// If I don't like one or more of those things.

//prompt user "if" they would like to "re-selct" any of the selections
let userinput = prompt("Would you like to change any of the selections?");

switch(userinput){
    case "yes":
        let input = prompt("Which selection would you like to change? (destination, restaurant, transpotation, entertainment)");
        
        switch(input){
            case "destination":
                let user = prompt("Choose one of the following! (Miami FL, Long Beach CA, Outer Banks NC, Bahamas)");
                dayTrip[0].push(user);
                prompt(userinput);
                break;
            case "restaurant":
                let user = prompt("Choose one of the following! (Outback, Apple Bees, Ruby Tuesdays, Red Lobster");
                dayTrip[1].push(user);
                prompt(userinput);
                break;
            case "transportation":
                let user = prompt("Choose one of the following! (Plane, Train, Vehicle, Boat");
                dayTrip[2].push(user);
                prompt(userinput);
                break;
            case "entertainment":
                let user = prompt("Choose one of the following! (Live Music, Theater, Football Game, Netflix)");
                dayTrip[3].push(user);
                prompt(userinput);
                break;
            default:
                alert("Please enter one of the following: destination, restaurant, tranportation or entertainment!");
                prompt(input);
        }

    case "no":

    default:
        alert("Try again!");
        break;
}

// As a user, I want to be able to confirm that my day trip is "complete" 
// once I like all of the random selections.

// As a user, I want to display my completed trip in the console.

// As a developer, I want all of my functions to have a single resposibility.
// Remember, each function should do just one thing!