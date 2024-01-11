import Task from "./classes/Task.js";
import FormAdd from "./classes/FormAdd.js";
const root = document.getElementById("root");

const state = [
  { title: "Faire de la moto", id: 1, done: true },
  { title: "Faire de la voile", id: 2, done: false },
  { title: "Faire la fête", id: 3, done: true }
]
// Création du formulaire
new FormAdd(root);

// Création visuelle  des tâches à partir de l'état (state)
state.forEach((task) => {
  const t = new Task(task.title, task.id, task.done, root);
})
