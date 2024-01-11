// Récuparation de références vers des éléments du dom
//window.document.body.innerHTML = "<h1>Hello DOM</h1>";
let title = document.querySelector("title");
console.log(`title constructor`, title.constructor.name);
title.textContent = "test 14h27";
title.innerText = "test 14h29";

const h1 = document.querySelector("h1");
title.hidden = true;

const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 5000,
  iterations: 1,
};

h1.animate(newspaperSpinning, newspaperTiming);

// !!! Une fois que l'on a une référence à un élément du DOM, on peut jouer avec ses propriétés

/* while (title) {
  console.log("class de title : ", title.constructor.name);
  // Remonte la chaîne des prototypes
  title = Object.getPrototypeOf(title);
} */

// Création d'éléments du dom
const p = document.createElement("p");
window.document.body.appendChild(p);
p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quis sit sunt recusandae eligendi fugit itaque iure laudantium. Est repellat ratione eius, laboriosam, exercitationem et molestias vitae quas sit asperiores deserunt omnis ut dolorem. Eveniet accusamus doloribus quam ipsam similique.";
p.setAttribute("class", "toto");

