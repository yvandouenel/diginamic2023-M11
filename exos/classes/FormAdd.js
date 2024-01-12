import DomUtils from "./DomUtils.js";
import Task from "./Task.js";

export default class FormAdd extends DomUtils {
  constructor(root, setTasks) {
    super();
    this.root = root;
    this.setTasks = setTasks;

    this.domElts = this.render();

    // Gestion des événements
    this.handleEvents();
  }
  render() {
    const form = this.addDomElement("form", "", root, { class: "d-flex gap-2 mt-5 align-items-center" });
    const label = this.addDomElement("label", "Tâche : ", form, { for: "task-name" });
    const input = this.addDomElement("input", "", form, { id: "task-name", type: "text" });
    const btnAddTask = this.addDomElement("button", "Ajouter", form, { type: "submit", class: "btn btn-success" });

    return {
      form,
      input
    }
  }
  handleEvents() {
    this.domElts.form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(`Dans handleEvents submit`);
      // Récupération de la value de l'input
      console.log(`this.domElts.input.value : `, this.domElts.input.value);
      // Création d'une nouvelle tâche en l'ajoutant à tasks (le state)
      // La condition teste si la valeur de l'input (une string) est truly (false si == "", vrai sinon)
      if(this.domElts.input.value) this.setTasks({ title: this.domElts.input.value, id: Math.floor(Math.random() * 10000), done: false }, "add");

      // Remettre la value de l'input à "" (chaîne de caractères vide)
      this.domElts.input.value = "";

    })
  }
}