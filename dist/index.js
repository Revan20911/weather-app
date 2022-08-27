import { getWeather } from "../src/modules/weather";
import { displayResults } from "../src/modules/dom";
import {defaultResults} from "../src/modules/default"

const searchButton = document.querySelector('#submit');
const searchForm = document.querySelector('#search');

searchButton.addEventListener('click', search);

const defaultValue = 'London';

async function search(){

    
    
    const location = "";

    if(searchForm.value == ""){

        location = defaultValue;
    }else if(searchForm.value != ""){

        location = searchForm.value;
    }

    

    const coordinatesUrl = getWeather.requestCoordinates(location);
    const coordinates = await getWeather.getCoordinates(coordinatesUrl);
    const forecastUrl = getWeather.requestWeatherFromCoord(coordinates);
    const weatherData = await getWeather.getForecast(forecastUrl);
    displayResults.generateDom(weatherData);


}

