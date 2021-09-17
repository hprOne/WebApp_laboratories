import { Note } from "../src/Note";
import { Notes } from "../src/Notes";
import { userInterface } from "../src/userInterface";


beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();

    // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:

});

describe("Check default behavior", () => {
    test("Are objects equal", () => {


        const noteInfo: Note = {
            id: "1",
            color: "#ffffff",
            textContent: "Notatka testowa",
            isPinned: false,
            title: "Title",
            date: new Date()
        }

        expect(new Note("1", "Title", "Notatka testowa", "#ffffff", false)).toMatchObject(noteInfo)
    })

    test("Add a note to notes", () => {
        const noteInfo: Note = {
            id: "1",
            color: "#ffffff",
            textContent: "Notatka testowa",
            isPinned: false,
            title: "Title",
            date: new Date()
        }
        const notes: Notes = new Notes(new userInterface());
        notes.notatki.push(noteInfo)
        expect(notes.notatki).toHaveLength(1)
    })

    test("Remove a note from notes", () => {
        const noteInfo: Note = {
            id: "1",
            color: "#ffffff",
            textContent: "Notatka testowa",
            isPinned: false,
            title: "Title",
            date: new Date()
        }
        const notes: Notes = new Notes(new userInterface());
        notes.notatki.push(noteInfo)
        notes.notatki.pop()
        expect(notes.notatki).toHaveLength(0)
    })

    test("Update a note in notes", () => {
        const noteInfo: Note = {
            id: "1",
            color: "#ffffff",
            textContent: "Notatka testowa",
            isPinned: false,
            title: "Title",
            date: new Date()
        }
        const notes: Notes = new Notes(new userInterface());
        notes.notatki.push(noteInfo)
        notes.notatki[0].isPinned = !notes.notatki[0].isPinned
        expect(notes.notatki[0].isPinned).toBe(true)
    })
})
/*
import 'expect-puppeteer'
describe('Puppeteer-tests', () => {

    beforeAll(async () => {
        await page.goto('C:\Users\hpr1\source\repos\WebApp_laboratories\WebApp_laboratories\Lab4\dist\index.html');
      });
    
      it('should be titled "NoteKeep"', async () => {
        await expect(page.title()).resolves.toMatch('NoteKeep');
      });
})
*/

/*
    komendy do testów:
        npm install --save-dev ts-jest @types/jest
        npx jest --watch
*/