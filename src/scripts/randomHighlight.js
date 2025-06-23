// src/scripts/randomHighlight.js
document.addEventListener('DOMContentLoaded', () => {
    const highlightElements = document.querySelectorAll('.highlight-text');
    let highlightIndex = 1; // Start with the first highlight image (1.png)

    highlightElements.forEach(element => {
        // Assign highlights sequentially: 1.png, 2.png, 3.png, etc.
        // It will loop back if there are more highlights than images (e.g., after 6.png, it goes back to 1.png)
        const imageUrl = `/images/highlights/${highlightIndex}.png`;

        element.style.setProperty('--highlight-image-url', `url('${imageUrl}')`);

        highlightIndex++;
        if (highlightIndex > 6) { // Assuming you have 6 highlight images (1.png to 6.png)
            highlightIndex = 1; // Reset to 1 for looping
        }
    });
});