
//Student exercise #2

function celsiusToFh(){
    let userInput = prompt("Please enter the temperature in celsius");
    let FH = (Number(userInput) * 1.8) + 32;
    return FH;
}

let farenheit = celsiusToFh();
console.log("The temperature in Fh is: ", farenheit);


function farenheitToCelsius(){
    let userInput = prompt("Please enter the temperature in farenheit")
    let celsius = (5/9) * (Number(userInput) - 32);
    return celsius;
}

let celsius = farenheitToCelsius();
console.log("The temperature in celsius is: ", celsius)

//Student exercise #3

function calculateAge(birthYear){

    let years = currentY - birthYear;
    return years;
}
// First way
let currentY = 2022;
let userYears = calculateAge(1989,currentY);
console.log(`You are ${userYears} years old`);

//Second way
const d = new Date();
let currentY1 = d.getFullYear();
let userYears1 = calculateAge(1988,currentY1);
console.log(`You are ${userYears1} years old`);

//Third way
function calculateAge2(){

    let birthY = prompt("What is your birth year");

    const d2 = new Date();
    let currentY2 = d2.getFullYear();

    let years2 = currentY2 - birthY;

    if(birthY === null || birthY === ""){
        alert("Please enter valid year");
    }
    if(Number(birthY) > currentY2){
        alert ("Wrong input, the year you entered is in future")
        return
    }
    else{
    return years2;
    }
}

let userYears2 = calculateAge2();
console.log(`You are ${userYears2} years old`);


// HW#1
/*
HOMEWORK PART 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console.
 Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

function type(userInput){
    console.log(`The type of ${userInput} is: `, typeof userInput)
}
let x = 25;
type(x)
let y = false;
type(y)
let z = "Bob Bobski"
type(z)
let t = undefined;
type(t)
let array = ["Ana", "Bogdanovska", "33"];
type(array)



// HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well

function age(){
    let userInputAge = prompt("Enter D to calculate Dogs age and H to calculate human age").toUpperCase()

    if(userInputAge === "D"){
        let inputHumanAge = prompt("Please enter how old is your dog in human age")
        let dogAge = inputHumanAge * 7;
        console.log("Calculated dog age is: ",dogAge)
    }
    else if(userInputAge === "H"){
        let inputDogAge = prompt("Please enter how old is your dog in dog's age");
        let humanAge = inputDogAge / 7;
        console.log("Calculated human age is: ",humanAge)
    }
    else{
        console.log("The value you have entered is not valid.")
    }
}
age()

// HOMEWORK PART 3
// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

function atm(){
    let userConto = 65000;
    let x = "Check my money status";
    let y = "Withdraw cash";
    let input = prompt("What do you want to do").toLowerCase();
    if(input == "x"){
        console.log(`You have available ${userConto} denars`)
    }
    else if(input == "y"){
        let input2 = prompt("Please enter the money amount you would like to withdraw")
        if(input2 > 65000){
            console.log("Not enought money")
        } else if(input2 <= 65000){
            let moneyLeft = userConto - input2;
            console.log(`You have withdrawn ${input2} denars and you have left ${moneyLeft} denars in your bank account`)
        }
    }
    else{
        console.log("Your request is not valid")
    }
}
atm();




