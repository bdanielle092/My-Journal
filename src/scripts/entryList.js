// this is out putting the journal entires

import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = (journalEntries) => {
    // this is declearing from the article in html
    const journalArticleElement = document.querySelector(".entryLog")
    // this make sure it dosent populate old post
    journalArticleElement.innerHTML = ""
    for (const journalObject of journalEntries) {
    // this is pull the info from entryComponent
        const journalHTML = makeJournalEntryComponent(journalObject)
    // this makes sure its prints to the dom 
       journalArticleElement.innerHTML +=  journalHTML
    }
}

export default renderJournalEntries;