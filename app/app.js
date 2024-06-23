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

const renderTodoItem = () => {
    const todoItem = document.createElement("li")
    todoItem.classList.add("todoItem")

    const deleteButton = document.createElement("i")
    deleteButton.classList.add("fa-regular", "fa-circle")
    todoItem.appendChild(deleteButton)


    const textElement = document.createElement("p")
    textElement.classList.add("todoText")
    textElement.textContent = todoInput.value
    todoItem.appendChild(textElement)


    const checkButton = document.createElement("i")
    checkButton.classList.add("fa-solid", "fa-trash-can", "deleteTask")
    todoItem.appendChild(checkButton)

    todosContainer.appendChild(todoItem)
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