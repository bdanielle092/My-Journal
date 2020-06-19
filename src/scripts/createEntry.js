// this is a factory function 
// getting these four things
const createjournalEntry = (date, conceptsCovered, entry, mood) => {
     const newJournalEntry = {
        // pulling from id in html and making it the value 
        date: date,
        // called concepts becasue that is the name in entryComponent
        concepts: conceptsCovered ,
        // // called content becasue that is the name in entryComponent
        content: entry,
        mood: mood
    }
    return newJournalEntry   
}

export default createjournalEntry

