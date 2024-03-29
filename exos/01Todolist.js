import Task from "./classes/Task.js";
import FormAdd from "./classes/FormAdd.js";
import FormUpdate from "./classes/FormUpdate.js";
import { addTask, deleteTask, loadTasks } from "./services/fetchData.js"

const root = document.getElementById("root");

// tasks représente l'état (state) des tâches, c'est à dire dans notre cas, l'état de l'application
let tasks = [];

//Récupération des données via un fetch sur json-server
loadTasks()
  .then((tasksFormServer) => {
    console.log(`tasks reçues depuis le serveur `, tasksFormServer);
    // Alimentation de la variable tasks
    tasks = tasksFormServer;
    renderTasks();
  });

// Création des formulaires
new FormAdd(root, setTasks);
// Récupération de la référence du formulaire d'update
const formUdpdate = new FormUpdate(root, setTasks);

function setTasks(data, action) {
  switch (action) {
    case "delete":
      // supprimer la tâche concernée dans le state
      // Récupération de l'index de la tâche concernée
      const index = tasks.indexOf(data);
      tasks.splice(index, 1);
      // rappeler l'affichage de la page à partir du state (renderTasks)
      renderTasks();
      deleteTask(data.id);
      break;
    case "add":
      // Ajouter la nouvelle tâche à tasks
      tasks.push(data);
      // rappeler l'affichage de la page à partir du state (renderTasks)
      renderTasks();
      // Ajouter la tâche sur le serveur json-server
      addTask(data);
      break;
    case "update":
      // rappeler l'affichage de la page à partir du state (renderTasks)
      renderTasks();
      break;
    default:
      break;
  }
}
// Affichage des tâches
function renderTasks() {
  // Suppression des taches existantes
  const sectionsTasks = document.querySelectorAll(".section-task");
  sectionsTasks.forEach((sectionTask) => {
    sectionTask.remove();
  });
  // Création visuelle  des tâches à partir de l'état (state) préalablement classé via sort
  // Comme sort renvoie un tableau, on peut chaîner l'appel de sort avec l'appel de forEach (puisque cette méthode doit être appelé depuis l'instance d'un table)
  tasks.sort((a, b) => {
    // doit retourner un nombre négatif ou positif
    // Si le nombre est négatif, on change l'ordre, sinon l'ordre reste inchangé
    return a.done - b.done;
  }).forEach((task) => {
    const t = new Task(task, root, setTasks, formUdpdate);
  })
  console.log(`tasks : `, tasks);
}

renderTasks();

