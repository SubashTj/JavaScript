class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.name = 'Subash'
    }
    static get observedAttributes() {
        return ['name']
    }
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue)
            this[property] = newValue;
    }
    connectedCallback() {
        this.textContent = `Hello ${this.name}!`;
    }
}
customElements.define('hello-world', HelloWorld)