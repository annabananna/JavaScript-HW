console.log("connected")

// EXERCISE #1: Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!
let boolean = "true";
let number = 23;
let string = "Javascript"
let array = ["Favorite", "Movies", "last", "year"]
console.log(boolean)
console.log(number)
console.log(array)
let object = {
    width: 300,
    height: 300,
    weight: 100,
    isItObject: true
}
console.log(object)

let invalidNumber = 1 * "Hiii";
console.log(invalidNumber)

let boolean1 = 3 > 2
console.log(boolean1)


// EXERCISE 2
// Read 5 variables as user input and then print each of the variable types in the console.

// let firstVariableNumber = Number(prompt("First Variable"));
// console.log(typeof ${firstVariableNumber})

// let secondVariableString = String(prompt("Second variable"))
// console.log(typeof ${secondVariableString})

function printInConsole(){
}
console.log(typeof `${printInConsole}`);

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(typeof `${person}`)

let Ana = {
    employeed: true,
    chocolateLover: "yes",
    age:33
}
console.log(typeof `${Ana}`)

// EXERCISE 3
// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.

// Make sure you use a function!

// Ex. Input: 20 ==> Output: 14


// let secondNumber = 13;
// // let firstNumber = Number(prompt("PLease enter a number"))

// function differenceBetweenTwoNumbers(){
//     if(firstNumber < secondNumber){
//         let difference = firstNumber - secondNumber;
//         return `The difference is: ${difference}`
//     }else if(firstNumber > secondNumber){
//         let difference1 = (firstNumber - secondNumber)*2;
//         return `The result is: ${difference1}`
//     }
// }

// let firstResult = differenceBetweenTwoNumbers();
// console.log(firstResult)


// EXERCISE 4
// Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user
// if a negative number is inserted!

// Make sure you use a function!

// Ex. Input1: 20
// Input2: 80
// Output: 80 is closer to 100


// let firstInput = Number(prompt("Please enter the first number"))
// let secondInput = Number(prompt("Please enter the first number"))

// function closerToHundread(){
//     if(firstInput < 0 || secondInput < 0){
//         alert("You have entered a negative number")
//     }else {
//         if(Math.abs(firstInput - 100) < Math.abs(secondInput - 100)){
//             return `Closer number to 100 is ${firstInput}`
//         }
//         else if(Math.abs(firstInput - 100) > Math.abs(secondInput - 100)){
//             return `Closer number to 100 is ${secondInput}`
//         }
//         // if(firstInput)
//     }
// }

// let finalResult = closerToHundread();
// console.log(finalResult)


// EXERCISE 5
// Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. 
// He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total.
//  Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.

// let salary = 1000;
// let rent = 375;
// let bills = 250;

// alert (`Bob has a salary of ${salary} euros, 
// he has expences of ${rent + bills} euros, and he has left ${salary - (rent + bills)} euros for the rest of the month`)


// EXERCISE 6
// One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively.
// The professor told the students that for passing the first semester they must have average of 8.
// The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!


function studentPassing(gradesArray){
    let average = "";
    let sum = 0;
    for(i = 0; i < gradesArray.length; i++){
        sum += gradesArray[i];
    }
    average = sum / gradesArray.length;
    if(average >= 8){
        alert(`You have passed`)
    } else{
        alert(`You have failed`)
    }
}

// let studentGrades = [10, 6, 8, 9, 6];
// let passedOrNot = studentPassing(studentGrades);
let studentGrades1 = [10, 6, 8, 9, 10];
let passedOrNot1 = studentPassing(studentGrades1);


// EXERCISE 7
// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). 
// Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.


let arrayInput = ["input", false, true, 23, "Anaaaa", undefined, [], NaN, "test", "Javascript"]
function removeFalsyValues(inputArray){
    let newArray = [];
    for(i = 0; i < inputArray.length; i++){
        if(!!inputArray[i]){
            newArray.push(inputArray[i])
        }
    }
    return newArray;
}
let output = removeFalsyValues(arrayInput)
console.log(output)

// if (array[i] !== "" && array[i] !== false && array[i] !== undefined && array[i] !== NaN){
//     trutyValues.push(array[i])
//   }

// EXERCISE 8
// Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!
// ex: storyTeller(who, what, when);
// In the function, retrieve the current values of the form input elements, make a story from them, 
// and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")

let container = document.getElementById("container")
let whoInput = document.getElementById("whoInput")
let whatInput = document.getElementById("whatInput")
let whenInput = document.getElementById("whenInput")
let storyBtn = document.getElementById("storyBtn")

function storyTeller(who, what, when){
    container.innerHTML = "";
    container.innerHTML += `<p> ${who} was reaaly good at ${what} in the ${when} !</p>`
}

storyBtn.addEventListener("click", function(){
    
    storyTeller(whoInput.value, whatInput.value, whenInput.value)
}
)


// EXERCISE 9
// Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. 
// After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. 
// Make sure the user is entering an appropriate values in the fields!
// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added 
// contact as an object (literal or construcotr function its up to you) and add it to an array!

let phoneBookContainer = document.getElementById("phoneBookContainer")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let phoneNumber = document.getElementById("phoneNumber")
let saveBtn = document.getElementById("saveBtn")

function phoneBook(firstNameInput, lastNameInput, phoneNumberInput){

    let theader = '<table>';
    let tFooter = '</table>';
    let traws = "";   
    let tcolumns = "";

    for(let i = 0; i < firstNameInput.length; i++){

        traws += `<tr>`
        tcolumns += `<td>` + `${firstNameInput[i]}` + `${lastNameInput[i]}` + `${phoneNumberInput[i]}` + `</td>`  
        traws += `</tr>`
    }
    container.innerHTML += `${theader}` + `${traws}` + `${tcolumns}` + `${tFooter}`;
}


saveBtn.addEventListener("click", function(){

    let firstName1 = firstName.value;
    let lastName1 = lastName.value;
    let phoneNumber1 = phoneNumber.value;
    phoneBook(firstName.value, lastName.value, phoneNumber.value)
})


// EXERCISE 10
// Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added 
// task that you need to do in an unordered list. Each new todo should be saved into an array.
// Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! 
// Try making the ToDo an object that needs to have two properties: Name and isCompleted properties


// function TODO(todoInput){
//     this.todoInput = todoInput;
// }

// let allTodos = [];













