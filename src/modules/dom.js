
export const displayResults = (() => {

    function getWeatherIcon(forecast){

        let icon = '';

        if(forecast.weather[0].main === 'Clear'){

            icon = '<i class="fa-solid fa-sun"></i>';

        }else if(forecast.weather[0].main === 'Rain'){

            icon = '<i class="fa-solid fa-cloud-rain"></i>';
        }
        else if(forecast.weather[0].main === 'Clouds'){

            icon = '<i class="fa-solid fa-cloud"></i>';
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
        icon.innerHTML = getWeatherIcon(forecast);

       

        


    }

    return{
        generateDom,
    };

})();


