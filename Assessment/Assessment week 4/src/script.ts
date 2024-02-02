let content=document.querySelector(".content") as HTMLDivElement;
let noteContainer = document.querySelector(".note-container") as HTMLDivElement;
let addNoteContainer = document.querySelector(".add-btn") as HTMLDivElement;

noteContainer.addEventListener("click",(e)=>{
    let url="note.html";
    window.location.href=url;
})

addNoteContainer.addEventListener("click",(e)=>{
    displayNotes();
    
});

function displayNotes(){
    let noteContainer=document.createElement("div");
    noteContainer.classList.add("note-container");

    let noteHeadCont=document.createElement("div");
    noteHeadCont.classList.add("heading-div");

    let noteHeading=document.createElement("input");
    noteHeading.classList.add("heading-input");
    let inputTxt=noteHeading.value;

    let noteBtn=document.createElement("button");
    noteBtn.classList.add("note-btn");
    noteBtn.textContent="Submit";
    noteBtn.addEventListener("click",(e)=>{
        noteHeadCont.removeChild(noteBtn);
        // noteHeadCont.removeChild(noteHeading);
        // noteContainer.removeChild(noteHeadCont);
        // content.removeChild(noteContainer);

        // let noteHeadTxt=document.createElement("h2");
        // noteHeadTxt.classList.add("title");
        // noteHeadTxt.textContent=inputTxt;

        // noteHeadCont.appendChild(noteHeadTxt);
        // noteContainer.appendChild(noteHeadCont);
        // content.appendChild(noteContainer);

        

        // let noteContainer = document.createElement("div");
        // noteContainer.classList.add("note-container");

        // let headContent=document.createElement("h2");
        // headContent.classList.add("title")
        // headContent.textContent=noteHeading.textContent;

        // noteContainer.appendChild(headContent);
        // content.appendChild(noteContainer);
    })

    noteHeadCont.appendChild(noteHeading);
    noteHeadCont.appendChild(noteBtn);
    noteContainer.appendChild(noteHeadCont);
    content.appendChild(noteContainer);
}
