import Element from "./element.js";

export default class Module {
  component = null;

  constructor(elementTag, styleClass) {
    this.component = new Element(elementTag);
    this.component.addStyleClassToElement(styleClass);
  }

  createComponent(callbackContent, callback, selector) {
    this.component._appendChild(callback(callbackContent), selector);
  }

  createComponents(list, callback, selector) {
    list.forEach((item) => this.createComponent(item, callback, selector));
  }
}
