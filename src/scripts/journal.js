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
        // this radio buttom is running through each mood 
        let radioButton = document.getElementsByName(mood)
            radioButton.forEach(button => {
                button.addEventListener("click", event => {
            const mood = event.target.value
            
        })
    })
  
      
    //   this is the delete button
    // the querySelector is getting info from the entryLog and deleting 
       document.querySelector(".entryLog").addEventListener("click", event => {
        //    this is targeting the delete button in entryComponent
             if(event.target.id.startsWith("deleteEntry--")){
                //  this look at this id and divide left and right  delete entry and the second is the id number
                  const journalEntrytoDelete = event.target.id.split("--")[1];
                //   this getting info from the api deleteJournalEntry
                  API.deleteJournalEntry(journalEntrytoDelete)
                //   this is getting info from the api getJournalEntries
                  .then(() => API.getJournalEntries())
                //   this is getting info entryList
                  .then(response => renderJournalEntries(response))

              }else if(event.target.id.startsWith("editEntry--")){
                  const journalEntrytoEdit = event.target.id.split("--")[1]
                  API.getSingleJournalEntry(journalEntrytoEdit)
                  .then(() => API.getJournalEntries())

                  .then(response => upDateFormFields(response))
              }
       })
    
        
            


