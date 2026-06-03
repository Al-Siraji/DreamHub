// 1. Store chapter texts in an object
const chapters = {
    1: `<h2>Chapter 1</h2>
        <p>I was ten years old when I first learned about the concept of selling one's lifespan, time, or health. It was a strange idea, one that stuck with me through the years, lingering in the back of my mind like a quiet shadow.</p>
        <p>Life hadn't turned out quite the way I expected. The days blended together into a gray canvas, filled with a quiet sort of emptiness. I was twenty years old, broke, and exhausted. Sometimes I wondered what my time was truly worth.</p>
        <p>It was a Tuesday afternoon when I stumbled upon the shop. The sign was unassuming, almost invisible to those not looking for it. Little did I know, stepping inside would change everything I understood about existence.</p>`,
    
    2: `<h2>Chapter 2</h2>
        <p>The clerk looked at me with an unreadable expression, adjusting her glasses. "Are you absolutely sure?" she asked, her voice calm and measured.</p>
        <p>I nodded. Three hundred thousand yen per year. That was the value they placed on my miserable existence. It felt both laughably small and terrifyingly final. I signed the paperwork without letting my hand shake.</p>
        <p>When the transaction was complete, I felt lighter, but also hollow. I had three days left. Just three days to find some meaning in a life I had so easily sold away. What do you do when your future is reduced to seventy-two hours?</p>`,
    
    3: `<h2>Chapter 3</h2>
        <p>Miyagi, the observer assigned to me, was a quiet companion. She followed me around, documenting my final days to ensure I didn't cause any trouble. At first, her constant presence was annoying, a ticking clock wearing a blue dress.</p>
        <p>But as the hours ticked by, we began to talk. Really talk. We shared stories of regrets, of small joys, of the beauty found in mundane moments like eating cheap ice cream on a park bench.</p>
        <p>In selling my future, I had somehow finally learned how to live in the present. And as the sun set on my second day, looking at Miyagi's faint smile, I realized I wouldn't trade these fleeting moments for an eternity.</p>`
};

// 2. Select DOM Elements
const contentContainer = document.getElementById('chapter-content');
const chapterButtons = document.querySelectorAll('.chapter-btn');

// 3. Function to dynamically load chapter content
function loadChapter(chapterNumber) {
    // Smooth fade out
    contentContainer.style.opacity = 0;
    
    setTimeout(() => {
        // Inject new content
        contentContainer.innerHTML = chapters[chapterNumber];
        
        // Smooth fade in
        contentContainer.style.opacity = 1;
        
        // Scroll back to top of the reading card smoothly
        document.querySelector('.reader-container').scrollIntoView({ behavior: 'smooth' });
    }, 300); // 300ms matches the CSS transition time

    // Update button states
    chapterButtons.forEach(btn => {
        if (btn.dataset.chapter === chapterNumber.toString()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 4. Add event listeners to all buttons
chapterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedChapter = button.dataset.chapter;
        loadChapter(selectedChapter);
    });
});

// 5. Initialize the page by loading Chapter 1
// We wait for DOM content to load to ensure a smooth initial render
document.addEventListener('DOMContentLoaded', () => {
    loadChapter(1);
});