// this is out putting the journal entires

import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = (journalEntries) => {
   
    for (const journalObject of journalEntries) {

        
        const journalHTML = makeJournalEntryComponent(journalObject)

        const journalArticleElement = document.querySelector(".entryLog")

       
        journalArticleElement.innerHTML +=  journalHTML
    }
}

export default renderJournalEntries;