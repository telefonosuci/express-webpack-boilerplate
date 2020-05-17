//accordion.js
class Accordion {
  constructor() {
    this.accOpenCtrl = document.querySelector(
      "js-netar-accordion-control-open"
    );
    this.accCloseCtrl = document.querySelector(
      "js-netar-accordion-control-close"
    );
  }

  init() {
    console.log("Initializing accordion controls", this.accOpenCtrl);
    const accControlList = document.querySelectorAll(this.accOpenCtrl);
  }
}

export const accordion = new Accordion();
export default {};
