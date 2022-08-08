import { getWeather } from "../src/modules/weather";
import { displayResults } from "../src/modules/dom";

const searchButton = document.querySelector('#submit');
const searchForm = document.querySelector('#search');

searchButton.addEventListener('click', search);

async function search(){

    
    
    const location = searchForm.value;

    if(!location) return;

    const coordinatesUrl = getWeather.requestCoordinates(location);
    const coordinates = await getWeather.getCoordinates(coordinatesUrl);
    const forecastUrl = getWeather.requestWeatherFromCoord(coordinates);
    const weatherData = await getWeather.getForecast(forecastUrl);
    displayResults.generateDom(weatherData);


}

