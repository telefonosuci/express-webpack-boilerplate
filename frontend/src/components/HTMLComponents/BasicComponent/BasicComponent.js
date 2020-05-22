class SearchBoxComponent extends HTMLElement {
  constructor({ name, template }) {
    const template = import(template);

    super();
    console.info("Constructed", name, template);
  }
  connectedCallback() {
    console.info("Connected");
    // this.innerHTML = "Hello, this is a serch component."; // can't be set in constructor()

    this.innerHTML = html;
  }
}

customElements.define("search-box-component", SearchBoxComponent);

export default {};
