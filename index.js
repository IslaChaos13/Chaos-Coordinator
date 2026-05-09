const fin= document.querySelector('#completedList')

let done = false;

const taskGroup = [{
    input: document.querySelector('#inputTask'),
    list: document.querySelector('#mainList'),
    button: document.querySelector('#listBtn'),
},{
    input: document.querySelector('#wInput'),
    list: document.querySelector('#wList'),
    button: document.querySelector('#wBtn'),

},{
    input: document.querySelector('#sInput'),
    list: document.querySelector('#sList'),
    button: document.querySelector('#sBtn'),

}]

function addTask(input, list){
    {
        let text = input.value;
        const li = document.createElement("li")
        li.textContent = text;
        list.appendChild(li);
        input.value = "";
    };
}
taskGroup.forEach(group => {
    group.button.addEventListener('click', () => {
        addTask(group.input, group.list);
    });

    group.input.addEventListener("keydown", (event) => {
        if (event.key ==='Enter'){
        event.preventDefault()
        addTask(group.input, group.list);
        }
    })
    group.list.addEventListener("mouseover", (event) => {
        if (event.target.tagName === "LI"){
        event.target.style.color = "blue";
        event.target.style.fontWeight = "bold"
        }}
    )

    group.list.addEventListener("mouseout", (event) => {
        if (event.target.tagName === "LI"){
        event.target.style.color = "";
        event.target.style.fontWeight = "";

    group.list.addEventListener('click', (event) => {
        if (event.target.tagName !== "LI") return;

        const item = event.target
        item.style.textDecoration = "line-through";
        fin.appendChild(item)
    })

}})})

