
// Iteration 1: Names and Input
console.log ( "I'm ready!");

let hacker1 = "Paulo";
console.log ("the driver's name is ", hacker1);

let hacker2 = "Rick";
console.log ( "the navigator's name is ", hacker2);
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has ", hacker1.length, " characters");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems  that the naviagtor has the longest name, it has ", hacker2.length, " characters");
} else{
    console.log("Wow, you both have equally long names, ", hacker1.length, " characters!");
}

// Iteration 3: Loops


let name = "";
for(let i=0; i< hacker1.length; i++){ 
  name += hacker1[i].toUpperCase()+" ";
}
console.log(name);


let name1 = "";

for (let i = hacker2.length-1; i>=0; i--){
     name1 += hacker2[i];
}
console.log(name1);

let shortestName = 0;

if(hacker1.length > hacker2.length){
    shortestName = hacker2.length;
} else {
    shortestName = hacker1.length;
}

if(hacker1 == hacker2){
    console.log("What?! You both have the same name?");
} else{
    for(let i = 0; i < shortestName; i++){
        if(hacker1.charCodeAt(i) < hacker2[i].charCodeAt(i)){
            console.log("The driver's name goes first.");
            break;
        } else if(hacker1[i].charCodeAt(i) > hacker2[i].charCodeAt(i)){
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
    }
}
