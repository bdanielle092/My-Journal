// this is out putting the journal entires
const outputJournalEntries = (journalEntries) => {
    
    for (const  journalObject of journalEntries) {

        
        const journalHTML = makeJournalEntryComponent(journalObject)

        const journalArticleElement = document.querySelector(".entryLog")

       
        journalArticleElement.innerHTML +=  journalHTML
    }
}
outputJournalEntries(journalEntries)