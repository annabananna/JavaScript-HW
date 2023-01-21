// Exercise 1
// Create a function that makes api call to the url: "https://swapi.dev/api/people"
// After you retrieve the data print the first character in the HTML.
// Example:
// Character Name: Luke Skywalker
// Character Height: 172
// Character BirthYear: 19BBY

let getBtn = document.getElementById("getBtn");
let printElement = document.getElementById("printElement");

function getSwapiPeople(){
    $.ajax({
        url: "https://swapi.dev/api/people",
        method: "GET",
        success: function(responce){
            console.log(responce);
            printFirstCharacter(printElement, responce.results);
        },
        
        error: function(error){
            console.error(error);
        },
    })
}

getBtn.addEventListener("click", function(){
    getSwapiPeople()
}
)

function printFirstCharacter(element, characterArray){
    element.innerHTML = "";
    element.innerHTML += `
    <h3>Character Name: ${characterArray[0].name}</h3>
    <h3>Character Height: ${characterArray[0].height}</h3>
    <h3>Character Mass: ${characterArray[0].mass}</h3>
    <h3>Character Birth Year: ${characterArray[0].birth_year}</h3>
    `
}


// Exercise 2
// Create a function that makes api call to the url "https://swapi.dev/api/planets"
// After the data is retrived print the planets on the HTML

let planetBtn = document.getElementById("planetBtn");
let myDiv = document.getElementById("myDiv");

function getPlanets(){
    $.ajax({
        url: "https://swapi.dev/api/planets",
        method: "GET",
        success: function(responce){
            console.log(responce);
            printPlanets(myDiv, responce.results);
        },
        error: function(error){
            console.log(error);
        },
    })
}

planetBtn.addEventListener("click", function(){
    getPlanets()
})

function printPlanets(elementToPrintIn, planetsArray){
    console.log(planetsArray);
    elementToPrintIn.innerHTML = "";
    for(let i = 0; i < planetsArray.length; i++){
        elementToPrintIn.innerHTML += `
        <h3>Planet name: ${planetsArray[i].name} </h3>
        `
    }
}







