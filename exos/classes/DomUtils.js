export default class DomUtils {
  addDomElement(markup, text, parentDom, attributes = {}) {
    const domElt = document.createElement(markup);
    domElt.innerText = text;
    parentDom.appendChild(domElt);
    for(let key in attributes) {
      domElt.setAttribute(key, attributes[key]);
    }
    return domElt;
  }
}