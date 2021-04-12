class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Edgar Alejandro Ortiz Trejo.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
