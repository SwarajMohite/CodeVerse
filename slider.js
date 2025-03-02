let angle = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const carousel = document.querySelector(".carousel");

// Rotate images on click
carousel.addEventListener("click", () => {
    angle += 60;
    items.forEach((item, index) => {
        item.style.transform = `rotateY(${index * 60 - angle}deg) translateZ(200px)`;
    });
});

// Pause rotation on hover
carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
});
