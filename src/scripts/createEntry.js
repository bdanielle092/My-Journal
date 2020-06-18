// this is a factory function 
const createjournalEntry = (date, concepts, entry, mood) => {
    newJournalEntry = {
        // pulling from id in html and making it the value 
        date: document.querySelector("#journalDate").value,
        concepts: document.querySelector("#conceptscovered").value ,
        entry: document.querySelector("#journalEntry").value,
        mood: document.querySelector("#mood").value
    }
    return journalEntry    
}

export default createjournalEntry


