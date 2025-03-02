document.addEventListener('DOMContentLoaded', function () {
    const cardArea = document.querySelector('.box-area');
    const backButton = document.querySelector('.back-btn');

    const subjectsData = {
        languages: [
            { name: 'Marathi', description: 'Learn Marathi language', image: 'images/marathi-01.png', page: 'marathi.html' },
            { name: 'Sanskrit', description: 'Explore Sanskrit literature', image: 'images/sanskrit-01.png', page: 'sanskrit.html' },
            { name: 'English', description: 'Master English language skills', image: 'images/eng-01.png', page: 'english.html' },
            { name: 'Hindi', description: 'Improve Hindi language proficiency', image: 'images/hindi-01.png', page: 'hindi.html' }
        ],
        science: [
            { name: 'Science 1', description: 'Explore fundamental scientific concepts', image: 'images/science-01.png', page: 'science1.html' },
            { name: 'Science 2', description: 'Dive deeper into advanced scientific topics', image: 'images/science-02.png', page: 'science2.html' }
        ],
        maths: [
            { name: 'Maths 1', description: 'Master basic mathematical principles', image: 'images/maths-01.png', page: 'maths1.html' },
            { name: 'Maths 2', description: 'Tackle advanced mathematical problems', image: 'images/maths-02.png', page: 'maths2.html' }
        ],
        socialscience: [
            { name: 'Geography', description: 'Explore the world and its features', image: 'images/geo-01.png', page: 'geography.html' },
            { name: 'History', description: 'Learn about past events and civilizations', image: 'images/history-03.png', page: 'history.html' }
        ]
    };

    // Store the original HTML of the main subjects
    const originalSubjects = cardArea.innerHTML;

    function showSubSubjects(subject) {
        const subSubjects = subjectsData[subject];
        if (!subSubjects) return;

        // Clear the current content
        cardArea.innerHTML = '';
        
        // Add the sub-subjects with unique images
        subSubjects.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'box';
            card.dataset.subject = subject; 
            card.innerHTML = `
                <img src="${sub.image}" alt="${sub.name}">
                <div class="overlay">
                    <h3>${sub.name}</h3>
                    <p>${sub.description}</p>
                    <a href="${sub.page}" class="explore-btn">Start Learning</a>
                </div>
            `;
            cardArea.appendChild(card);
        });

        // Show the back button
        backButton.classList.remove('hidden');
    }

    function restoreMainSubjects() {
        // Restore the original HTML
        cardArea.innerHTML = originalSubjects;
        
        // Hide the back button
        backButton.classList.add('hidden');
        
        // Re-attach event listeners to the new elements
        attachEventListeners();
    }

    function attachEventListeners() {
        // Add click event to all subject boxes
        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('click', function(e) {
                if (e.target.classList.contains('explore-btn')) {
                    e.preventDefault();
                }
                
                const subject = this.dataset.subject;
                if (subjectsData[subject]) {
                    showSubSubjects(subject);
                }
            });
        });
    }

    // Initial setup
    attachEventListeners();
    
    // Add click event to back button
    backButton.addEventListener('click', restoreMainSubjects);
});
