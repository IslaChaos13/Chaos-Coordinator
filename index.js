const input = document.querySelector('#inputTask')
const button = document.querySelector('#listBtn')
const list = document.querySelector('#mainList')
let done = false;

function addTask(event) {

    let text = input.value

    const li = document.createElement("li")

    li.textContent = text;

    list.appendChild(li);
    input.value = "";
}

button.addEventListener('click', addTask)
input.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        addTask();
    }
});

list.addEventListener("mouseover", (event)=> {
    if (event.target.tagName === "LI"){
        event.target.style.color = "blue";
        event.target.style.fontWeight = "bold"
    }
});

list.addEventListener("mouseout", (event)=>{
    if (event.target.tagName === "LI"){
        event.target.style.color = "";
        event.target.style.fontWeight = "";
    }
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration = "line-through";
    }
});

list.addEventListener("click", (event) => {
    done = !done;

    if (done){
        event.target.style.textDecoration = "line-through";
    } else {
        event.target.style.textDecoration = "";
    }

});

list.addEventListener("click", (event) => {
    if (event.target.style.textDecoration === "line-through"){
        event.target.remove()
    }else{
        event.target.style.textDecoration = "line-through"}
});

list.addEventListener('contextmenu', (event))