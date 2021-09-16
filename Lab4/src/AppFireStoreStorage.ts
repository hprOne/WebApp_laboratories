import { IAppStorage } from "./interface";
import { initializeApp } from "firebase/app"

import { deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";
import { Note } from "./Note";

export class AppFireStoreStorage implements IAppStorage {

    firebaseConfig = {

        apiKey: "AIzaSyC21XhRttz95nbr-vOikJxVhlzOcB4rPTY",

        authDomain: "notekeep-a35d2.firebaseapp.com",

        projectId: "notekeep-a35d2",

        storageBucket: "notekeep-a35d2.appspot.com",

        messagingSenderId: "12311041099",

        appId: "1:12311041099:web:6c24f6e9e1e4c4bd4ce9ce",

        measurementId: "G-J8NLNTKFQ2"

    };
    private db;
    private notatki: string = "Notatki"
    constructor() {
        const app = initializeApp(this.firebaseConfig);
        this.db = getFirestore();

    }

    async saveNotes(notes: Note[]) {
        console.log("test")
        try {
            for await (let notatka of notes) {

                const docRef = await addDoc(collection(this.db, this.notatki), {
                    id: notatka.id,
                    title: notatka.title,
                    textContent: notatka.textContent,
                    color: notatka.color,
                    isPinned: notatka.isPinned,
                    date: notatka.date

                });
                console.log("Document written with ID: ", docRef.id);
            }

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    async getNotes() {
        const querySnapshot = await getDocs(collection(this.db, this.notatki));
        let temp: Note[] = []
        querySnapshot.forEach((doc: any) => {
            console.log()
            temp.push(new Note(doc.id, doc.data().title, doc.data().textContent, doc.data().color, doc.data().isPinned))
        })
        return temp
    }
    async removeNote(index: string) {
        await deleteDoc(doc(this.db, this.notatki, index)).then((e: any) => {
            console.log(e)
        });
    }

    async add(note: Note) {
        try {
            const docRef = await addDoc(collection(this.db, this.notatki), {
                id: note.id,
                title: note.title,
                textContent: note.textContent,
                color: note.color,
                isPinned: note.isPinned,
                date: note.date
            })
            console.log("Document written with ID: ", docRef.id);

        } catch (e: unknown) {
            console.error(e)
        }

    }

    async update(id: string, note: Note) {
        console.log(id)
        const referral = doc(this.db, this.notatki, id);
        await updateDoc(referral, {
            id: note.id,
            title: note.title,
            textContent: note.textContent,
            color: note.color,
            isPinned: note.isPinned,
            date: note.date
        });
    }
}
