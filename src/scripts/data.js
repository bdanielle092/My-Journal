const API = {
//    getting all the entriest
    getJournalEntries: () => {
        return fetch("http://localhost:8088/entries")
        // this is parsing the response to json for uses on the dom
        .then(response => response.json())
        
    },
    // only getting new entries
        saveJournalEntry: (newEntryObject) => {
            return fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntryObject)
            })
        }
}



export default API