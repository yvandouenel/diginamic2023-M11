import Task from "./classes/Task.js";
import FormAdd from "./classes/FormAdd.js";
const root = document.getElementById("root");

// tasks représente l'état des tâches, c'est à dire dans notre cas, l'état de l'application
const tasks = [
  { title: "Faire de la moto", id: 1, done: true },
  { title: "Faire de la voile", id: 2, done: false },
  { title: "Faire la fête", id: 3, done: true }
]
// Création du formulaire
new FormAdd(root, setTasks);

function setTasks(data, action) {
  switch (action) {
    case "delete":
      // supprimer la tâche concernée dans le state
      // Récupération de l'index de la tâche concernée
      const index = tasks.indexOf(data);
      tasks.splice(index, 1);
      // rappeler l'affichage de la page à partir du state (renderTasks)
      renderTasks();
      break;
    case "add":
      // Ajouter la nouvelle tâche à tasks

      // rappeler l'affichage de la page à partir du state (renderTasks)
      break;
    case "update":

      break;
    default:
      break;
  }
}
function renderTasks() {
  // Suppression des taches existantes
  const sectionsTasks = document.querySelectorAll(".section-task");
  sectionsTasks.forEach((sectionTask)=>{
    sectionTask.remove();
  });
  // Création visuelle  des tâches à partir de l'état (state)
  tasks.forEach((task) => {
    const t = new Task(task, root, setTasks);
  })
}



renderTasks();

