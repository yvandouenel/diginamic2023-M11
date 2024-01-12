import DomUtils from "./DomUtils.js";

export default class Task extends DomUtils {
  constructor(task, root, setTasks, formUpdate) {
    super();
    this.task = task;
    this.root = root;
    this.setTasks = setTasks;
    this.formUpdate = formUpdate;

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
    const btnUpdate = this.addDomElement("button", "Modifier", wrapper, { class: "btn btn-warning me-3" });
    const btnDelete = this.addDomElement("button", "Supprimer", wrapper, { class: "btn btn-danger" });
    return {
      btnValidate,
      btnDelete,
      h2,
      section,
      btnUpdate
    }
  }
  handleEvents() {
    console.log(`Dans handleEvents de Task`);
    // Récupération de la référence du bouton "valider"
    this.domElts.btnValidate.addEventListener("click", (event) => {
      console.log(`Clic sur bouton valider`);
      // Ici je modifie une valeur comprise dans tasks car le passage s'est fait par référence
      this.task.done = !this.task.done;

      // Modification de tasks
      this.setTasks(this.task, "update");

    })

    // Récupération de la référence du bouton supprimer
    this.domElts.btnDelete.addEventListener("click", () => {
      console.log(`Clic sur bouton supprimer`);
      //this.domElts.section.remove();
      // Appel à la fonction de modification de l'état
      this.setTasks(this.task, "delete")
    })

    // Gestion de l'événement clic sur le bouton modifier
    this.domElts.btnUpdate.addEventListener("click", (event) => {
      console.log(`Clic sur bouton modifier`);
      // Affichage du formulaire de modification
      this.formUpdate.show();

      // Indiquer au formulaire quelle tâche il doit mofifier
      this.formUpdate.setTaskToUpdate(this.task);


    })
  }

}