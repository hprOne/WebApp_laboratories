// import { IWeatherData } from './interface';

import { Note } from "./Note";
import { Notes } from "./Notes";

// export class userInterface{
//     name: string;
//     temp: number;
//     wrapper: HTMLDivElement;

//     constructor() {
//         this.getWrapper();
//     }

//     getWrapper(){
//         this.wrapper = <HTMLDivElement>document.getElementById('wrapper');
//     }

//     removeCity(name: string){
//         const city = <HTMLDivElement>document.getElementById(name);
//         const allCities: string[] = JSON.parse(localStorage.getItem('cities'));
//         console.log(allCities);
//         const newCities = allCities.filter((e) => e !== name);
//         localStorage.setItem('cities', JSON.stringify(newCities));
//         this.wrapper.removeChild(city);
//     }

//     renderWeatherElement(weatherData: IWeatherData){
//         const weatherWrapper = document.createElement('div');
//         weatherWrapper.className = "weatherWrapper";
//         weatherWrapper.id = weatherData.name;

//         //miasto+temp+ikonka
//         const weatherMainInfoWrapper = document.createElement('div');
//         weatherMainInfoWrapper.className = "weatherMain"

//         const weatherCityName = document.createElement("div");
//         weatherCityName.textContent = weatherData.name + " ";
//         weatherCityName.className = "weatherCity";

//         const weatherIcon = document.createElement("img");
//         weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

//         const weatherTemp = document.createElement("span");
//         weatherTemp.textContent = `${weatherData.main.temp.toFixed(1)} °C`;
//         weatherTemp.className = "weatherTemp";

//         weatherMainInfoWrapper.appendChild(weatherIcon);
//         weatherMainInfoWrapper.appendChild(weatherCityName);
//         weatherMainInfoWrapper.appendChild(weatherTemp);

//         // wilgotnosc+cisnienie
//         const weatherDetailInfoWrapper = document.createElement('div');
//         weatherDetailInfoWrapper.className = "weatherDetails";

//         const weatherHumidity = document.createElement("div");
//         weatherHumidity.textContent = `Wilgotność: ${(weatherData.main.humidity)}% `;
//         weatherHumidity.className = "weatherHumidity";

//         const weatherPressure = document.createElement("span");
//         weatherPressure.textContent = `Ciśnienie: ${(weatherData.main.pressure)}hPa `;
//         weatherPressure.className = "weatherPressure";

//         //usuwanie miasta przy uzyciu przycisku
//         const removeBtn = document.createElement("button");
//         removeBtn.textContent= "Usuń miasto";
//         removeBtn.className = "removeCityButton";
//         removeBtn.addEventListener('click', () => {
//             this.removeCity(weatherWrapper.id);
//         });

//         weatherDetailInfoWrapper.appendChild(weatherHumidity);
//         weatherDetailInfoWrapper.appendChild(weatherPressure);
//         weatherDetailInfoWrapper.appendChild(removeBtn);

//         weatherWrapper.appendChild(weatherMainInfoWrapper);
//         weatherWrapper.appendChild(weatherDetailInfoWrapper);

//         this.wrapper.appendChild(weatherWrapper);
//     }
// }

export class userInterface {

    constructor() {

    }
    renderNotes(notes: Note[]) {

        document.getElementById("pinned").innerHTML = "";
        document.getElementById("unpinned").innerHTML = "";
        notes.forEach((note: Note) => {
            let location = document.getElementById(note.isPinned ? "pinned" : "unpinned")
            let div = document.createElement("div");
            let title = document.createElement("h1")
            let content = document.createElement("p")
            let removeButton = document.createElement("button");
            let repinButton = document.createElement("button")

            // *** styling 
            // ? div
            div.id = note.id
            div.className = !note.isPinned ? "unpin" : "pin"
            div.style.margin = "1em"
            div.style.backgroundColor = note.color
            div.style.height = "10em"
            div.style.width = "20em"
            div.style.borderRadius = "10%";
            div.style.display = "flex";
            div.style.flexDirection = "column"
            div.style.alignItems = "center"
            // ? title
            title.textContent = note.title
            div.appendChild(title)
            // ? content
            content.textContent = note.textContent
            content.style.margin = "0"
            div.appendChild(content)
            // ? buttons
            removeButton.className = "remove-button"
            removeButton.textContent = "remove"

            repinButton.className = "repin-button"
            repinButton.textContent = "repin"

            div.appendChild(removeButton)
            div.appendChild(repinButton)

            // div.textContent = note.title
            location.appendChild(div)

            // this.removeButtonsEvent()
        })
    }
}