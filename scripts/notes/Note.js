// converts object to HTML and return that string

export const NoteAsHTML =(noteObj) => {
    return `
    <div class="note">
        <h5>Author: ${noteObject.author}</h5>
        <p>Suspect: ${noteObject.suspect}</p>
        <p>Date of Interview: ${noteObject.dateofInterview}</p>
        <p>Time Note Entered: ${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObject.note}</p>
    </div>
    `
}
