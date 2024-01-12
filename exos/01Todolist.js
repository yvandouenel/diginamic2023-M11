import Task from "./classes/Task.js";
import FormAdd from "./classes/FormAdd.js";
const root = document.getElementById("root");

// tasks représente l'état (state) des tâches, c'est à dire dans notre cas, l'état de l'application
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
      tasks.push(data);
      // rappeler l'affichage de la page à partir du state (renderTasks)
      renderTasks();
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
    const t = new Task(task, root, setTasks);
  })
  console.log(`tasks : `, tasks);
}



renderTasks();

