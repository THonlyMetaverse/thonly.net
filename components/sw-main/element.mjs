import "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js";
import template from './template.mjs';

class SwMain extends HTMLElement {
    #hash = "SW-STEALTH";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => window.location.reload());
    }

    connectedCallback() {
        this.style.display = 'block';
        this.#animate();
        this.#render();
    }

    #render() {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash).render(window.location.hash.substring(1));
    }

    #animate() {
        //defined animation timeline options
        const tmax_opts = {
            delay: 0,
            //repeats infinitely
            repeat: -1,
            //between repeats, wait 0.5s
            repeatDelay: 0,
            //causes animation to alternate forwards and backwards
            yoyo: true
        };

        const tmax_t1 = new TimelineMax(tmax_opts),
            shapes = this.shadowRoot.querySelectorAll("path"),
            stagger = 0.05,
            duration = 2;

        const staggerFrom = {
            scale: 0,
            opacity: 0,
            transformOrigin: "center center"
        };

        const staggerTo = {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeInOut
        };

        //GSAP animation expression
        tmax_t1.staggerFromTo(shapes, duration, staggerFrom, staggerTo, stagger, 0);
    }
}

customElements.define("sw-main", SwMain);