
export const displayResults = (() => {

    function getWeatherIcon(forecast){

        let icon = '';

        if(forecast.weather[0].main === 'Clear'){

            icon = "./dist/assets/svg/day.svg";

        }else if(forecast.weather[0].main === 'Rain'){

            icon = "./dist/assets/svg/rainy-6.svg";
        }
        else if(forecast.weather[0].main === 'Clouds'){

            icon = "./dist/assets/svg/cloudy-day-1.svg";
        }

        return icon;


    }






    function generateDom(forecast){

        if(!forecast) return;

        const weatherModule = document.querySelector("#weather-view");
        weatherModule.classList.add('visible');

        const icon = document.querySelector('#icon');
        


        const name = document.querySelector("#name");
        const temp = document.querySelector('#temp');
        const cond = document.querySelector('#cond');
        const humidity = document.querySelector('#humidity');
        const rain = document.querySelector('#rain');




        name.textContent = `${forecast.name}`;
        temp.textContent = `${forecast.main.temp} °`;
        icon.src = getWeatherIcon(forecast);

       

        


    }

    return{
        generateDom,
    };

})();


