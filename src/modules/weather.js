
export const getWeather = (() => {

    const apiKey = "0a260536bb797a4020787c47ad3ef113";

    function requestCoordinates(location){

        

        return `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
    }

    function requestWeatherFromCoord(coordinates){

        var lat = coordinates.lat;
        var lon = coordinates.lon;

        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    }

    async function getCoordinates(url){
        const response = await fetch(url);
        const data = await response.json();
        return data[0];
    }

    
    async function getForecast(url){

        const response = await fetch(url);
        const forecast = await response.json();
        console.log(forecast.weather[0].main);

        return forecast;
    }

    return {
        requestCoordinates,
        requestWeatherFromCoord,
        getForecast,
        getCoordinates,
    };
})();