let firstDiv = document.getElementsByClassName("aDiv");
let allParagraphs = document.getElementsByTagName("p");
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;
let header3last = lastDiv.getElementsByTagName("h3")[0];
let header1last = lastDiv.getElementsByTagName("h3")[0];
let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;

// Add the word "text" to the text element in the second div
document.querySelector("text").innerText += " text";
// Change the text of the header 1 in the last div
// header3last.innerText = "Text added from JS also";
// header1last.innerText = "Text added from JS";
// Change the text of the header 3 in the last div
// Note:You can't change the HTML


// STUDENT EXERCISE - #2
// WEIGHT CALCULATOR IN CHICKENS
// Want to know how you wiegh in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph


function weightInChickens(weight){

     let newWeight = weight / 2;
     return newWeight;
}

let userInput = parseInt(prompt("What is your weight in kg?"));
let output = weightInChickens(userInput);
console.log("Your weight in chicken is: ", output)

let weightChicken = document.getElementById("result");
result.innerHTML = `You weight of ${userInput} kg in chickens is: ${output}`
console.log(result)


// HOMEWORK PART 1
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let myTitle = document.getElementById("myTitle");
myTitle.innerText += '. It will become even cooler :)'

let paragraph = document.getElementsByClassName("paragraph");
let firstParag = paragraph[0];
console.log(firstParag.innerText)
firstParag.innerText = 'I like this very easy exercise'


let secondParag = paragraph[1];
console.log(secondParag)
secondParag.innerText = "It is becoming boring easy";


let text = document.querySelector("text")
console.log(text.innerText);
text.innerText = "It's about manipulating with DOM";


let script = document.getElementsByTagName("body")[0].lastElementChild;
let lastDiv1 = script.previousElementSibling;
// console.log(lastDiv1)
let divFirstCh = lastDiv1.firstElementChild;
console.log(divFirstCh.innerText)
divFirstCh.innerText = "Let's do it more fun";


let divSecondCh = divFirstCh.nextElementSibling;
console.log(divSecondCh)
divSecondCh.innerText = "Change it this alsooooo";


// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


// let array = [2, 4, 5, 6]

// let doc = document.implementation.createHTMLDocument();
// let p = doc.createElement("p");


// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)








