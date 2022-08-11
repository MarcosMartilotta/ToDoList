


const saveItem = (task) => {
    localStorage.setItem(`${localStorage.length}`, task); //El id será 
}

 
const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    
    Object.entries(localStorage).map((element)=> {
        const newTask = document.createElement('li');
        newTask.setAttribute('id', `${parseInt(element[0]) + 1}`)
        newTask.classList.add('task');
        newTask.innerHTML = element[1];
        taskList.appendChild(newTask);
        newTask.addEventListener('dblclick', function() {

            newTask.classList.add('fadeOut');
            newTask.style.opacity = '0'; 

            setTimeout(function(){console.log(newTask.className);
            taskList.removeChild(newTask);
            console.log(newTask.id - 1);
            localStorage.removeItem(newTask.id - 1) 
            }, 1000)
        })
    })
} 

const addTask = () => {

    const input = document.getElementById('input-task').value; //tomo el valor
    saveItem(input); //Guarda el valor en localStorage
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.setAttribute('id', localStorage.length)
    newTask.classList.add('task');
    newTask.innerHTML = input;
    taskList.appendChild(newTask);
    newTask.addEventListener('dblclick', function() {

    newTask.classList.add('fadeOut');
    newTask.style.opacity = '0';   
    setTimeout(function(){
        console.log(newTask.className)
        taskList.removeChild(newTask);
        console.log(newTask.id - 1);
        localStorage.removeItem(newTask.id - 1); 

    }, 1000)

    })
}

window.onload = () => {
     renderTasks(); 
    const input = document.getElementById('input-task');
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', ()=>{
        if(input.value != "")
            addTask();
    }
    );

    input.addEventListener('keyup' , function (event) {
        if (event.key === 'Enter' && input.value != "") {

            addTask();
        }
    });
}


/* localStorage.setItem('0', 'Inicio'); */ //inicializo el local storage



