import "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js";
import { THONLY } from 'https://thonly.org/global.mjs';
import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class ToMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render(false));
    }

    async connectedCallback() {
        await import(`${THONLY}/components/tl-main/tl-kiitos/element.mjs`);
        await import(`${THONLY}/components/tl-main/tl-robot/element.mjs`);
        this.#render(true);
        this.#animate();
    }

    #render(refresh) {
        const page = window.location.hash.substring(1);
        this.shadowRoot.querySelectorAll('header, main, footer').forEach(element => element.style.display = 'none');
        
        if (page) {
            this.shadowRoot.querySelector('tl-kiitos').render(kiitos[page]);
            this.shadowRoot.querySelector('main').style.display = 'block';
            this.shadowRoot.querySelector('footer').style.display = 'block';
        } else {
            const a = this.shadowRoot.querySelector('a');
            a.href = "https://me.thonly.net/#thonly";
            a.firstElementChild.innerHTML = "<b>Follow</b> for real-time updates!";
            this.shadowRoot.querySelector('header').style.display = 'block';
        }
        
        this.style.display = 'block';
        if (refresh) setTimeout(() => document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }), 300)
        else document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
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

customElements.define("to-main", ToMain);