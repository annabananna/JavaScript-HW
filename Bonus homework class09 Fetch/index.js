// Tell me a joke about Chuck Norris.
// Make an entertainment page where the user will be able to read a random joke for Chuck Norris.
// The data about the jokes will be acquired from an external API for which a documentation will be provided.

// Requirements:

// An input which will be of a type drop-down. This drop-down will contain all the categories of jokes out of which the user can choose one.

// A button that will make the call and generate a random joke of the chosen category.

// If the user does not pick a category, then on click, you should generate a random joke of a random category.
// An output element where the joke will be presented
// Documentation

// Documentation about the Chuck Norris API calls:
// https://api.chucknorris.io/

// API for generating a random joke:
// https://api.chucknorris.io/jokes/random

// API for generating a random joke of a specific category:
// https://api.chucknorris.io/jokes/random?category={category}

// Api from where you can retrieve all the cathegories:
// https://api.chucknorris.io/jokes/categories


let API_CAT = "https://api.chucknorris.io/jokes/categories";
let api_randomJoke = "https://api.chucknorris.io/jokes/random?category={category}";

let printDropDown = document.getElementById("printDropDown");
let printJokeEl = document.getElementById("printJokeEl");

let categories = [];

const makeCall = (url) => {

    fetch(url)
     .then((response) => {
        console.log(response);
        return response.json()
     })
     .then((result) => {
        console.log(result);
        createDropDown(result, printDropDown);
        categories.push(result);
     })
     .catch((error) => {
        console.log(error);
     })

}

makeCall(API_CAT);
console.log("categories: ", categories);

const createDropDown = (category, element) => {
    element.innerHTML = "";

    // urlToBeCalled = `https://api.chucknorris.io/jokes/random?category=${val()}`;

    let mySelect = document.getElementById("mySelect");

    function val(){
        d = mySelect.value;
        return d;
        console.log(mySelect.value);
    }

    urlToBeCalled = `https://api.chucknorris.io/jokes/random?category=${val()}`;

    console.log("category: ", category);
    element.innerHTML += `
    <label for="category">Choose a category: </label> 
    <select name="category" id="mySelect" onchange="${val()}"></select>
    <button value="${category}" onclick="callJoke(${urlToBeCalled})">Generate random joke</button>
    `;

    category.forEach((cat) => {
        
        console.log(cat);
        mySelect.insertAdjacentHTML(`beforeend` , `<option value="${cat}">${cat}</option>`);
    })

    // for(let cat of category){
    //     mySelect.insertAdjacentHTML(`beforeend` , `<option value="${cat}">${cat}</option>`);
    // }

}

const callJoke = (url) => {
    // url =  `https://api.chucknorris.io/jokes/random?category=${categories}`;
    // url = "https://api.chucknorris.io/jokes/random?category={}";

        fetch(url)
        .then((response) => {
           console.log(response);
           return response.json();

        })
        .then((result) => {
           console.log(result);
           printJoke(result, printJokeEl);
        })
        .catch((error) => {
           console.log(error);
        })

}

const printJoke = (joke, element) => {
    element.innerHTML = "";
        element.innerHTML += `${joke.value}`;
    }




