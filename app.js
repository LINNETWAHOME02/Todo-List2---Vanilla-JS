//Selectors
const todoInput = document.getElementById('input-box');
const todoButton = document.querySelector('button');
const listContainer = document.getElementById('list-container');

//Functions
function addTask(){
    if (todoInput.value === ''){
        alert("No input recieved! Enter task to be added...")
    } else{
        //Create li element every time a task is added
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        listContainer.appendChild(li);

        //Add an x button to delete the task once clicked on
        let xIcon = document.createElement("span");
        xIcon.innerHTML = "\u2715";
        li.appendChild(xIcon);

    }
    //Clear input field
    todoInput.value = '';

    //Save data entered in local storage
    localstorage();
}

//Click to check task icon or click x icon to delete task
listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        localstorage();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        localstorage();
    }
}, false);


//Local storage to save data
function localstorage(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//Display data when browser is re-opened
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();