import { App } from "./app";
import { AppFireStoreStorage } from "./AppFireStoreStorage";
import { AppStorage } from "./AppStorage";
import { locationOfSaving } from "./config";
import { IAppStorage } from "./interface";
import { Note } from "./Note";
import { userInterface } from "./userInterface";


export class Notes {

    notatki: Note[] = [];
    storage: IAppStorage;
    ui: userInterface;
    constructor(userInterface: userInterface) {
        this.ui = userInterface



        // ! mockup for now 
        const notatka = new Note("1", "Tytuł", "textContent", "#ffffff", true)
        const notatka1 = new Note("2", "Tytuł", "textContent", "#ffffff", false)

        // this.notatki.push(notatka)
        // this.notatki.push(notatka1)
        console.log(locationOfSaving)
        // ? for now its just a stuff

        if (locationOfSaving === "firestore") { this.storage = new AppFireStoreStorage(); } else { this.storage = new AppStorage() }
        this.getNotes();

    }


    async getNotes() {
        await this.storage.getNotes().then((e: Note[]) => {
            e.forEach((e: Note) => this.notatki.push(e))
            console.log(this.notatki)
            this.ui.renderNotes(e)


        })
        this.removeButtonsEvent();
        this.createNote()
        this.updateNote();

    }
    async deleteNotes(id: string) {
        this.notatki = this.notatki.filter((e) => e.id !== id)
        console.log(this.notatki)
        this.storage.removeNote(id)
    }
    async add(note: Note) {
        this.storage.add(note)
    }
    async update(id: string) {
        if (locationOfSaving === "local") {
            let tempInd = this.notatki.find(x => x.id === id).id
            this.notatki[+tempInd].isPinned = !this.notatki[+tempInd].isPinned
            this.storage.update(id, this.notatki[+tempInd])
        }
        else {
            let tempNote = this.notatki.find((e: Note) => e.id.toString() == id)
            console.log(tempNote)
            tempNote.isPinned = !tempNote.isPinned
            console.log(tempNote)
            this.storage.update(id, tempNote)
        }
    }



    createNote() {

        document.getElementById("accept").addEventListener("click", () => {
            let title = document.getElementById("title") as HTMLInputElement
            let content = document.getElementById("content") as HTMLInputElement
            let color = document.getElementById("color") as HTMLInputElement

            let tempNote = new Note(this.notatki.length.toString(), title.value, content.value, color.value, false)
            this.notatki.push(tempNote)
            this.ui.renderNotes(this.notatki)
            this.storage.add(tempNote)
            this.removeButtonsEvent();
            this.updateNote();


        })



        // let tempNote = new Note(this.notatki.length.toString(), title,)


    }

    updateNote() {
        let buttons = document.querySelectorAll(".repin-button");
        buttons.forEach((button: HTMLElement) => {
            button.addEventListener("click", () => {
                let move = document.getElementById(button.parentElement.id)
                if (move.className == "unpin") {

                    let moveTo = document.getElementById("pinned")
                    move.className = "pin"
                    moveTo.insertBefore(move, null)
                } else {
                    let moveTo = document.getElementById("unpinned")
                    move.className = "unpin"
                    moveTo.insertBefore(move, null)

                }
                this.update(button.parentElement.id)

            })
        })
    }

    removeButtonsEvent() {
        let buttons = document.querySelectorAll(".remove-button");
        buttons.forEach((button: HTMLElement) => {
            button.addEventListener("click", () => {
                document.getElementById(button.parentElement.id).remove()
                this.deleteNotes(button.parentElement.id)
            })
        })
    }

    // updateButtonEvent() {
    //     let buttons = document.querySelectorAll(".repin-button");
    //     buttons.forEach((button: HTMLElement) => {
    //         button.addEventListener("click", () => {
    //             document.getElementById(button.parentElement.id).remove()
    //             this.deleteNotes(button.parentElement.id)
    //         })
    //     })
    // }

}