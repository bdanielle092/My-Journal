
// this is out putting each line of code with string interpolaton
const makeJournalEntryComponent = (journalEntry) => {
    const journalHTMLRepresentataion = `<section> 
    ${journalEntry.date}<br>
    ${journalEntry.concepts}<br>
    ${journalEntry.content}<br>
    ${journalEntry.mood}<br>
    <button id="deleteEntry--${journalEntry.id}">Delete</button>
    <button id="editEntry--${journalEntry.id}">Edit</button>
    </section>`
    return journalHTMLRepresentataion
}

export default makeJournalEntryComponent;
// the button above it the delete button








