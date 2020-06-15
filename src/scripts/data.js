
// let journalEntries = []

// const getJournalData = () => {
//     return fetch("http://localhost:3000/entries").then(
//         (httpResponse) => {
//             return httpResponse.json()
//         }
//     )
//     .then (
//         (arrayOfJournal) => {
//             journalEntries = arrayOfJournal
//             console.log(journalEntries)
//         }
//     )
// }


const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        
    }
}
export default API;