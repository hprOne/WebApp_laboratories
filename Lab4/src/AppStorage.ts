import { locationOfSaving } from "./config";
import { IAppStorage } from "./interface";
import { Note } from "./Note";

// ? localstorage 
export class AppStorage implements IAppStorage {
    constructor() {

    }

    saveNotes(notes: Note[]) {
        notes.forEach((el: Note) => {
            localStorage.setItem(`Notatka${el.id}`, JSON.stringify(el))
        })
    }

    getNotes(): Promise<Note[]> {
        return new Promise((resolve, reject) => {
            let values = Object.keys(localStorage)
                .filter((key) => key.startsWith("Notatka"))
                .map((key) => JSON.parse(localStorage[key]));
            resolve(values)
        })
    }

    removeNote(id: string) {
        localStorage.removeItem(`Notatka${id}`)
    }


    add(): void {
        //! DOES NOTHING :)

    }
    update(id: string, note: Note) {
        console.log(`Notatka${id}`)
        console.log(note)
        localStorage.setItem(`Notatka${id}`, JSON.stringify(note))
    }
}