//accordion.js
class Accordion {
  constructor() {
    this.checkoutSelector = document.querySelector("js-checkout-class");
  }

  init() {
    console.log("Initializing checkout", this.colorSelectorHeader);
  }
}

export const accordion = new Accordion();
export default {};
