// // import { IWeatherData } from './interface';
// import { userInterface } from './ui';

import { Notes } from "./Notes";
import { userInterface } from "./userInterface";

// export class App {
//     opwApiKey = 'c75d3c8b717038faaabf75c3e9248304';
//     addCityBtn: HTMLButtonElement;
//     cityInput: HTMLInputElement;
//     ui: userInterface;

//     constructor(ui: userInterface) {
//         this.getInputBtn();
//         this.getCityData();
//         this.getWeatherAllCities();
//         this.ui = ui;
//     }

//     getInputBtn() {
//         this.cityInput = <HTMLInputElement>document.getElementById("cityInput");
//         this.addCityBtn = <HTMLButtonElement>document.getElementById("cityAddButton");
//     }

//     getCityData() {
//         this.addCityBtn.addEventListener("click", async () => {
//             const city = await this.getCityInfo(this.cityInput.value);
//             if (city.cod === 200) {
//                 let isAdded = this.saveCities(city.name);
//                 if (isAdded)
//                     this.ui.renderWeatherElement(city);
//             }
//             else {
//                 window.alert("Takiego miasta nie ma na świecie!");
//             }
//         });
//     }

//     getWeatherAllCities() {
//         let city: string[] = this.getData();
//         city.forEach(async (element) => {
//             let info = await this.getCityInfo(element);
//             if (info.cod === 200) {
//                 console.log(info);
//                 this.ui.renderWeatherElement(info);
//             }
//         })
//     }

//     saveCities(city: string): boolean {
//         let existingCities = this.getData();
//         if (!existingCities.includes(city)) {
//             existingCities.push(city);
//             localStorage.setItem('cities', JSON.stringify(existingCities));
//             return true;
//         }
//         else {
//             window.alert("To miasto już jest!");
//             return false;
//         }
//     }

//     async getCityInfo(city: string) {
//         const weather = await this.getWeather(city);
//         return weather;
//     }

//     async getWeather(city: string): Promise<IWeatherData> {
//         const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&units=metric`;
//         const weatherResponse = await fetch(openWeatherUrl);
//         const weatherData: IWeatherData = await weatherResponse.json();
//         return weatherData;
//     }

//     getData() {
//         const data = localStorage.getItem('cities');
//         if (data) {
//             return JSON.parse(data);
//         } else {
//             return [];
//         }
//     }
// }


export class App {
    notes: Notes
    ui: userInterface
    constructor() {

        this.ui = new userInterface();
        this.notes = new Notes(this.ui)

    }
}

const app = new App();