import { THonly } from '/global.mjs';
import template from './template.mjs';

class ToFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        await import(`${THonly}/components/to-footer/to-sponsors/element.mjs`);
    }
}

customElements.define("to-footer", ToFooter);