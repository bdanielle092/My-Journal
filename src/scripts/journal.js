// these are import from other js files
import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createjournalEntry from "./createEntry.js"

// 
API.getJournalEntries()
.then(response => {
    renderJournalEntries(response)
})

// this is my addEventListener for my button
document.querySelector("#save").addEventListener("click", event => {
       
           // putting info from html
            let date = document.querySelector("#journalDate").value
            let conceptsCovered = document.querySelector("#conceptsCovered").value 
            let entry = document.querySelector("#journalEntry").value
            let mood = document.querySelector("#mood").value
            if(date === "" || conceptsCovered === "" || entry === "" || mood === ""){
                alert("Please complete fields")
             }else {
            // getting info from newEntryObj
            let newEntryObj = createjournalEntry(date, conceptsCovered, entry, mood)  
            // calling saveJournalEntry 
            API.saveJournalEntry(newEntryObj).then ( () => {
                // calling the info from the api and getJournalEntries
                return API.getJournalEntries ()

                // getting info from entry component from journalEntry
            }).then ((apiJournalEntry) => {
                // getting info from entryList and renderJournalEntries
                return renderJournalEntries(apiJournalEntry)
            })
             }
        })

