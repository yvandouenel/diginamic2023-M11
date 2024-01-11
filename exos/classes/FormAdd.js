import DomUtils from "./DomUtils.js";
import Task from "./Task.js";

export default class FormAdd extends DomUtils {
  constructor(root) {
    super();
    this.root = root;

    this.domElts = this.render();

    // Gestion des événements
    this.handleEvents();
  }
  render() {
    const form = this.addDomElement("form", "", root);
    const label = this.addDomElement("label", "Tâche : ", form, [{ for: "task-name" }]);
    const input = this.addDomElement("input", "", form, [{ id: "task-name" }, { type: "text" }]);
    const btnAddTask = this.addDomElement("button", "Ajouter", form, [{ type: "submit" }]);

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
      // Création d'une nouvelle tâche
      new Task(this.domElts.input.value, Math.floor(Math.random() * 10000), false, this.root);

    })
  }
}