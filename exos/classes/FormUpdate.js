import DomUtils from "./DomUtils.js";

export default class FormUpdate extends DomUtils {
  constructor(root, setTasks) {
    super();
    this.root = root;
    this.setTasks = setTasks;
    this.taskToUpdate = null;
    

    this.domElts = this.render();
    console.log(`this.domElts`, this.domElts);
    // A la construction du formulaire, on le cache
    this.isHidden = this.hide();
    // Gestion des événements
    this.handleEvents();
  }
  setIsHidden(value) {
    this.isHidden =  value;
    if (value) {
      this.hide();
    } else this.show()
  }
  hide() {
    this.domElts.form.setAttribute('style', 'display:none !important');
    return true;
  }
  show( ) {
    this.domElts.form.setAttribute('style', 'display:flex !important');
    return false;
  }
  setTaskToUpdate(task) {
    this.taskToUpdate = task;
    this.domElts.input.value = task.title;
  }

  render() {
    const form = this.addDomElement("form", "", root, { class: "d-flex gap-2 mt-5 align-items-center" });
    const label = this.addDomElement("label", "Tâche : ", form, { for: "task-name" });
    const input = this.addDomElement("input", "", form, { id: "task-name", type: "text" });
    const btnAddTask = this.addDomElement("button", "Modifier", form, { type: "submit", class: "btn btn-success" });

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
      
      if(this.domElts.input.value) {
        this.taskToUpdate.title = this.domElts.input.value;
        this.setTasks(this.taskToUpdate, "update");
      }

      // Remettre la value de l'input à "" (chaîne de caractères vide)
      this.domElts.input.value = "";

      // Cacher le formulaire
      this.hide();

      // Remettre à null this.taskToUpdate
      this.taskToUpdate = null;
    })
  }
}