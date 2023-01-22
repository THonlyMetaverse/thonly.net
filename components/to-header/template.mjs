import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/to-header/shadow.css">
    <header>
        <section>
            <a href="/"><figure>🪐</figure></a>
            <a href="/"><h1>THonly™ Metaverse</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>eStories</h3>
                <nav>
                    <a><button>Read</button></a>
                    <!--<h4>Education Games</h4>
                    <menu>
                        <li><a>eEnglish</a></li>
                        <li><a>eMath</a></li>
                        <li><a>eNovel</a></li>
                        <li><a>eMusic</a></li>
                        <li><a>eAnimation</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Meditation</h3>
                <nav>
                    <a><button>Play</button></a>
                    <!--<h4>Enlightenment Education</h4>
                    <menu>
                        <li><a>Zero Game</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>Sub Universes</h4>
                    <menu>
                        <li><a>You are an entire Universe</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Replay</h3>
                <nav>
                    <a><button>Watch</button></a>
                    <!--<h4>Explorer</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Supra Blockchain</h4>
                    <menu>
                        <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                        <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                        <li><a>Remote Pair Programming on Discord</a></li>
                        <li><a>Students' Solo Projects on GitHub</a></li>
                    </menu>
                    <h4>Infra Blockchains</h4>
                    <menu>
                        <li><a>Live Demo: Music Apps</a></li>
                        <li><a>Syntax Flashcards</a></li>
                        <li><a>Students' Writings on Medium</a></li>
                        <li><a>Mock Interviews on YouTube</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Theater</h3>
                <nav>
                    <a href="#BoxOffice.HeartBank.Studio"><button>BoxOffice.HeartBank.Studio</button></a>
                    <!--<h4>Browser</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>DNS</h4>
                    <menu>
                        <li><a>Cambodia</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>-->
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;