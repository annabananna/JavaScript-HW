// let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&APPID=2095b65c75e8d13fe9e3b0e095b36936`;


/**
 * CITY-NAME-HERE => Should bethe input's value
 * API-KEY-HERE => Should be the api key we generate
 */

// the f-n to prepare the input data
// the function for clearing the inputs

/**
 * Create a HTML file;
 * 2. Create a JS file;
 * 3. Connect the JS file with the HTML and test it;
 * 4. Create simple input text and button in HTML;
 * 5. Select those element;
 * 6. Create a function that makes API request to the corresponding URL (Use JQuerie's AJAX);
 * 7. Analayse the repsonse, think about what you may use or what needs to be generated;
 * 
 * NOTE: Feel free to use BOOTSTRAP;
 */


// http://openweathermap.org/img/w/ICON-CODE-HERE.png Ex: http://openweathermap.org/img/w/10d.png

let inputText = document.getElementById("inputText");
let buttons = document.getElementsByTagName("button");
let myBtn = buttons[0];
console.log(myBtn);
let myDiv = document.getElementById("myDiv");
let tableToPrint = document.getElementById("tableToPrint");

function weatherForecast(){
    let urlHelper = `https://api.openweathermap.org/data/2.5/forecast?q=${inputText.value}&units=metric&APPID=2095b65c75e8d13fe9e3b0e095b36936`;
    $.ajax({
        url: urlHelper,
        method: "GET",
        success: function(responce){
            console.log(responce);
            console.log("humidity", responce.list[0].main.humidity);
            console.log("current temp", currentTemp(responce.list));
        //    console.log("City Name is", cityName(responce));
        weatherDataObject.cityName = responce.city.name;
        weatherDataObject.feelsLike = responce.list[0].main.feels_like;
        weatherDataObject.description = responce.list[0].weather[0].description;
        weatherDataObject.icon = responce.list[0].weather[0].icon;
        console.log(responce.city.name);
            console.log("feels_like", responce.list[0].main.feels_like);
            console.log("clouds??");
            console.log("avg temp is", avgTemp(responce.list));
            console.log(maxTemp(responce.list));
            console.log(lowTemp(responce.list));
            console.log("avg humidity is", avgHumidity(responce.list));
            console.log("max humidity is", maxHumidity(responce.list));
            console.log("low humidity is", lowHumidity(responce.list));

            // console.log("icon" , responce.list[0].weather[0].icon);
            // console.log("icon url is: ", getIconImage(responce.list));
            // printIcon(myDiv, responce.list[0]);
            getIconImage(responce.list)
            getDesc(responce.list)
            // printIcon(myDiv, responce.list[0])
            printPageOne(myDiv)
            printTable(tableToPrint, responce);
        
        },
        error: function(error){
            console.log(error)
        }
    })
}


myBtn.addEventListener("click", function(){
    weatherForecast()
})

let weatherDataObject = {};
let hourlyDataObject = {};

function currentTemp(response){
    let currentTemp = 0;
    for(let i = 0; i < response.length; i++){
        currentTemp = response[0].main.temp;
        weatherDataObject.currentTemp = currentTemp;
        hourlyDataObject.currentTemp = currentTemp;
    }return weatherDataObject.currentTemp, hourlyDataObject.currentTemp;
}


function avgTemp(response){
    let averageTemp = 0;
    for(let i = 0; i < response.length; i++){
        averageTemp += response[i].main.temp / response.length;
        weatherDataObject.avgTemp = averageTemp;
    }return weatherDataObject.avgTemp;
}

console.log(weatherDataObject);
console.log(hourlyDataObject);

function maxTemp(response){
    let maximumTemp = response[0].main.temp;
    warmestPer = "";
    for(let i = 0; i < response.length; i++){
        if(response[i].main.temp > maximumTemp){
            maximumTemp = response[i].main.temp;
            weatherDataObject.maxTemp = maximumTemp;
            warmestPer = response[i].dt_txt;
            weatherDataObject.warmestPeriod = warmestPer;
        }
    }return weatherDataObject.maxTemp, weatherDataObject.warmestPeriod ;
}

function lowTemp(response){
    let minimumTemp = response[0].main.temp;
    let coldestPer = "";
    for(let i = 0; i < response.length; i++){
        if(response[i].main.temp < minimumTemp){
            minimumTemp = response[i].main.temp;
            weatherDataObject.minTemp = minimumTemp;
            coldestPer = response[i].dt_txt;
            weatherDataObject.coldestPeriod = coldestPer;
        }
    }return weatherDataObject.minTemp, weatherDataObject.coldestPeriod;
}

function avgHumidity(response){
    let averageHum = 0;
    for(let i = 0; i < response.length; i++){
        averageHum += response[i].main.humidity / response.length;
        weatherDataObject.avgHum = averageHum;
    }return weatherDataObject.avgHum;
}

function maxHumidity(response){
    let maxHum = response[0].main.humidity;
    for(let i = 0; i < response.length; i++){
        if(response[i].main.humidity > maxHum){
           maxHum = response[i].main.humidity;
           weatherDataObject.maximumHum = maxHum;
        }
    }return weatherDataObject.maximumHum;
}


function lowHumidity(response){
    let minHum = response[0].main.humidity;
    for(let i = 0; i < response.length; i++){
        if(response[i].main.humidity < minHum){
            minHum = response[i].main.humidity;
            weatherDataObject.minimumHum = minHum;
        }
    }return weatherDataObject.minimumHum;
}

function printPageOne(elementToPrintIn, response){
    elementToPrintIn.innerHTML = "";
    elementToPrintIn.innerHTML += `
    <h1>Weather Forecast</h1>
    <br />
    <h3>City Name: ${weatherDataObject.cityName}</h3>
    <h3>Current temp: ${weatherDataObject.currentTemp} Feels Like: ${weatherDataObject.feelsLike} </h3>
    <h3>${weatherDataObject.description}: <img src = "http://openweathermap.org/img/w/${weatherDataObject.icon}.png"></h3> 

    <h4>Max temp: ${weatherDataObject.maxTemp}   Max humidity: ${weatherDataObject.maximumHum}</h4>
    <h4>Avg temp: ${weatherDataObject.avgTemp}   Avg humidity: ${weatherDataObject.avgHum}</h4>
    <h4>Low temp: ${weatherDataObject.minTemp}   Low humidity: ${weatherDataObject.minimumHum}</h4>
    <br />
    <h3>Warmest time of the period: ${weatherDataObject.warmestPeriod} </h3>
    <h3>Coldest time of the period: ${weatherDataObject.coldestPeriod} </h3>
    `
}

// PAGE 2


function getIconImage(response){
    let iconUrl = "";
    for(let i = 0; i < response.length; i++){
        iconUrl = `http://openweathermap.org/img/w/${response[i].weather[0].icon}.png`;
        // console.log(iconUrl);
    }return iconUrl;
}

// function printIcon(elementToPrintIn, urlIcon){
//     elementToPrintIn.innerHTML = "";
//     for(let i = 0; i < urlIcon.length; i++){
//         elementToPrintIn.innerHTML += `<li><img src =
//         "${getIconImage(urlIcon[i])}"></li>`
// }}

// function printTable(elementToPrintIn, responce) {
//     elementToPrintIn.innerText = "";
//     let tbody = ""; 
//     let columns = 6;
//     let rows = 0;
//     for (let i = 0; i < responce.length; i++) {
//         elementToPrintIn.innerHTML += `
//         <table border="1" cellspacing="10" cellpadding="8">
//             <thead>
//                 <tr>
//                     <th>Icon </th>
//                     <td>Description </td>
//                     <td>Date </td>
//                     <td>Temperature </td>
//                     <td>Humidity </td>
//                     <td>Wind speed </td>
//                 </tr>
//             </thead>
//             ${tbody} 
//         </table>
//         `
//     }
// } 

// printTable(tableToPrint);
function getDesc(responce){
    let desc = "";
    for(let i = 0; i < responce.length; i++){
        desc = responce[i].weather[0].description;
        hourlyDataObject.descr = desc;
    } return hourlyDataObject.descr;
}
console.log(hourlyDataObject);

function printTable(elementToPrintIn, responce){
    elementToPrintIn.innerText = "";
    for(let i = 0; i < responce.length; i++){
        elementToPrintIn.innerText += `
        <table>
        <tr>${weatherDataObject.description1.responce[i]}</tr>
        </table>
        `
    }
}



