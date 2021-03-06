import { IWeatherData } from './interface';

export class userInterface{
    name: string;
    temp: number;
    wrapper: HTMLDivElement;

    constructor() {
        this.getWrapper();
    }

    getWrapper(){
        this.wrapper = <HTMLDivElement>document.getElementById('wrapper');
    }

    removeCity(name: string){
        const city = <HTMLDivElement>document.getElementById(name);
        const allCities: string[] = JSON.parse(localStorage.getItem('cities'));
        console.log(allCities);
        const newCities = allCities.filter((e) => e !== name);
        localStorage.setItem('cities', JSON.stringify(newCities));
        this.wrapper.removeChild(city);
    }

    renderWeatherElement(weatherData: IWeatherData){
        const weatherWrapper = document.createElement('div');
        weatherWrapper.className = "weatherWrapper";
        weatherWrapper.id = weatherData.name;

        //miasto+temp+ikonka
        const weatherMainInfoWrapper = document.createElement('div');
        weatherMainInfoWrapper.className = "weatherMain"

        const weatherCityName = document.createElement("div");
        weatherCityName.textContent = weatherData.name + " ";
        weatherCityName.className = "weatherCity";
       
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

        const weatherTemp = document.createElement("span");
        weatherTemp.textContent = `${weatherData.main.temp.toFixed(1)} °C`;
        weatherTemp.className = "weatherTemp";

        weatherMainInfoWrapper.appendChild(weatherIcon);
        weatherMainInfoWrapper.appendChild(weatherCityName);
        weatherMainInfoWrapper.appendChild(weatherTemp);

        // wilgotnosc+cisnienie
        const weatherDetailInfoWrapper = document.createElement('div');
        weatherDetailInfoWrapper.className = "weatherDetails";
        
        const weatherHumidity = document.createElement("div");
        weatherHumidity.textContent = `Wilgotność: ${(weatherData.main.humidity)}% `;
        weatherHumidity.className = "weatherHumidity";

        const weatherPressure = document.createElement("span");
        weatherPressure.textContent = `Ciśnienie: ${(weatherData.main.pressure)}hPa `;
        weatherPressure.className = "weatherPressure";

        //usuwanie miasta przy uzyciu przycisku
        const removeBtn = document.createElement("button");
        removeBtn.textContent= "Usuń miasto";
        removeBtn.className = "removeCityButton";
        removeBtn.addEventListener('click', () => {
            this.removeCity(weatherWrapper.id);
        });

        weatherDetailInfoWrapper.appendChild(weatherHumidity);
        weatherDetailInfoWrapper.appendChild(weatherPressure);
        weatherDetailInfoWrapper.appendChild(removeBtn);

        weatherWrapper.appendChild(weatherMainInfoWrapper);
        weatherWrapper.appendChild(weatherDetailInfoWrapper);

        this.wrapper.appendChild(weatherWrapper);
    }
}