document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const chaptersContainer = document.getElementById('chapters-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const chaptersData = [
        { name: 'Chapter 1: Gravitation', description: 'Delve into the wonders of gravitational force and Kepler\'s laws.',book: 's1book.html',games:'GAMES2/Chemistry 1/index.html'},
        { name: 'Chapter 2: Periodic Classification of Elements', description: 'Explore Dobereiner\'s Triads, Newland’s Law of Octaves, and Mendeleev’s Periodic Table.', book: 's1book.html',games:'GAMES2/Chemistry 2/index.html' },
        { name: 'Chapter 3: Chemical Reactions and Equations', description: 'Learn about various types of chemical reactions and how to balance chemical equations.', book: 's1book.html',gmaes:'GAMES2/Chemistry 3/index.html' },
        { name: 'Chapter 4: Effects of Electric Current', description: 'Understand the heating effects, magnetic effects, and chemical effects of electric current.', book: 's1book.html', gmaes:'GAMES2/Chemistry 3/index.html' },
        { name: 'Chapter 5: Heat', description: 'Understand the heating, magnetic, and chemical effects of electric current.', book: 's1book.html',gmaes:'GAMES2/Chemistry 4/index.html' },
        { name: 'Chapter 6: Reflection of Light', description: 'Study the laws of reflection and image formation by mirrors.', book: 's1book.html',games:'GAMES2/Chemistry 5/index.html' },
        { name: 'Chapter 7: Lenses', description: 'Learn about the properties of lenses and how they form images.', book: 's1book.html' },
        { name: 'Chapter 8: Metallurgy', description: 'Explore the extraction and refining of metals from ores.', book: 's1book.html' },
        { name: 'Chapter 9: Carbon Compound', description: 'Study the properties and uses of carbon compounds like hydrocarbons.', book: 's1book.html' },
        { name: 'Chapter 10: Space Mission', description: 'Learn about key space missions and the technology behind them.', book: 's1book.html' }
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

    function showGames(chapterIndex) {
        window.location.href = "/interface2.html";
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
