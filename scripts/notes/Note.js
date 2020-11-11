// converts object to HTML and return that string

export const NoteAsHTML =(noteObject, criminalObject) => {
    return `
    <div class="note">
        <h5>Author: ${noteObject.author}</h5>
        <p>Suspected Criminal: ${criminalObject.name}</p>
        <p>Date of Interview: ${noteObject.dateofInterview}</p>
        <p>Time Note Entered: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObject.note}</p>
        <button id="deleteNote--${noteObject.id}">Delete</button>
    </div>
    `
}
