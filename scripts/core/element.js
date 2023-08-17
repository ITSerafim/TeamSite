import stringToHtml from "../helpers/stringToHtml.js";

export default class Element {
  newElement = null;

  constructor(elementTag) {
    this.newElement = this.#createElement(elementTag);
  }

  #createElement(elementTag) {
    return document.createElement(elementTag);
  }

  #getCreatedElementByClassSelector() {
    return document.querySelector(`.${this.#getElementAttribute("class")}`);
  }

  #getElementAttribute(attribute) {
    return this.newElement.getAttribute(attribute);
  }

  getParentElement(selector) {
    return document.querySelector(selector);
  }

  addTextContentToElement(textContent) {
    this.newElement.textContent = textContent;
  }

  addStyleClassToElement(styleClass) {
    this.newElement.className = styleClass;
  }

  _appendChild(content, selector) {
    const createdElement = this.#getCreatedElementByClassSelector();
    console.log(createdElement);
    createdElement.appendChild(stringToHtml(content, selector));
  }
}
