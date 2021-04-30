"use strict"

// As a developer, make at least three commits.

// As a user, Destination randomly generated for my day trip.

let dest = [];

let destSel = ['Miami, FL','Long Beach, CA','Outer Banks, NC','Bahamas'];

let random = Math.floor(Math.random()*destSel.length);

let ranDest = destSel[random];
console.log(ranDest); // Random destination successful!

function genRanDest(destSel){


    for( let i=0; i<destSel.length; i++){
        
        dest.push(Math.floor(Math.random().toString()));
        console.log(dest);
    }
    return dest;
}

genRanDest(destSel);
// As a user, Restaurant to be randomly generated for my day trip.

// As a user, Mode of transportation to be randomly generated for my day trip.

// As a user, Form of entertainment to be randomly generated for my day trip.

// As a user, I want to be able to randomly re-select a dest, rest, trans, and/or ent
// If I don't like one or more of those things.

// As a user, I want to be able to confirm that my day trip is "complete" 
// once I like all of the random selections.

// As a user, I want to display my completed trip in the console.

// As a developer, I want all of my functions to have a single resposibility.
// Remember, each function should do just one thing!