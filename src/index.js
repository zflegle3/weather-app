import "./style.css"
console.log("hello");


const weatherData =  {
    city: "",
    weather: "",
    tempNow: "",
    tempFeel: "",
    windSpeed: "",
    windDirection: "",
    humidity: "",
    pressure: "",
    tempUnit: "",
    pressUnit: "",
    windUnit: "",
    switchTempUnit: function() {

        if (this.tempUnit === "F") {
            //to Metric
            this.tempUnit = "C";
            this.pressUnit = "hPa";
            this.windUnit = "kph";
            this.tempNow = Math.round(((this.tempNow - 32)/(9/5))*10)/10;
            this.tempFeel = Math.round(((this.tempFeel - 32)/(9/5))*10)/10;
            this.windSpeed = Math.round((this.windSpeed*1.609344)*10)/10;
            this.pressure = Math.round((this.pressure/0.029529983071445));
        } else {
            //to Imperial
            this.tempUnit = "F";
            this.pressUnit = "inHg";
            this.windUnit = "mph";
            this.tempNow = Math.round(((this.tempNow*(9/5)) + 32)*10)/10;
            this.tempFeel = Math.round(((this.tempFeel*(9/5)) + 32)*10)/10;
            this.windSpeed = Math.round((this.windSpeed/1.609344)*10)/10;
            this.pressure = Math.round((this.pressure*0.029529983071445)*100)/100;

        }
    },
}

const locationData =  {
    city: "",
    country: "",
    state: "",
    long: "",
    lat: "",
}

const init = () => {
    //initializes app
    //adds event listeners to search image click and enter key within search 
    addListeners();
}

const addListeners = () => {
    let formIn = document.getElementById("form");
    formIn.addEventListener("submit",submitIn);
    //submits on enter key from input or submit button 
    let unitSwitchBtn = document.getElementById("unit-toggle");
    unitSwitchBtn.addEventListener("click",switchUnits);
}



const submitIn = (e) => {
    e.preventDefault();
    // console.log(e);
    let searchInputElement = document.getElementById("search-input");
    let searchValue = cleanInput(searchInputElement.value.trim());
    console.log(searchValue);
    // console.log(searchLocationIn);
    // console.log(searchLocationIn.value.trim());
    // console.log(searchLocationIn.validity);
    //NEED TO UPDATE VALIDITY IF API FETCH COMES BACK WITH AN ERROR OR IF NO VALUE PRESENT

    if (searchValue < 1) {
        //searchLocationIn.setCustomValidity("Yo, you gotta put something here");
        //console.log(searchLocationIn.validity);
        //searchLocationIn.reportValidity()
        searchInputElement.classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = "Please input a location.";
        console.log("No Value Input");
    } else {
        searchInputElement.classList = "search-input";
        document.getElementById("input-error").innerHTML = "";
        console.log("Valid Input");
        //Intiates API Call for Geo Location
        getGeo(searchValue).then((resultGeo) => {
            //use pulled results 
            console.log(resultGeo);
            locationData.city = resultGeo[0].name;
            locationData.country = resultGeo[0].country;
            locationData.state = resultGeo[0].state;
            locationData.long = resultGeo[0].lon;
            locationData.lat = resultGeo[0].lat;
            console.log("Confirming Location Data is accessable",locationData);
        }).then(() => {
            //console.log("how'd this run");
            //calls function to pull weather data
            console.log("Confirming Location Data is accessable",locationData);
            getWeather().then((resultWeather) => {
            //store data as needed and return object with vairables 
            // let cityIn = resultWeather.name;
            // let typeIn = resultWeather.weather[0].description;
            // let tempsIn = [resultWeather.main.temp,resultWeather.main.feels_like, resultWeather.main.temp_min, resultWeather.main.temp_max];
            // let windIn = [resultWeather.wind.speed, resultWeather.wind.deg];
            // let humidIn = resultWeather.main.humidity;
            // let presssureIn = resultWeather.main.pressure;
    
            weatherData.city = resultWeather.name;
            weatherData.weather = resultWeather.weather[0].description;
            weatherData.tempNow = Math.round((resultWeather.main.temp - 273.15)*10)/10;
            weatherData.tempFeel = Math.round((resultWeather.main.feels_like - 273.15)*10)/10;
            weatherData.tempUnit = "C";
            weatherData.pressUnit = "hPa";
            weatherData.windUnit = "kph";
            weatherData.windSpeed = resultWeather.wind.speed;
            weatherData.windDirection = resultWeather.wind.deg;
            weatherData.humidity = resultWeather.main.humidity;
            weatherData.pressure = resultWeather.main.pressure;
            console.log(weatherData);
            console.log(locationData);
            updateDisplay();
        });

        })
    }
}

const getGeo = async (locationIn) => {
    try {
        let apiKeyGeo = "a35be01e648d24c61de74b1684656be9" //free api key, same for Geo and Weather APIs
        let urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${locationIn}&limit=3&appid=${apiKeyGeo}`;
        let responseGeo = await fetch(urlGeo, {mode: "cors"});
        let geoDataOut = await responseGeo.json();
        //let dataOut = storeWeatherData(weatherData);
        if (geoDataOut.length < 1) {
            throw "The location entered was not found. Please try again.";
        }
        return geoDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
        console.error(err);
    }
}


const getWeather = async () => {
    try {
        let apiKey = "a35be01e648d24c61de74b1684656be9" //free api key
        let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.long}&appid=${apiKey}`;
        let response = await fetch(URL, {mode: "cors"});
        let weatherDataOut = await response.json();
        //ADD error catching here to throw error if issue pulling weather data
        console.log(weatherDataOut);
        return weatherDataOut;
    } catch (err) {
        console.error(err);
    }
}

const updateDisplay = () => {
    console.log
    //Location
    let locationText = document.querySelector("div#city p");
    locationText.innerHTML = `${locationData.city}, ${locationData.state}, ${locationData.country}`;
    //Weather Description
    let weatherText = document.querySelector("div#weather p");
    weatherText.innerHTML = `${weatherData.weather}`;
    //Logo??
    //Temp Current
    let tempNowText = document.querySelector("div#temp-now p");
    tempNowText.innerHTML = `${weatherData.tempNow}`;
    //Units
    let unitText = document.querySelector("div#units p");
    unitText.innerHTML = `${weatherData.tempUnit}`;
    //Temp Feels Like
    let tempFeelText = document.querySelector("div#temp-feel p");
    tempFeelText.innerHTML = `Feels Like: ${weatherData.tempFeel} °${weatherData.tempUnit}`;
    //Wind
    let windText = document.querySelector("div#wind p");
    windText.innerHTML = `Wind: ${weatherData.windSpeed}${weatherData.windUnit} ${returnDirection(weatherData.windDirection)}`;
    //Humidity
    let humidText = document.querySelector("div#humidity p");
    humidText.innerHTML = `Humidity: ${weatherData.humidity}%`;
    //Pressure
    let pressureText = document.querySelector("div#pressure p");
    pressureText.innerHTML = `Pressure: ${weatherData.pressure}${weatherData.pressUnit}`;
}

const returnDirection = (windDegrees) => {
    if (67.5 > windDegrees >= 22.5) {
        return "NE"
    } else if (112.5 > windDegrees >= 67.5) {
        return "E"
    }
    else if (157.5 > windDegrees >= 112.5) {
        return "SE"
    }
    else if (202.5 > windDegrees >= 157.5) {
        return "S"
    }
    else if (247.5 > windDegrees >= 202.5) {
        return "SW"
    }
    else if (295.5 > windDegrees >= 247.5) {
        return "W"
    }
    else if (337.5 > windDegrees >= 295.5) {
        return "NW"
    }
    else {
        return "N"
    }
}


const switchUnits = () => {
    weatherData.switchTempUnit();
    updateDisplay();
    console.log(weatherData);
}


// function createWeatherData(cityId) {
//     //get data from fetch
// }



// const getID = (locationName) => {
//     //function to search location by name and return the ID 
//     //per the location pulled from 
//     let atlId = "4180439";
//     return atlId
// }



// const validateLocation = () => {
//     let searchLocationIn = document.getElementById("search-input");
//     console.log(searchLocationIn);
//     console.log(searchLocationIn.value);
//     console.log(searchLocationIn.validity);
//     let geoObj = getGeo(searchLocationIn).then((result) => {
//         let cityName = result.name;
//         let cityLat = result.lat;
//         let cityLon = result.lat;
//         let cityCountry = result.country;

//     });
// }
const cleanInput = (inputValue) => {
    //FUNCTION TO SANITIZE USER INPUT FOR API SEARCH
    //UPDATE LATER TO REFLECT MORE COMPREHENSIVE INPUTS FROM USER
    //FOR NOW SIMPLY SPLITTING OUT IN CASE OF COMMA WHICH CAUSES ERROR 
    let inputsAll = inputValue.split(",");
    return inputsAll[0];
}



//console.log(weatherData);
document.addEventListener('DOMContentLoaded', init());




