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
let mySelect = document.getElementById("mySelect");
let myBtn = document.getElementById("myButton"); 

let currentCategory = "none"; 

const makeCall = (url) => {
    fetch(url)
        .then((response) => {
            ;
            return response.json()
        })
        .then((result) => {
            result.forEach((cat) => {
                mySelect.innerHTML += `<option value="${cat}">${cat}</option>`
            }) 
        })
        .catch((error) => {
            console.log(error);
        })
}
makeCall(API_CAT);

const callJoke = (url) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result)
            printJokeEl.innerHTML = `${result.value}`; 
        })
        .catch((error) => {
            console.log(error);
        })
}

mySelect.addEventListener("change", () => {
    currentCategory = mySelect.value; 
})

myBtn.addEventListener("click", () => {
    if (currentCategory === "none") {
        callJoke("https://api.chucknorris.io/jokes/random");
        return // ako kategorijata ne e odbranana povikuva random joke i zavrshuva 
    }
    callJoke(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`); // ako ima kategorija povikuva joke so kategorijata
})


