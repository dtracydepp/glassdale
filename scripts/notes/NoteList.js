import { getCriminals, useCriminals } from '../criminals_/CriminalDataProvider.js';
import {NoteAsHTML} from './Note.js';
import {getNotes, useNotes, deleteNote} from './NotesDataProvider.js'

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



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})