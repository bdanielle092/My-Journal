// these are import from other js files
import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createjournalEntry from "./createEntry.js"




API.getJournalEntries()
.then(response => {
    renderJournalEntries(response)
})

// this is my addEventListener for my save button
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
              // this put the mood back to Happy
              document.querySelector("#mood").value = "Happy"
            
            }else {
               // if all boxes are not filled then alert will pop up
            if(date === "" || conceptsCovered === "" || entry === "" || mood === ""){
              alert("Please complete fields")
        
          
          }else {
          // getting info from newEntryObj
          let newEntryObj = createjournalEntry(date, conceptsCovered, entry, mood)  
          // calling saveJournalEntry and saving the entries
          API.saveJournalEntry(newEntryObj).then ( () => {
              //then its calling the info from the api and getJournalEntries 
              return API.getJournalEntries ()

              // then its getting info from entry component from journalEntry
          }).then ((apiJournalEntry) => {
              // getting info from entryList and renderJournalEntries
              return renderJournalEntries(apiJournalEntry)
          })
           }
      }
 
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
    //  this is the filter buttons
    //  this radio buttom is running through each mood
    // this pulls info from the name in html
            document.getElementsByName("mood").forEach((moods) => { 
              // this is the button
              moods.addEventListener("click", event => {
              const moodFilter = event.target.value
              // this get all the journal entries
              API.getJournalEntries().then( (journalMood) => 
               
                entryMood(moodFilter, journalMood)
              ).then( (entryByMood) => { 
                renderJournalEntries(entryByMood)
              })
                
            })
            // this filters all the moods
      })
      const entryMood = ( moodFilter, journalMood) => { 
      const filtered = journalMood.filter(moodEntry => {
        if(moodFilter === "showAll"){
           return moodEntry
        }else {
        return moodFilter === moodEntry.mood
        }
      })

    return filtered
    }
    // This is the search button
    const searchBar = document.querySelector("#search")
    const filterEntry = document.querySelector(".filterLog")
    const entryLog = document.querySelector(".entryLog")
    searchBar.addEventListener('keypress', event => {
      // it targeting every key you type in the search bar
      const input = event.target.value
      API.getJournalEntries().then(entries => {
        if (event.key === "Enter") {
            entryLog.classList.add("hidden")
          const filteredEntries = entries.filter(entry => {
            return entry.content.includes(input)
          })
          filteredEntries.forEach(entry => {
            filterEntry.innerHTML += `
            <div>${entry.date}</div>
            <div>${entry.concepts}</div>
            <div>${entry.content}</div>
            <div>${entry.mood}</div>
            <br/>
            <button id="deleteEntry--${journalEntry.id}">Delete</button>
            <button id="editEntry--${journalEntry.id}">Edit</button>
            `
          })
        }else {
          API.getJournalEntries()
          .then(response => {
        renderJournalEntries(response)
          })
        }
      })
    })
