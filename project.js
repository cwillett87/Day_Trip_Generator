"use strict"

// As a developer, make at least three commits.

// Day Trip Generator

// As a user, Destination randomly generated for my day trip.

let dest = [];
dest[0]= " Destination: ";
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
rest[0]=" Restaurant: ";
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
trans[0]=" Transportation: ";
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
ent[0]=" Entertainment: ";
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
    // dayTrip.push(dest,rest,trans,ent);
    // console.log(dayTrip.toString());// add a space at the start of strings in selections

}

genRanDayTrip();// Function calling all randomly generated selections for day trip complete!

// As a user, I want to be able to randomly re-select a dest, rest, trans, and/or ent
// If I don't like one or more of those things.

//prompt user "if" they would like to "re-selct" any of the selections

let userinput;
let userInput;
chTrip();
function chTrip(userinput){
    userinput = prompt("Would you like to change the selections? " + dayTrip.toString() + " (yes or no)");
if(userinput === "yes"){
    
    let userOne = prompt("please enter the destination of your choice!");
        dest[1]=(userOne);
                
        let usertwo = prompt("please enter the restaurant of your choice!");
        rest[1]=(usertwo);

            let userthree = prompt("please enter the transportation of your choice!");
            trans[1]=(userthree);
                
            let userfour = prompt("please enter the entertainment of your choice!");
            ent[1]=(userfour);

            confirm();

}              
    else if(userinput=== "no"){
        confirm();
            
    }
}
// As a user, I want to be able to confirm that my day trip is "complete" 
// once I like all of the random selections.
function confirm(userInput){
    userInput= prompt("Are you sure you're satisfied with your trip?" + dayTrip.toString() + "  (yes or no)");
    if(userInput==="yes"){
        console.log(dayTrip.toString());// As a user, I want to display my completed trip in the console.
    }
    else if(userInput==="no"){
        chTrip();
    }

}
// As a developer, I want all of my functions to have a single resposibility.
// Remember, each function should do just one thing!