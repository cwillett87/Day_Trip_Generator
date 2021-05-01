"use strict"

// As a developer, make at least three commits.

// Day Trip Generator

// As a user, Destination randomly generated for my day trip.

let dest = [];
dest[0]= " Destination: ";


let destSel = ['Miami FL','Long Beach CA','Outer Banks NC','Bahamas','Richmond VA','Dallas TX','HollyWood CA'];

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
    dest[1]= ranDest;
    return dest;
}

// Function for randomly generated destination complete!

// As a user, Restaurant to be randomly generated for my day trip.
let rest = [];
rest[0]=" Restaurant: ";
let restSel = [" Outback", " Apple Bees", " Ruby Tuesdays", " Red Lobster"," Olive Garden"," Chines Takeout"," Popa Johm's"];

function genRanRest(ranRest){
    let random = Math.floor(Math.random()*restSel.length);
    ranRest = restSel[random];
    rest.push(ranRest);
    rest[1]=ranRest;
    return rest;
}
// Function for randomly generated restaurant complete!

// As a user, Mode of transportation to be randomly generated for my day trip.
let trans = [];
trans[0]=" Transportation: ";
let tranSel = [" Plane", " Train", " Vehicle", " Boat"," Skateboard"," Kayak"," On foot"];

function genRanTran(ranTran){
    let random = Math.floor(Math.random()*tranSel.length);
    ranTran = tranSel[random];
    trans.push(ranTran);
    trans[1]=ranTran;
    return trans;
}
// Function for randomly generated transportation complete!

// As a user, Form of entertainment to be randomly generated for my day trip.
let ent = [];
ent[0]=" Entertainment: ";
let entSel = [" Live Music", " Theater", " Football Game", " Netflix"," Surfing"," Zip Linning"," Dance Club"];

function genRanEnt(ranEnt){
    let random = Math.floor(Math.random()*entSel.length);
    ranEnt = entSel[random];
    ent.push(ranEnt);
    ent[1]=ranEnt;
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
confirm();
// Function re-generating selections
let regendest;
function reGenDest(regendest){
    regendest = prompt("Would you like to randomly generate this selection? (yes or no)");
    if(regendest==="yes"){
        dest=genRanDest();//Setting array to "new" random selection
        dest.splice(2);//Splicing out "old" selection
    }
    else if(regendest==="no"){
        chDest();
    }
    
}
let regenrest;
function reGenRest(regenrest){
    regenrest = prompt("Would you like to randomly generate this selection? (yes or no)");
    if(regenrest==="yes"){
        
        rest=genRanRest();
        rest.splice(2);
    }
    else if(regenrest==="no"){
        chRest();
    }
}
let regentran;
function reGenTran(regentran){
    regentran = prompt("Would you like to randomly generate this selection? (yes or no)");
    if(regentran==="yes"){
        
        trans=genRanTran();
        trans.splice(2);
    }
    else if(regentran==="no"){
        chTran();
    }
}
let regenent;
function reGenEnt(regenent){
    regenent = prompt("Would you like to randomly generate this selection? (yes or no)");
    if(regenent==="yes"){
        
        ent=genRanEnt();
        ent.splice(2);
    }
    else if(regenent==="no"){
        chEnt();
    }
}

let userOne;
function chDest(userOne){// Function giving the user the option to manually input selection
    userOne = prompt("please enter the destination of your choice!");
    dest[1]=userOne;// Setting user input at new index of array
    dest.splice(2);// Splicing out "old" selections
}

let usertwo;
function chRest(usertwo){
    usertwo = prompt("please enter the restaurant of your choice!");
        rest[1]=(usertwo);
        rest.splice(2);
}

let userthree;
function chTran(userthree){
    userthree = prompt("please enter the transportation of your choice!");
    trans[1]=(userthree);
    trans.splice(2);
}     
      
let userfour;
function chEnt(userfour){
    userfour = prompt("please enter the entertainment of your choice!");
    ent[1]=(userfour);
    ent.splice(2);
}

let change;
function chSel(change){//Function prompting user to enter a selection to change
    change=prompt("Enter which selection to change: (destination, restaurant, transportation, entertainment)");

    if(change=="destination"){
        reGenDest();
    }

    if(change==="restaurant"){
        reGenRest();
    }

    if(change==="transportation"){
        reGenTran();
    }

    if(change==="entertainment"){
        reGenEnt();
    }
    else{
        change=prompt("Enter which selection to change: (destination, restaurant, transportation, entertainment)");
    }
    confirm();
}

// As a user, I want to be able to confirm that my day trip is "complete" 
// once I like all of the random selections.
function confirm(userInput){
    userInput= prompt("Are you satisfied with your trip?" + dayTrip.toString() + "  (yes or no)");
    if(userInput==="yes"){
        console.log(dayTrip.toString());// As a user, I want to display my completed trip in the console.
    }
    else if(userInput==="no"){
        chSel();
    }

}
// As a developer, I want all of my functions to have a single resposibility.
// Remember, each function should do just one thing!