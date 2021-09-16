// export interface IWeatherData {
//     coord: {
//         lon: number,
//         lat: number,
//     },
//     weather: [{
//         id: number,
//         main: string,
//         description: string,
//         icon: string
//     }];
//     base: string,
//     main: {
//         temp: number,
//         feels_like: number,
//         temp_min: number
//         temp_max: number
//         pressure: number
//         humidity: number
//     },
//     visibility: number,
//     wind: {
//         speed: number,
//         deg: number,
//     }
//     clouds: {
//         all: number 
//     }
//     dt: number,
//     sys: {
//         type: number,
//         id: number,
//         message: number,
//         country: string,
//         sunrise: Date,
//         sunset: Date,
//     }
//     timezone: number,
//     id: number,
//     name: string,
//     cod: number
// }

import { Note } from "./Note";

export interface IAppStorage {
    add(note: Note): void;
    getNotes(): any;
    saveNotes(notes: Note[]): void;
    removeNote(id: string): void;
    update(id: string, note: Note): void;
}