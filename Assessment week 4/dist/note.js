"use strict";
let submitBtn = document.querySelector(".submit-btn");
let notesText = document.querySelector(".notes");
let notes = [];
submitBtn.addEventListener("click", (e) => {
    notes.push(notesText.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
});
