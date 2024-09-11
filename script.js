//create variables & store elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");


function addTask() {

    let taskText = taskInput.value.trim();

    if(taskText !== "") { 
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem)
        taskInput.value =""
    }
    else {
        alert("pls enter a task... ")
    }
}

function createTaskItem(Task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `${Task} <button class="delete-btn">Delete</button>`;
    let deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () =>li.remove())

    return li;
}


function setupEventListener(){
    addTaskBtn.addEventListener("click",addTask)
}

setupEventListener()