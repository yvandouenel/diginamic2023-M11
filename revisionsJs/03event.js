// Récupérer une référence du formulaire
const form = document.querySelector("form");
console.log(`form`, form);
console.log(`nom du constructeur`, form.constructor.name);

// Gestion des événements
form.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  dumpInput(document.querySelector("input").value);

}

function dumpInput(valueInput) {
  console.log(`Value de l'input : `, valueInput);
}
