export default class DomUtils {
  addDomElement(markup, text, parentDom, attributes = []) {
    const domElt = document.createElement(markup);
    domElt.innerText = text;
    parentDom.appendChild(domElt);
    attributes.forEach((attribute) => {
      domElt.setAttribute(attribute.name, attribute.value);
    })
    return domElt;
  }
}