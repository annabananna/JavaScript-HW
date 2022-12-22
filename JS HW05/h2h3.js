// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

// function makeDocument() {
//     let frame = document.getElementById("theFrame");

//     let newHTML = document.getElementById("newHTML");

//     let doc = document.implementation.createHTMLDocument("New Document");
//     let p = doc.createElement("p");
//     p.textContent = "This is a new paragraph.";
// }
// makeDocument()
// let doc = document.implementation.createHTMLDocument();
// let ul = doc.createElement("ul");

// let secondDiv = document.getElementById("second");
// let numbersArray = document.getElementById("numbersArray");
// let inputArray = [2, 4, 5, 6];
// let sum = 0;

// function printNumbersFromArray(array){
//     for(let i = 0; i < array.length; i++){


//     sum += array[i];
//     numbersArray.innerHTML += `<li> ${array[i]} </li>
//     `
// } return sum;
// }

// let summm = printNumbersFromArray(inputArray)
// console.log(summm)
// secondDiv.lastElementChild.innerHTML += `<p>The sum is: ${summm}</p>`
// console.log(secondDiv.lastElementChild)

// function printEquasion(array){

//     let input1 = array[0];
//     let input2 = array[1];
//     let input3 = array[2];
//     let input4 = array[3];
//     let addOperand ="+"   
//     secondDiv.innerHTML += `<p>${input1} ${addOperand} ${input2} ${addOperand} ${input3} ${addOperand} ${input4} =  ${sum}</p>`
// }


// let printEqua = printEquasion(inputArray)
// console.log(printEqua)


// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)


let nameInput = document.getElementById("name");
// let numberOfIngridients = document.getElementById("numberOfIngredients");
let ingredientsInput = document.getElementById("ingredients");
let container = document.getElementById("container");
let todoBtn = document.getElementById("todoBtn");
let addnameBtn = document.getElementById("addnameBtn");
let submitBtn = document.getElementById("submitBtn")
let inputs = document.getElementById("inputs")
let ingridientsInputArray = [];


function addIngridient(ingridientArray, ingridient){
    ingridientArray.push(ingridient)
    console.log(ingridientArray)
}

function printRecipe(ingridients){
    container.innerHTML = "";
    for(let i = 0; i < ingridients.length; i++){
        container.innerHTML += `<li> ${ingridients[i]} </li>`
    }console.log(container.innerHTML)
}

function recipeName(name){
    inputs.innerHTML +=`<h2> ${name} </h2>`
}

todoBtn.addEventListener("click", function(){
    let ingridientsEntered = ingredientsInput.value;
    addIngridient(ingridientsInputArray, ingridientsEntered)
    console.log(ingredientsInput)
})

addnameBtn.addEventListener("click", function(){
    let nameRecipe = nameInput.value;
    recipeName(nameRecipe)
})

submitBtn.addEventListener("click", function(){
  printRecipe(ingridientsInputArray);
}
)













