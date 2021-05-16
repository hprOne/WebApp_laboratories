import { INoteKeepData } from './interface';

export class UINote{
    name: string;
    wrapper: HTMLDivElement;
    
    constructor() {
        this.getWrapper();
    }
    getWrapper(){
        this.wrapper = <HTMLDivElement>document.getElementById('wrapper');
    }
    removeNote(name: string){
        const note = <HTMLDivElement>document.getElementById(name);
        const allNotes: string[] = JSON.parse(localStorage.getItem('notes'));
        console.log(allNotes);
        const newNotes = allNotes.filter((e) => e !== name);
        localStorage.setItem('notes', JSON.stringify(newNotes));
        this.wrapper.removeChild(note);
    }
    addNote(noteData: INoteKeepData){
        const noteWrapper = document.createElement('div');
        noteWrapper.className = "noteWrapper";
        noteWrapper.id = noteData.main.name;

        //main data
        const noteMainInfoWrapper = document.createElement('div');
        noteMainInfoWrapper.className = "noteMain";

        //remove btn
        const removeBtn = document.createElement("button");
        removeBtn.textContent= "Usuń";
        removeBtn.className = "removeCityButton";
        removeBtn.addEventListener('click', () => {
            this.removeNote(noteWrapper.id);
        });
    this.wrapper.appendChild(noteWrapper);
    }
    
}


