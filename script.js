document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input")
    const addtasksButton = document.getElementById("add-tasks-btn")
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        rendertasks(task)
    });

    addtasksButton.addEventListener('click', () => {
        const tasksTest = todoInput.value.trim()
        if (tasksTest === "") return;
        const newtasks = {
            id: Date.now(),
            text: tasksTest,
            completed: false
        }
        tasks = [...tasks, newtasks];
        rendertasks(newtasks)
        savetasks();
        todoInput.value = "";
    });

    function rendertasks(task) {
        const li =document.createElement('li')
        li.setAttribute('data-id',task.id)
        if(task.completed)li.classList.add("completed")
        li.innerHTML=`<div>${task.text}</div>
        <button>delete</button>`
        li.addEventListener('click', (e)=>{
            if(e.target.tagName === 'BUTTON') return;
            li.classList.toggle("completed")
            task.completed=!task.completed;
            savetasks();
        })
        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation()  // prevent toggle for firing
            tasks=tasks.filter((t)=> t.id!==task.id);
            li.remove();
            savetasks();
        })
        todoList.appendChild(li);
    }

    function savetasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})
