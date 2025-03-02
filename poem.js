// JavaScript for sliding cards
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

document.getElementById('rightBtn').addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first card
    }
    updateCards();
});

document.getElementById('leftBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1;  // Loop to the last card
    }
    updateCards();
});

function updateCards() {
    const container = document.querySelector('.container');
    const cardWidth = cards[0].offsetWidth;
    const offset = -currentIndex * cardWidth;
    container.style.transform = `translateX(${offset}px)`;
}
