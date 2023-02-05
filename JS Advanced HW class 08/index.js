// Get bordering countries function
// Call the countries API for a country by code.
// Create a function that gets all the neighbours from a country and returns them in console
// When the call to the countires API for a country is made imidietly show the bordering countries in the console
// Example:

// Call -> MKD

// In console:

// Conutry:

// macedonia object

// Neighbours:

// albania object

// greece object

// bulgaria object

// serbia object

// Countries Api Documentations; https://restcountries.com/v3.1/alpha/{code}
// https://restcountries.com/v3.1/alpha/codes=mkd



let API_URL = "https://restcountries.com/v3.1/alpha/codes=mkd";
let API_URL1 = "https://restcountries.com/v3.1/alpha/codes=aut";

let getBorderCountries = (apiUrl) => {
    fetch(apiUrl)
      .then((response) => {
        console.log(response)
        let returnedResponse = response.json();
        return returnedResponse;
      })
      .then((parsedResult) => {
        console.log(parsedResult);
        let country = parsedResult[0].name.common;
        let countryBorders = parsedResult[0].borders;
        console.log("Country: ", country);
        console.log("Neighbours", countryBorders);
      }) 
      .catch((error) => {
        console.log("Error happened: ", error)
      })
      .finally(() => {
        console.log("Finnaly")
      })
}

getBorderCountries(API_URL)
getBorderCountries(API_URL1)