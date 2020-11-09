import { getCriminals, useCriminals } from "../CriminalDataProvider.js"
import {saveNote} from "./NotesDataProvider.js"


// creates the note form and renders to the DOM, click event for the submit button, and submit will grab values from input and build a new object to post note on API.

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (arrayOfCriminals) => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Please select a criminal...</option>
            ${
                arrayOfCriminals.map(criminal => {
                    return `<option value="${ criminal.id }">${ criminal.name }</option>`
                }).join("")            
            }
        
    </select>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

eventHub.addEventListener("click",clickEvent => {
    console.log(clickEvent)
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value 
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

// makes note object
        const newNote = {
            dateOfInterview,
            author,
            suspect,
            note,
            timestamp
        }
// Post object to database/json file
        saveNote(newNote)
    }

})



export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const listOfCriminals = useCriminals()
        render(listOfCriminals)
    })
   
}