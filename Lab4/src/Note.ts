export class Note {

    id: string;
    title: string;
    textContent: string;
    color: string;
    isPinned: boolean;
    date: Date;

    constructor(id: string, title: string, textContent: string, color: string, pinned: boolean) {
        this.id = id
        this.title = title
        this.textContent = textContent
        this.color = color
        this.isPinned = pinned;
        this.date = new Date();

    }

}