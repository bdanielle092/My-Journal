const API = {
//    getting all the entries
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
        },
        // this is deleting entries
        deleteJournalEntry: (id) => {
            return fetch(`http://localhost:8088/entries/${id}`, {
                method: "Delete",

        })
        .then(response => response.json())
    },
    // this is editing entries
    editJournalEntry: (id) => {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "POST",
    })
    .then(response => response.json())

   }
}


    




export default API