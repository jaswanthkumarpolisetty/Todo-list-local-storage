const todoInput = document.getElementById("todo-input")
const addTaskButton = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list");

let tasks = localStorage.getItem('tasks') || [];
addTaskButton.addEventListener('click', ()=>{
    const taskTest = todoInput.value.trim()
    if(taskTest === "") return ;
    const newTask = {
        id:Date.now(),
        text: taskTest,
        completed: false 
    }
    tasks=[...tasks,newTask];
    saveTasks();
    console.log(task);
    todoInput.value="";
});

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}