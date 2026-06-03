// 1. Setup Rain Effect Variables
const rainContainer = document.getElementById('rain-container');

// 2. Function to generate a single raindrop
function createRaindrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    // Randomize the horizontal starting position (0 to 100% of viewport width)
    drop.style.left = Math.random() * 100 + 'vw';

    // Randomize the animation duration (falling speed between 0.5s and 1.5s)
    drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';

    // Randomize opacity for depth effect
    drop.style.opacity = Math.random() * 0.5 + 0.2;

    // Add the drop to the container
    rainContainer.appendChild(drop);

    // Remove the raindrop after it falls to prevent performance issues / memory leaks
    setTimeout(() => {
        drop.remove();
    }, 2000); // 2000ms is enough time for the slowest drop to complete its animation
}

// 3. Interval to continuously create raindrops
// Adjust the 40ms to change rain intensity (lower = heavier rain)
setInterval(createRaindrop, 40);