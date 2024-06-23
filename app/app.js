const addTaskButton = document.querySelector(".addTask")
const todoInput = document.querySelector(".todoInput")
const todosContainer = document.querySelector(".todos")

const toggleComplete = (event) => {
    const todoItem = event.target.parentNode
    const todoText = todoItem.querySelector(".todoText").textContent  //!
    todoItem.classList.toggle("checked")
    event.target.classList.toggle("fa-circle-check")
    event.target.classList.toggle("fa-circle")   
    updateLocalStorage(todoText, 'toggle')  //! 
}

const removeItem = (event) => {
    // todosContainer.removeChild(event.currentTarget.parentElement)
    //! Buradan
    const todoItem = event.currentTarget.parentElement
    const todoText = todoItem.querySelector(".todoText").textContent
    todosContainer.removeChild(todoItem)
    updateLocalStorage(todoText, 'remove')
    //! buraya kadar
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

    //! Buradan
    if (completed) {
        todoItem.classList.add("checked")
    } //! Buraya kadar



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
    // todoInput.value = ""
    // todoInput.focus()
}

const addTask = () => {
    if (todoInput.value === "") {
        alert("Please enter a to-do")
    }else if (isDuplicate(todoInput.value)) {
        alert("This to-do item already exists")
    } else{
        // renderTodoItem(todoInput.textContent)
        renderTodoItem(todoInput.value)
        updateLocalStorage(todoInput.value, 'add')
    }

    todoInput.value = "" //!
    todoInput.focus()  //!
}

//! Buradan
const updateLocalStorage = (text, action) => {
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    if (action === 'add') {
        todos.push({ text: text, completed: false })
    } else if (action === 'remove') {
        todos = todos.filter(todo => todo.text !== text)
    } else if (action === 'toggle') {
        todos = todos.map(todo => {
            if (todo.text === text) {
                return { text: todo.text, completed: !todo.completed }
            }
            return todo
        })
    }
    localStorage.setItem("todos", JSON.stringify(todos))
}

const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach(todo => renderTodoItem(todo.text, todo.completed))
}
//! buraya kadar

addTaskButton.addEventListener("click", addTask)
window.addEventListener("load", loadTodos) //!






// if (textElement.textContent.includes(todoInput.value)) {
//     alert("Please enter a different to-do")
// }else{
//     textElement.textContent = todoInput.value
// }