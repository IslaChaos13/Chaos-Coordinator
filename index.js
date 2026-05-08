const input = document.querySelector('#inputTask')
const button = document.querySelector('#listBtn')
const list = document.querySelector('#mainList')

function addTask(event) {
    event.preventDefault()

    let text = input.value

    const li = document.createElement("li")

    li.textContent = text;

    list.appendChild(li);
    input.value = "";
}

button.addEventListener('click', addTask)