/**
 * Dream Hub - Reader System Engine
 * Fully independent data loading, context engine and ambient framework.
 */

// 1. Data Structure - Multi-book Support Array Matrix Object
const books = {
    "three-days": {
        title: "Three Days Of Happiness",
        chapters: {
            1: {
                title: "Chapter 1: The Appraiser's Scale",
                content: `<p>It was a cold, quiet night when I made up my mind to partition my lifespan. My financial ceiling was dropping into dangerous negatives, and my psychological baseline had matched it long ago. The urban rumor spoke of a nondescript building deep in the city's neon-lit veins where life itself could be traded for currency.</p>
                          <p>The office interior smelled faintly of wet cement and paper. A woman sat behind an intricately geared ledger machine, computing statistics from my school transcripts and medical summaries. "Three hundred thousand yen per year," she said simply. That was the value placed upon my tomorrow. A number small enough to sting, but practical enough to accept.</p>`
            },
            2: {
                title: "Chapter 2: Seventy-Two Hours Remain",
                content: `<p>I had transacted away the entire remaining stack of my future, keeping a small structural pocket of precisely three days. Suddenly, the gray canvas of the city transformed. The steady sound of the rain cascading against the asphalt sounded melodic. Reflections of neon signage shimmered in dark puddles like fallen galaxies.</p>
                          <p>Then came Miyagi. She was my assigned observer, a stoic girl holding a translucent umbrella who was tasked with shadowing me until my clock structure collapsed. Her presence was cold at first, an objectified personification of my countdown, yet she was the only human left who would see my ending.</p>`
            },
            3: {
                title: "Chapter 3: The Canvas of a Life",
                content: `<p>On the final evening, we sat together on a wooden park bench, the cold wind whipping down across the water. We shared a single black umbrella, listening to the muffled drumming of the storm. I noticed a subtle, warm shift in Miyagi's expression, a faint crinkle at the edge of her eyes that seemed completely flawless.</p>
                          <p>In discarding twenty-some years of artificial delays, I had stumbled onto a concentration of pure purpose inside these final hours. A life is never quantified by its chronological longevity. It is defined by the profound weight of the single presence sharing the shelter of your storm.</p>`
            }
        }
    },
    "girl-moon": {
        title: "The Girl Who Drank the Moon",
        chapters: {
            1: {
                title: "Chapter 1: The Sacrifice of the Year",
                content: `<p>The tradition was ancient, immutable, and dark. Every year, the community of the Protectorate left its youngest infant inside the deep moss spaces of the Elder Woods as an offering. They believed this payment pacified the terrible witch residing in the mist, saving the city from total collapse.</p>
                          <p>But the witch Xan was not a creature of shadow. She was ancient, gentle, and utterly bewildered by the annual appearance of abandoned children in her woods. She would lift them with old hands, wrap them tightly in woven blankets, and carry them across the active ridge lines to neighboring valleys.</p>`
            },
            2: {
                title: "Chapter 2: The Starlight Mistake",
                content: `<p>During one difficult traversal across the volcanic plains, Xan ran short of condensed starlight to feed the child. Reaching toward the night heavens, she pulled down an alternative pocket of raw light—but she pulled too deep, scooping a pure draft of moonlight from the celestial crest instead.</p>
                          <p>Moonlight is not passive energy; it is magic concentrated in its most volatile liquidity. The child drank it down completely, internalizing the cool silver fire into her bloodlines. Realizing the child was irrevocably altered, Xan adopted her as her own, naming her Luna.</p>`
            },
            3: {
                title: "Chapter 3: The Awakening Spark",
                content: `<p>As Luna's thirteenth year approached, the magic sleeping within her bone structure began to fracture outward. She did not speak sentences; she spoke things that instantly turned into clouds of yellow swallowtails or fountains of unseasonal violets.</p>
                          <p>The cosmic balance was turning away from old structures. Xan could feel her own life cycle contracting as Luna's silver magic expanded. The times of hidden forests were dissolving, forcing the girl to look back down toward the town of her origin.</p>`
            }
        }
    }
};

// 2. Continuous Ambient Rain Simulation Framework
function initRainAnimation() {
    const container = document.getElementById('rain-layer');
    if (!container) return;

    // Density driver config
    const dropDensity = 38; 

    function spawnDrop() {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        
        // Randomized horizon placement across viewport width
        drop.style.left = `${Math.random() * 100}vw`;
        
        // Randomized falling speed parameters
        drop.style.animationDuration = `${0.6 + Math.random() * 0.8}s`;
        
        // Varied depth layering via transparency variance
        drop.style.opacity = `${0.15 + Math.random() * 0.4}`;
        
        container.appendChild(drop);
        
        // Automated node tracking cleanups to save client memory frames
        setTimeout(() => {
            drop.remove();
        }, 1500);
    }

    setInterval(spawnDrop, dropDensity);
}

// 3. Dynamic Book Setup & URL Search Parameter Parsing Core
function loadReaderSystem() {
    // Read parameters (?book=key)
    const urlParams = new URLSearchParams(window.location.search);
    const targetBookKey = urlParams.get('book') || 'three-days'; // Failover default

    // Target extraction fallback mapping checks
    const targetBook = books[targetBookKey] || books['three-days'];

    // DOM UI Target Node bindings
    const bookTitleEl = document.getElementById('book-title');
    const chTitleEl = document.getElementById('chapter-title');
    const chTextEl = document.getElementById('chapter-text');
    const navContainer = document.getElementById('chapter-buttons-container');

    // Render global Book Identity metadata
    bookTitleEl.textContent = targetBook.title;
    document.title = `Dream Hub Reader - ${targetBook.title}`;

    // Flush existing chapter selector templates from wrapper
    navContainer.innerHTML = '';

    // Dynamically iterate over available chapter payloads
    Object.keys(targetBook.chapters).forEach((chapterIndex) => {
        const chapter = targetBook.chapters[chapterIndex];
        
        // Instantiate a structural interactable selector item
        const button = document.createElement('button');
        button.classList.add('chapter-btn');
        button.textContent = `Chapter ${chapterIndex}`;
        button.setAttribute('data-ch', chapterIndex);

        // Bind immediate content swapping mechanics
        button.addEventListener('click', () => {
            activateChapter(chapterIndex, targetBook, chTitleEl, chTextEl);
        });

        navContainer.appendChild(button);
    });

    // Automatically prioritize and load index 1 on entry frame state
    activateChapter(1, targetBook, chTitleEl, chTextEl);
}

// 4. State Modification Logic Framework (No Reloading Page States)
function activateChapter(chapterIndex, targetBook, titleNode, textNode) {
    const selectedChapter = targetBook.chapters[chapterIndex];
    if (!selectedChapter) return;

    // Smooth UI crossfade timing mechanisms
    textNode.style.opacity = '0';
    titleNode.style.opacity = '0';

    setTimeout(() => {
        // Swap structural context text arrays
        titleNode.textContent = selectedChapter.title;
        textNode.innerHTML = selectedChapter.content;

        // Restore node visibilities safely
        titleNode.style.opacity = '1';
        textNode.style.opacity = '1';

        // Auto-scroll viewing window safely up to top of container block
        document.querySelector('.reading-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 250);

    // Synchronize UI active selected attribute status flags
    document.querySelectorAll('.chapter-btn').forEach((btn) => {
        if (btn.getAttribute('data-ch') === chapterIndex.toString()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 5. System Execution Inits
document.addEventListener('DOMContentLoaded', () => {
    initRainAnimation();
    loadReaderSystem();
});