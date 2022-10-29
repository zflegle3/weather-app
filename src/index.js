import "./style.css"



//Variables
const weatherData =  {
    city: "",
    weather: "",
    weatherIcon: "",
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



//Functions
const init = () => {
    //Initializing page with Atlanta GA weather data
    document.getElementById("search-input").value = "Atlanta";
    const eventStart = new Event('submit',{cancelable: true });
    document.getElementById("form").dispatchEvent(eventStart);
    document.getElementById("search-input").value = "";
};

const addListeners = () => {
    //Adding event listeners for search bar and color toggle 
    let formIn = document.getElementById("form");
    let colorToggle = document.getElementById("checkbox");
    formIn.addEventListener("submit",submitIn);
    //submits on enter key from input element or submit button 
    colorToggle.addEventListener("change",toggleColorMode);
};

const addUnitListeners = () => {
    //adds switch unit event listener since functionality isnt necessary initially 
    let unitSwitchBtn = document.getElementById("unit-toggle");
    unitSwitchBtn.addEventListener("click",switchUnits);
};

const toggleColorMode = () => {
    //toggles class of body element to determine color scheme of display
    let docBody = document.querySelector("body");
    docBody.classList.toggle("dark-mode");

};

const submitIn = (e) => {
    //handles functionality of user input and display on page 
    e.preventDefault();
    let searchInputElement = document.getElementById("search-input");
    let searchValue = cleanInput(searchInputElement.value.trim());

    if (searchValue[0] < 1) {
        //error handling - no search value error handling
        searchInputElement.classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = "Please input a location.";
    } else {
        //error handling - reset
        searchInputElement.classList = "search-input";
        document.getElementById("input-error").innerHTML = "";

        //Intiates API Call for Geo Location Data
        getGeo(searchValue).then((resultGeo) => {
            if (resultGeo) {
                locationData.city = resultGeo[0].name;
                locationData.country = resultGeo[0].country;
                locationData.state = resultGeo[0].state;
                locationData.long = resultGeo[0].lon;
                locationData.lat = resultGeo[0].lat;
            }
        }).then(() => {
            //Intiates API Call for Weather Data per Geo Data
            getWeather().then((resultWeather) => {
                weatherData.city = resultWeather.name;
                weatherData.weather = resultWeather.weather[0].description;
                weatherData.weatherIcon = resultWeather.weather[0].icon;
                weatherData.tempNow = Math.round((resultWeather.main.temp - 273.15)*10)/10;
                weatherData.tempFeel = Math.round((resultWeather.main.feels_like - 273.15)*10)/10;
                weatherData.tempUnit = "C";
                weatherData.pressUnit = "hPa";
                weatherData.windUnit = "kph";
                weatherData.windSpeed = resultWeather.wind.speed;
                weatherData.windDirection = resultWeather.wind.deg;
                weatherData.humidity = resultWeather.main.humidity;
                weatherData.pressure = resultWeather.main.pressure;
                addUnitListeners();
                updateDisplay();
            });
        })
    };
};

const getGeo = async (locationIn) => {
    try {
        let apiKeyGeo = "a35be01e648d24c61de74b1684656be9" //free api key, same for Geo and Weather APIs
        let urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${locationIn[0]}&limit=3&appid=${apiKeyGeo}`;
        let responseGeo = await fetch(urlGeo, {mode: "cors"});
        let geoDataOut = await responseGeo.json();
        //error handling - no location data from API
        if (geoDataOut.length < 1) {
            throw "That location was not found. Please try again.";
        };
        return geoDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
    };
};

const getWeather = async () => {
    try {
        let apiKey = "a35be01e648d24c61de74b1684656be9" //free api key
        let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.long}&appid=${apiKey}`;
        let response = await fetch(URL, {mode: "cors"});
        let weatherDataOut = await response.json();
        //error handling - no weather data from API
        if (weatherDataOut.length < 1) {
            throw "The weather for that location was not found. Please try again.";
        }
        return weatherDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
    };
};

const updateDisplay = () => {
    //Location
    if (locationData.state === undefined) {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.country}`;
    } else {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.state}, ${locationData.country}`;
    };
    //Weather Description
    let weatherText = document.querySelector("div#weather p");
    weatherText.innerHTML = `${weatherData.weather}`;
    //Weather Image
    let weatherIcon = document.querySelector("div#weather-img img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;
    //Temp Current
    let tempNowText = document.querySelector("div#temp-now p");
    tempNowText.innerHTML = `${weatherData.tempNow}`;
    //Units
    let unitText = document.querySelector("div#units p");
    unitText.innerHTML = `°${weatherData.tempUnit}`;
    //Temp Feels Like
    let tempFeelText = document.querySelector("div#temp-feel p");
    tempFeelText.innerHTML = `${weatherData.tempFeel} °${weatherData.tempUnit}`;
    //Wind
    let windText = document.querySelector("div#wind p");
    windText.innerHTML = `${weatherData.windSpeed}${weatherData.windUnit} ${returnDirection(weatherData.windDirection)}`;
    //Humidity
    let humidText = document.querySelector("div#humidity p");
    humidText.innerHTML = `${weatherData.humidity}%`;
    //Pressure
    let pressureText = document.querySelector("div#pressure p");
    pressureText.innerHTML = `${weatherData.pressure}${weatherData.pressUnit}`;
    let displayComponent = document.querySelector(".weather-display");
    console.log(displayComponent);
    //On Load hide display until values populated
    if (!displayComponent.classList.contains("visable")) {
        console.log("show");
        displayComponent.classList.add("visable");
    }
};

const returnDirection = (windDegrees) => {
    if (67.5 > windDegrees && windDegrees >= 22.5) {
        return "NE";
    } else if (112.5 > windDegrees && windDegrees >= 67.5) {
        return "E";
    }
    else if (157.5 > windDegrees && windDegrees >= 112.5) {
        return "SE";
    }
    else if (202.5 > windDegrees && windDegrees >= 157.5) {
        return "S";
    }
    else if (247.5 > windDegrees && windDegrees >= 202.5) {
        return "SW";
    }
    else if (295.5 > windDegrees && windDegrees >= 247.5) {
        return "W";
    }
    else if (337.5 > windDegrees && windDegrees >= 295.5) {
        return "NW";
    }
    else {
        return "N";
    }
};

const switchUnits = () => {
    weatherData.switchTempUnit();
    updateDisplay();
};

const cleanInput = (inputValue) => {
    //Function to handle user input for API Geo search
    //For now simply splitting out in case of comma input
    let inputsAll = inputValue.split(",");
    return inputsAll;
};

//Initializing page with Weather Data and UI controls
document.addEventListener('DOMContentLoaded', addListeners());
window.addEventListener("load", init);







