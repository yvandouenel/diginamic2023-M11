import DomUtils from "./DomUtils.js";

export default class Task extends DomUtils {
  constructor(title, id, done, root) {
    super();
    this.title = title;
    this.id = id;
    this.done = done;
    this.root = root;

    // rendu du dom
    this.domElts = this.render();

    // Gestion des événements
    this.handleEvents();
  }
  render() {
    const section = this.addDomElement("section", "", this.root, { class: "d-flex justify-content-between my-2" });
    const h2 = this.addDomElement("h2", this.title, section);
    h2.style.textDecoration = this.done ? "line-through" : "";
    const wrapper = this.addDomElement("div", "", section);
    const btnValidate = this.addDomElement("button", this.done ? "Invalider" : "Valider", wrapper, { class: "btn btn-secondary me-2" });
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
      this.done = !this.done;
      this.domElts.btnValidate.innerText = this.done ? "Invalider" : "Valider";
      this.domElts.h2.style.textDecoration = (this.done) ? "line-through" : "";
    })

    // Récupération de la référence du bouton supprimer
    this.domElts.btnDelete.addEventListener("click", () => {
      console.log(`Clic sur bouton supprimer`);
      this.domElts.section.remove();
    })
  }

}