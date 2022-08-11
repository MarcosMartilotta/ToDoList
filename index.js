//Guarda en localStorage
const saveItem = (task) => {
  //Las keys son la longitud del localStorage y a su vez el id de cada tarea
  localStorage.setItem(`${localStorage.length}`, task);
};

//renderiza en pantalla las tareas guardadas en el localStorage
const renderTasks = () => {
  const taskList = document.getElementById("taskList");

  //recorro el local storage, en cada iteracion tengo un elemento del localStorage en forma de array
  Object.entries(localStorage).map((element) => {
    const newTask = document.createElement("li");
    newTask.setAttribute("id", `${parseInt(element[0]) + 1}`);
    newTask.classList.add("task");
    newTask.innerHTML = element[1];
    taskList.appendChild(newTask);

    //agrego efecto al doble click al ser eliminadas
    newTask.addEventListener("dblclick", function () {
      newTask.classList.add("fadeOut");
      newTask.style.opacity = "0";

      setTimeout(function () {
        console.log(newTask.className);
        taskList.removeChild(newTask);
        console.log(newTask.id - 1);
        localStorage.removeItem(newTask.id - 1);
      }, 1000);
    });
  });
};

//renderiza en pantalla cada tarea agregada en una sesion abierta.
const addTask = () => {
  const input = document.getElementById("input-task").value; //tomo el valor
  saveItem(input); //Guarda el valor en localStorage
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.setAttribute("id", localStorage.length);
  newTask.classList.add("task");
  newTask.innerHTML = input;
  taskList.appendChild(newTask);

  newTask.addEventListener("dblclick", function () {
    newTask.classList.add("fadeOut");
    newTask.style.opacity = "0";
    setTimeout(function () {
      console.log(newTask.className);
      taskList.removeChild(newTask);
      console.log(newTask.id - 1);
      localStorage.removeItem(newTask.id - 1);
    }, 1000);
  });
};

window.onload = () => {
  //Al cargar primero renderizo todas las tareas
  renderTasks();
  const input = document.getElementById("input-task");
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", () => {
    if (input.value != "") addTask();
    input.value = "";
  });

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && input.value != "") {
      addTask();
      input.value = "";
    }
  });
};
