import DomUtils from "./DomUtils.js";

export default class Task extends DomUtils {
  constructor(task, root, setTasks) {
    super();
    this.task = task;
    this.root = root;
    this.setTasks = setTasks;

    // rendu du dom
    this.domElts = this.render();

    // Gestion des événements
    this.handleEvents();
  }
  render() {
    const section = this.addDomElement("section", "", this.root, { class: "section-task d-flex justify-content-between my-2" });
    const h2 = this.addDomElement("h2", this.task.title, section);
    h2.style.textDecoration = this.task.done ? "line-through" : "";
    const wrapper = this.addDomElement("div", "", section);
    const btnValidate = this.addDomElement("button", this.task.done ? "Invalider" : "Valider", wrapper, { class: "btn btn-secondary me-2" });
    const btnDelete = this.addDomElement("button", "Supprimer", wrapper, { class: "btn btn-danger" });
    return {
      btnValidate,
      btnDelete,
      h2,
      section
    }
  }
  handleEvents() {
    console.log(`Dans handleEvents de Task`);
    // Récupération de la référence du bouton "valider"
    this.domElts.btnValidate.addEventListener("click", (event) => {
      console.log(`Clic sur bouton valider`);
      this.task.done = !this.task.done;
      this.domElts.btnValidate.innerText = this.task.done ? "Invalider" : "Valider";
      this.domElts.h2.style.textDecoration = (this.task.done) ? "line-through" : "";
    })

    // Récupération de la référence du bouton supprimer
    this.domElts.btnDelete.addEventListener("click", () => {
      console.log(`Clic sur bouton supprimer`);
      //this.domElts.section.remove();
      // Appel à la fonction de modification de l'état
      this.setTasks(this.task, "delete")
    })
  }

}