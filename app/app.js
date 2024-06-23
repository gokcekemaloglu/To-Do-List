const addTaskButton = document.querySelector(".addTask")
const todoInput = document.querySelector(".todoInput")
const todosContainer = document.querySelector(".todos")

const toggleComplete = (event) => {
    const todoItem = event.target.parentNode
    todoItem.classList.toggle("checked")
    event.target.classList.toggle("fa-circle-check")
    event.target.classList.toggle("fa-circle")    
}

const removeItem = (event) => {
    todosContainer.removeChild(event.currentTarget.parentElement)
}

const isDuplicate = (text) => {
    const todos = todosContainer.querySelectorAll(".todoText")
    for (let todo of todos) {
        if (todo.textContent === text) {
            return true
        }
    }
    return false
}

const renderTodoItem = () => {
    const todoItem = document.createElement("li")
    todoItem.classList.add("todoItem")



    const checkButton = document.createElement("i")
    checkButton.classList.add("fa-regular", "fa-circle")
    checkButton.addEventListener("click", toggleComplete)
    todoItem.appendChild(checkButton)


    const textElement = document.createElement("p")
    textElement.classList.add("todoText")
    textElement.textContent = todoInput.value.toUpperCase()
    todoItem.appendChild(textElement)


    const deleteButton = document.createElement("i")
    deleteButton.classList.add("fa-solid", "fa-trash-can", "deleteTask")
    deleteButton.addEventListener("click", removeItem)
    todoItem.appendChild(deleteButton)


    todosContainer.appendChild(todoItem)
    todoInput.value = ""
    todoInput.focus()
}

const addTask = () => {
    if (todoInput.value === "") {
        alert("Please enter a to-do")
    }else if (isDuplicate(todoInput.value)) {
        alert("This to-do item already exists")
    } else{
        renderTodoItem(todoInput.textContent)
    }
}

addTaskButton.addEventListener("click", addTask)






// if (textElement.textContent.includes(todoInput.value)) {
//     alert("Please enter a different to-do")
// }else{
//     textElement.textContent = todoInput.value
// }