const journalEntriesfm = () => {
    
    for (const  journalObject of journalEntries) {

        
        const journalHTML = makeJournalEntryComponent(journalObject)

        const journalArticleElement = document.querySelector(".entryLog")

       
        journalArticleElement.innerHTML +=  journalHTML
    }
}