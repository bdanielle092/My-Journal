
// this is out putting each line of code with string interpolaton
const makeJournalEntryComponent = (journalEntry) => {
    const journalHTMLRepresentataion = `<section> 
    ${journalEntry.date}<br>
    ${journalEntry.concepts}<br>
    ${journalEntry.content}<br>
    ${journalEntry.mood}

    </section>`
    return journalHTMLRepresentataion
}

export default makeJournalEntryComponent;








