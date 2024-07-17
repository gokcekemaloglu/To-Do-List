const addTaskButton = document.querySelector(".addTask")
const todoInput = document.querySelector(".todoInput")
const todosContainer = document.querySelector(".todos")

const toggleComplete = (event) => {
    const todoItem = event.target.parentNode
    todoItem.classList.toggle("checked")
    event.target.classList.toggle("fa-circle-check")
    event.target.classList.toggle("fa-circle")    
    myLocalStorage()
}

const removeItem = (event) => {
    todosContainer.removeChild(event.currentTarget.parentElement)
    myLocalStorage()
}

const isDuplicate = (text) => {
    const todos = todosContainer.querySelectorAll(".todoText")
    for (let todo of todos) {
        if (todo.textContent.toUpperCase() === text.toUpperCase()) {
            return true
        }
    }
    return false
}

const myLocalStorage = () => {
    myData = []
    console.log(todosContainer.childNodes);
    [...todosContainer.childNodes].slice(3).forEach((item)=>{
        let newTodo ={
            text: item.querySelector(".todoText").textContent,
            completed: item.classList.contains("checked")
        }
        myData.push(newTodo)
    })
    localStorage.setItem("myData", JSON.stringify(myData))
}

const getLocalStorage = () => {
    if (localStorage.getItem("myData") !== null) {
        myData = JSON.parse(localStorage.getItem("myData"))
        myData.forEach((item) => {
        renderTodoItem(item.text, item.completed)
            
            
        })
    }
}

const renderTodoItem = (text, completed) => {

    const todoItem = document.createElement("li")
    todoItem.classList.add("todoItem")



    const checkButton = document.createElement("i")
    checkButton.classList.add("fa-regular", "fa-circle")
    checkButton.addEventListener("click", toggleComplete)
    todoItem.appendChild(checkButton)


    const textElement = document.createElement("p")
    textElement.classList.add("todoText")
    textElement.textContent = text.toUpperCase()
    todoItem.appendChild(textElement)


    const deleteButton = document.createElement("i")
    deleteButton.classList.add("fa-solid", "fa-trash-can", "deleteTask")
    deleteButton.addEventListener("click", removeItem)
    todoItem.appendChild(deleteButton)

    if (completed) {
        todoItem.classList.add("checked")
        todoItem.querySelector(".fa-circle").classList.toggle("fa-circle-check")
        todoItem.querySelector(".fa-circle").classList.toggle("fa-circle")

    }


    todosContainer.appendChild(todoItem)
    todoInput.value = ""
    todoInput.focus()
    myLocalStorage()
}

const addTask = () => {
    if (todoInput.value === "") {
        alert("Please enter a to-do")
    }else if (isDuplicate(todoInput.value)) {
        alert("This to-do item already exists")
    } else{
        renderTodoItem(todoInput.value)
    }
}

addTaskButton.addEventListener("click", addTask)

window.addEventListener("load", getLocalStorage)



console.log('I');
setTimeout(() => {
console.log('love');
}, 0);
console.log('Javascript!');


// if (textElement.textContent.includes(todoInput.value)) {
//     alert("Please enter a different to-do")
// }else{
//     textElement.textContent = todoInput.value
// }