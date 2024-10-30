
/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/



/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/

//<script src="Javascript.js"></script>

/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/



//your code here 

console.log("Hello world");
const apples = 10 + 7;
console.log(apples + 3);

let berry = 20;
berry -= 5;
console.log(berry);

const Name= "Bertil"
console.log(Name);

const number= 69;

const print=false

const matliste = [
    "strawberries", 
    "potatos", 
    "milk"];

matliste.forEach(element => {
    
    
    console.log(element)
    
});



/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/



//your code here

//Hej svejs 

/*
rffref
frferf
werg
rgg
rgge
*/

let bananas = 10;

console.log(bananas  === 10);

let pudding = 20;
console.log (pudding > 0 );

if  (bananas > 0) {
    console.log("bananas is eaten");


}



/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/




let userName = "Name";


let userAge = 18;


let userIsLoggedIn = true;


let userIsBlocked = false;


let goToPage = "";



//your code here


if (userAge>= 18 && userName && (userIsBlocked===false)) {

console.log("User can enter.");
userIsLoggedIn = true;

userIsLoggedIn = true;
userIsBlocked = false;
goToPage = "/home";


}

else {
    console.log("Error: You cannot log in.");
}

/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:
const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/




const userMale = false;

//your code here

const variable = userMale ? "Mr." : "Mrs.";


if (userMale = true)

    







