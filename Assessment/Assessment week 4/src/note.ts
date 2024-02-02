let submitBtn = document.querySelector(".submit-btn") as HTMLButtonElement;
let notesText = document.querySelector(".notes") as HTMLButtonElement;

let notes: any[]=[]

submitBtn.addEventListener("click",(e)=>{
    notes.push(notesText.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
})