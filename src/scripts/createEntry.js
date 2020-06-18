// this is a factory function 
// getting these four things
const createjournalEntry = (date, conceptsCovered, entry, mood) => {
     const newJournalEntry = {
        // pulling from id in html and making it the value 
        date: date,
        conceptsCovered: conceptsCovered ,
        entry: entry,
        mood: mood
    }
    return journalEntry    
}

export default createjournalEntry

