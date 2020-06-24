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

  // this is the hidden input 
    let entryValue = document.querySelector("#entry").value
           // putting info from html
            let date = document.querySelector("#journalDate").value
            let conceptsCovered = document.querySelector("#conceptsCovered").value 
            let entry = document.querySelector("#journalEntry").value
            let mood = document.querySelector("#mood").value
            let hiddenId = document.querySelector("#entry").value
            if( document.querySelector("#entry").value !== ""){
              // clearing the entries
              API.editJournalEntry(hiddenId).then(() => API.getJournalEntries()).then((response) => renderJournalEntries(response))
              document.querySelector("#journalDate").value =""
              document.querySelector("#conceptsCovered").value =""
              document.querySelector("#journalEntry").value = ""
              document.querySelector("#mood").value = "Happy"
            
            }else {
               // if all boxes are not filled then alert will pop up
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
      }
      // this radio buttom is running through each mood 
     

      document.querySelector("#Happy").addEventListener("click", event => {
            console.log("Is this going to work")
      })
//          moodForm.addEventListener("click", event => {
//            console.log("click button")
//           let filterMood
//           document.getElementsByName("mood").forEach(() => {
//             filterMood = event.target.value
//             console.log("test", filterMood)
//           })
//          })
      
        
//  filterMood()

 



        
           
      
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
            //  editing the journal entries
              }else if(event.target.id.startsWith("editEntry--")){
                  const journalEntrytoEdit = event.target.id.split("--")[1];
                  // this is filling the form with the entryobject info when you hit edit. 
                  // The #date,concepts,entry,mood, entry is coming from the ids in html
               
                API.getSingleJournalEntry(journalEntrytoEdit).then((entryObject => {
                     document.querySelector("#journalDate").value = entryObject.date
                     document.querySelector("#conceptsCovered").value = entryObject.concepts
                     document.querySelector("#journalEntry").value = entryObject.content
                     document.querySelector("#mood").value = entryObject.mood
                     document.querySelector("#entry").value = entryObject.id
                    
                }))

               
                 
                  .then(() => API.getJournalEntries())

                  .then(response => renderJournalEntries(response))
              }
       })
})