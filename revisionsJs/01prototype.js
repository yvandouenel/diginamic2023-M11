const bob = {
  name: "bob"
}
const test = console.log(`bob`, bob);
console.log(`test`, test);

/**
 * 
 * @param {string} name 
 * @returns {Cake}
 */
function Cake(name) {
  this.name = name;
}
Cake.prototype.taste = "sucré";
Cake.prototype.introduce = function () {
  console.log(`Bonjour depuis le prototype de Cake, je m'appelle ${this.name} et j'ai un goût ${this.taste}`);
  //console.log("Bonjour, je m'appelle " + this.name);
};
Object.prototype.introduce = function () {
  console.log(`Bonjour depuis le prototype de Object`);
};

const vegetables = ["tomates", "salade"];
vegetables.introduce();



const religieuse = new Cake("Religieuse");
const tropezienne = new Cake("Tropezienne");
console.log(`religieuse : `, religieuse);
console.log(`goût de la religieuse : `, religieuse.taste);
console.log(`goût de la tropezienne : `, tropezienne.taste);
religieuse.introduce();// appel de la méhode introduce
tropezienne.introduce();// appel de la méhode introduce

/* function introduceMySelf() {
  console.log("this : ", this)
  console.log(`Bonjour, je m'appelle ${this.name} et j'ai un goût ${this.taste}`);
}
introduceMySelf();
 */

if(religieuse.introduce == tropezienne.introduce) {
  console.log(`religieuse.introduce est à la même adresse (référence) que tropezienne.introduce`);
} else {
  console.log(`religieuse.introduce n'est pas à la même adresse (référence) que tropezienne.introduce`);
}

// let z = 125;