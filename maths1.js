document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const chaptersContainer = document.getElementById('chapters-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const chaptersData = [
        { name: 'Chapter 1: Linear Equation in Two Variables', description: 'Delve into the wonders of gravitational force and Kepler\'s laws.',book: 'm1book.html'},
        { name: 'Chapter 2: Quadratic Equations', description: 'Explore Dobereiner\'s Triads, Newland’s Law of Octaves, and Mendeleev’s Periodic Table.', book: 'm1book.html' },
        { name: 'Chapter 3: Arithmetic Progression', description: 'Learn about various types of chemical reactions and how to balance chemical equations.', book: 'm1book.html' },
        { name: 'Chapter 4: Finaacial Planning', description: 'Understand the heating effects, magnetic effects, and chemical effects of electric current.', book: 'm1book.html' },
        { name: 'Chapter 5: Probability', description: 'Understand the heating, magnetic, and chemical effects of electric current.', book: 'm1book.html' },
        { name: 'Chapter 6: Statistics', description: 'Study the laws of reflection and image formation by mirrors.', book: 'm1book.html' }
    ];

    function renderChapters() {
        chaptersContainer.innerHTML = '';
        chaptersData.forEach((chapter, index) => {
            const chapterElement = document.createElement('div');
            chapterElement.className = 'chapter';
            chapterElement.innerHTML = `
                <h3 onclick="toggleSubtopics(this)">${chapter.name} <span>&#9654;</span></h3>
                <div class="subtopics">
                    <p>${chapter.description}</p>
                    <div class="study-options">
                        <a href="#" onclick="showVideoLecture(${index})">Video Lecture</a>
                        <a href="${chapter.book}" onclick="showTheory(${index})">Book</a>
                        <a href="#" onclick="showFlashcards(${index})">Flashcards</a>
                        <a href="#" onclick="showGames(${index})">Games</a>
                    </div>
                </div>
            `;
            chaptersContainer.appendChild(chapterElement);
        });
    }

    function toggleSubtopics(header) {
        const subtopics = header.nextElementSibling;
        const icon = header.querySelector('span');
        subtopics.style.display = subtopics.style.display === "block" ? "none" : "block";
        icon.style.transform = subtopics.style.display === "block" ? "rotate(90deg)" : "rotate(0deg)";
    }

    function showTheory(chapterIndex) {
        window.location.href = chaptersData[chapterIndex].book;
    }

    function showVideoLecture(chapterIndex) {
        alert(`Video lecture for ${chaptersData[chapterIndex].name} is not available yet.`);
    }

    function showFlashcards(chapterIndex) {
        alert(`Flashcards for ${chaptersData[chapterIndex].name} are not available yet.`);
    }

    function showGames(chapterIndex) {
        alert(`Games for ${chaptersData[chapterIndex].name} are not available yet.`);
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    renderChapters();

    window.toggleSubtopics = toggleSubtopics;
    window.showTheory = showTheory;
    window.showVideoLecture = showVideoLecture;
    window.showFlashcards = showFlashcards;
    window.showGames = showGames;
});
