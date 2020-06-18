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
.then((response) => renderJournalEntries(response))

document.querySelector("#save").addEventListener("click", event => {
    console.log("hello")
});



