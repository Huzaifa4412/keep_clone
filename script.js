// Getting Elements
let mainBtn = document.querySelector(".mainBtn")
let main = document.querySelector("main")

// ? Adding Event Listener to Note
let updateLocalStorage = () => {
    let textAreas  = document.querySelectorAll("textarea");
    let notes = [];
    textAreas.forEach((currVal)=> notes.push(currVal.value))
    localStorage.setItem("notes", JSON.stringify(notes))
}
function mainFunc (text = "") {
        let note = document.createElement("div");
    note.classList.add("note");
    let noteContent = `
    <div class="actionBtn w-full h-[50px] px-2 text-[14px] flex items-center justify-end gap-2">
            <i class="ri-file-copy-2-line copy font-bold text-xl absolute left-1 p-2 text-zinc-700"></i>
                <i class="ri-edit-2-line edit p-2 bg-green-400 rounded-full"></i>
                <i class="ri-delete-bin-line delect bg-red-400 p-2 rounded-full "></i>
            </div>
            <div class="main ${text ? "" : "hidden"} px-2 pb-5"></div>
            <textarea
                class="textArea w-full h-[calc(100%-50px)] pb-5 text-slate-500 scroll-auto outline-none px-2 ${text ? "hidden" : ""}"></textarea>
    `;
    note.insertAdjacentHTML("afterbegin", noteContent)
    
    main.append(note)

    // Getting Reference 
    let delIcon = note.querySelector(".delect");
    let editIcon = note.querySelector(".edit");
    let mainDiv = note.querySelector(".main");
    let textArea = note.querySelector("textarea");
    textArea = textArea.value.trim();
    // ! Making Delect Function
    delIcon.addEventListener("click", function (e) {
        note.remove();
        
    })
    textArea.value = text;
    mainDiv.innerHTML = text

    // Making Toggle Functionality
    editIcon.addEventListener("click", ()=> {
        mainDiv.classList.toggle("hidden");
        textArea.classList.toggle("hidden");

    })

    // Adding Event on text Area
    textArea.addEventListener("change", (dets)=> {
        let value = dets.target.value;
        console.log(value);
        mainDiv.innerHTML = value
        updateLocalStorage()
    })
    }
mainBtn.addEventListener("click", ()=> {
        
    
    mainFunc()
    copyButton()
})
const notes = JSON.parse(localStorage.getItem("notes"))
    if(notes) {
    notes.forEach((currVal)=> mainFunc(currVal))
}
document.querySelector(".delAll").addEventListener("click", ()=> {
    localStorage.clear("notes")
    location.reload()
})
// Making Copy Button
function copyButton() {
    let copyBtns = document.querySelectorAll(".copy")
    console.log(copyBtns);
}
