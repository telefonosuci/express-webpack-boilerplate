// import html from "./SearchBoxComponent.html";

class SearchBoxComponent extends HTMLElement {
  constructor() {
    super();
    console.info("Constructed");
  }
  connectedCallback() {
    console.info("Connected");
    // this.innerHTML = "Hello, this is a serch component."; // can't be set in constructor()
    import("./SearchBoxComponent.html").then(
      (module) => {
        console.log(module);

        setTimeout(() => {
          this.innerHTML = module.default;
        }, 3000);
        /*
        setTimeout(function () {
          this.innerHTML = module.default;
        }, 3000);
        */
      },
      (error) => {
        console.log("Errore: ", error);
      }
    );

    // this.innerHTML = html;
  }
}

customElements.define("search-box-component", SearchBoxComponent);

export default {};
