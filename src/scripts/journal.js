/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createjournalEntry from "./createEntry.js"


API.getJournalEntries()
.then(response => {
    renderJournalEntries(response)
})

// document.querySelector("#save").addEventListener("click", event => {
//        if(event.target.id.startsWith("save")){
//             console.log("click save event")
//             // putting info from html
//             let date = document.querySelector("#journalDate").value
//             let conceptsCovered = document.querySelector("#conceptsCovered").value 
//             let entry = document.querySelector("#journalEntry").value
//             let mood = document.querySelector("#mood").value
//             // getting info from newEntryObj
//             let newEntryObj = createjournalEntry(date, conceptsCovered, entry, mood)  
//             // calling saveJournalEntry 
//             API.saveJournalEntry(newEntryObj) 
//         }
// });
