// Exercise 1
// Make 3 anonymous functions (function expressions)

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative

// BONUS: Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
// It should show the results in the console. Ex: Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative



let digitNumber = (number) => {
    if (typeof number !== 'number') {
        console.log("please enter number")
    } else {
        if (number > 0) {
            let nbDigits = number.toString().length;
            return nbDigits;
        } else {
            //ako brojot e negativen odzemi go minusot od stringot
            let nbDigits = number.toString().length - 1;
            return nbDigits;
        }
    }
}
// console.log(digitNumber(37737));

let evenOrOdd = (number) => {
    if (typeof number !== 'number') {
        console.log("please enter number")
    } else {
        if (number % 2 === 0) {
            console.log(`Number ${number} is even`)
            return `even`
        } else {
            console.log(`Number ${number} is odd`)
            return `odd`
        }
    }
}

// console.log(evenOrOdd(10));
// console.log(evenOrOdd(9))

let positiveOrNegative = (number) => {
    if (typeof number !== 'number') {
        console.log("please enter number")
    } else {
        if (number > 0) {
            console.log(`Number ${number} is positive`)
            return `positive`
        } else {
            console.log(`Number ${number} is negative`)
            return `negative`
        }
    }
}


function returnResults(number) {
    console.log(` ${digitNumber(number)} digits, ${evenOrOdd(number)}, ${positiveOrNegative(number)}`)
}

returnResults(2500)
returnResults(-10011)


// Exercise 2
// Create a function that takes a string and returns the number (count) of vowels (samoglaski) contained within it. 
// (Use anonymous functions/Arrow functions for the implementation)

// Ex: Code: countVowels("Pineapple"); Console: 4 vowels

// BONUS: Provide the input from the HTML, and print the result on the HTML.

let inputText = document.getElementById("inputText");
let myDiv = document.getElementById("myDiv");
let myBtn = document.getElementById("myBtn");

let countVowels = (string) => {
    if(typeof(string) === 'string'){
        let vowels = ["a", "e", "i", "o", "u"]
        let count = 0;
        for(let letter of string.toLowerCase()){
            if(vowels.includes(letter)){
                count++
            }
        }
        return count;
    }
}
console.log(countVowels("anabogdanovska"))

myBtn.addEventListener("click", function(){
    countVowels(inputText.value);
    console.log(countVowels(inputText.value));
    printVowels(myDiv, inputText.value);
})

let printVowels = (element) => {
    element.innerHTML = "";
    element.innerHTML += `
    <h3> ${countVowels(inputText.value)} vowels </h3>
    `
}