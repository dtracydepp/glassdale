import {NoteAsHTML} from './Note.js'
import {getNotes, useNotes} from './NotesDataProvider.js'

// Get the notes from the api, iterate the notes array with HTML representations and render notes to the notes container to the DOM.
const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())



export const NoteList = () => {
    getNotes()
    .then(() => {
    const allNotes = useNotes()
    render(allNotes) 

    })
}

const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        notesHTMLRepresentations += NoteAsHTML(note)
    }
    notesContainer.innerHTML = `
            ${notesHTMLRepresentations}
    `
}