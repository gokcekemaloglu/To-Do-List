// <li class="todoItem">
//      <i class="fa-regular fa-circle"></i>
//      <p class="todoText">Buy milk</p>
//      <i class="fa-solid fa-trash-can deleteTask"></i>
// </li>
// <li class="todoItem checked">
//      <i class="fa-regular fa-circle-check"></i>
//      <p class="todoText">Buy milk</p>
//      <i class="fa-solid fa-trash-can deleteTask"></i>
// </li> 


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

const renderTodoItem = () => {
    const todoItem = document.createElement("li")
    todoItem.classList.add("todoItem")

    const checkButton = document.createElement("i")
    checkButton.classList.add("fa-regular", "fa-circle")
    todoItem.addEventListener("click", toggleComplete)
    todoItem.appendChild(checkButton)


    const textElement = document.createElement("p")
    textElement.classList.add("todoText")
    textElement.textContent = todoInput.value
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
    }else{
        renderTodoItem(todoInput.textContent)
    }

}


addTaskButton.addEventListener("click", addTask)

            // <li class="todoItem">
            //     <i class="fa-regular fa-circle"></i>
            //     <p class="todoText">Buy milk</p>
            //     <i class="fa-solid fa-trash-can deleteTask"></i>
            // </li>