import { getCriminals, useCriminals } from '../CriminalDataProvider.js';
import {NoteAsHTML} from './Note.js'
import {getNotes, useNotes} from './NotesDataProvider.js'

// Get the notes from the api, iterate the notes array with HTML representations and render notes to the notes container to the DOM.
const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())



export const NoteList = () => {
    getNotes()
    .then(() => getCriminals())
    .then(() => {
    const allNotes = useNotes()
    const allCriminals = useCriminals()
    render(allNotes, allCriminals) 

    })
}

const render = (notesArray, criminalsArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
        notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
    }
    notesContainer.innerHTML = `
            <h3>Case Notes</h3>
            ${notesHTMLRepresentations}
    `
}