document.addEventListener('DOMContentLoaded', function() {
    const contentArea = document.getElementById('content-area');
    const chaptersContainer = document.getElementById('chapters-container');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    const chaptersData = [
            {
                name: "Parts of Speech",
                description: "Understanding the different parts of speech is essential for forming correct sentences in English. This section covers the core components: Nouns, Pronouns, Verbs, Adjectives, Adverbs, Prepositions, Conjunctions, and Interjections.",
                "flashcards": [
                    { "front": "What is a Noun?", "back": "A noun is the name of a person, place, thing, or idea. Examples: 'book', 'John', 'love', 'India'." },
                    { "front": "What is a Common Noun?", "back": "A common noun is a general name for a person, place, or thing. Examples: 'city', 'teacher', 'dog'." },
                    { "front": "What is a Proper Noun?", "back": "A proper noun is the specific name of a person, place, or thing and is always capitalized. Examples: 'London', 'Shakespeare'." },
                    { "front": "What is a Collective Noun?", "back": "A collective noun refers to a group of people, animals, or things considered as a single unit. Examples: 'team', 'family', 'flock'." },
                    { "front": "What is an Abstract Noun?", "back": "An abstract noun refers to an idea, quality, or state rather than a concrete object. Examples: 'freedom', 'happiness'." },
                    { "front": "What is a Pronoun?", "back": "A pronoun is a word that takes the place of a noun. Examples: 'he', 'she', 'it', 'they'." },
                    { "front": "What is a Personal Pronoun?", "back": "Personal pronouns refer to specific people or things. Examples: 'I', 'you', 'he', 'she'." },
                    { "front": "What is a Verb?", "back": "A verb expresses an action or a state of being. Examples: 'run', 'is', 'eat', 'think'." },
                    { "front": "What is an Adjective?", "back": "An adjective modifies or describes a noun or pronoun. Examples: 'beautiful', 'tall', 'smart'." },
                    { "front": "What is an Adverb?", "back": "An adverb modifies a verb, adjective, or another adverb. Examples: 'quickly', 'very', 'well'." },
                    { "front": "What is a Preposition?", "back": "A preposition shows the relationship between a noun (or pronoun) and other words in the sentence. Examples: 'on', 'in', 'at', 'by'." },
                    { "front": "What is a Conjunction?", "back": "A conjunction is a word that connects words, phrases, or clauses. Examples: 'and', 'but', 'or', 'because'." },
                    { "front": "What is an Interjection?", "back": "An interjection is a word or phrase that expresses a strong feeling or reaction. Examples: 'wow', 'oh', 'ouch'." }
                ]
            },
            {
                name: "Tenses",
                description: "Tenses show the time of an action or event. Mastering tenses is key to constructing grammatically correct sentences. This section covers all the necessary tenses: Present, Past, and Future.",
                "flashcards": [
                    { "front": "What is Present Simple Tense?", "back": "Present simple tense expresses habitual actions, facts, or truths. Example: 'She walks to school every day.'" },
                    { "front": "What is Present Continuous Tense?", "back": "Present continuous tense describes actions happening at the moment of speaking. Example: 'I am studying right now.'" },
                    { "front": "What is Present Perfect Tense?", "back": "Present perfect tense shows actions that have been completed at some point in the past but are relevant to the present. Example: 'He has finished his homework.'" },
                    { "front": "What is Present Perfect Continuous Tense?", "back": "Present perfect continuous tense shows actions that started in the past and are still continuing. Example: 'I have been studying for two hours.'" },
                    { "front": "What is Past Simple Tense?", "back": "Past simple tense describes actions that happened at a specific time in the past. Example: 'I visited London last year.'" },
                    { "front": "What is Past Continuous Tense?", "back": "Past continuous tense shows actions that were in progress at a particular time in the past. Example: 'She was reading a book when I called.'" },
                    { "front": "What is Past Perfect Tense?", "back": "Past perfect tense refers to actions that were completed before another action in the past. Example: 'He had left by the time I arrived.'" },
                    { "front": "What is Past Perfect Continuous Tense?", "back": "Past perfect continuous tense shows an action that was ongoing in the past before another action. Example: 'I had been working for two hours when she arrived.'" },
                    { "front": "What is Future Simple Tense?", "back": "Future simple tense describes actions that will happen in the future. Example: 'I will travel tomorrow.'" },
                    { "front": "What is Future Continuous Tense?", "back": "Future continuous tense describes actions that will be ongoing at a specific time in the future. Example: 'She will be reading at 8 PM.'" },
                    { "front": "What is Future Perfect Tense?", "back": "Future perfect tense refers to actions that will be completed before a specific time in the future. Example: 'They will have finished by tomorrow.'" },
                    { "front": "What is Future Perfect Continuous Tense?", "back": "Future perfect continuous tense shows an action that will be ongoing until a specific point in the future. Example: 'I will have been working for five hours by the time you arrive.'" }
                ]
            },
            {
                name: "Active and Passive Voice",
                description: "This section deals with converting sentences from active to passive voice and vice versa. Understanding voice is crucial for effective communication.",
                "flashcards": [
                    { "front": "What is Active Voice?", "back": "In active voice, the subject performs the action. Example: 'The dog chased the ball.'" },
                    { "front": "What is Passive Voice?", "back": "In passive voice, the subject receives the action. Example: 'The ball was chased by the dog.'" },
                    { "front": "How do you convert an active sentence to passive?", "back": "To convert an active sentence to passive, make the object of the active sentence the subject of the passive sentence. Example: 'She sings a song.' becomes 'A song is sung by her.'" },
                    { "front": "What is the rule for changing tenses in passive voice?", "back": "The tense of the verb remains the same, but the auxiliary verb changes. Example: 'She eats an apple.' becomes 'An apple is eaten by her.'" },
                    { "front": "How is the past tense converted to passive voice?", "back": "In the past tense, the verb 'was' or 'were' is used as the auxiliary verb. Example: 'He wrote a letter.' becomes 'A letter was written by him.'" },
                    { "front": "How do you convert present continuous tense to passive voice?", "back": "For present continuous tense, use 'am/is/are being' followed by the past participle. Example: 'They are making a cake.' becomes 'A cake is being made by them.'" },
                    { "front": "How do you form passive sentences in future tense?", "back": "In future tense, use 'will be' as the auxiliary verb. Example: 'She will clean the room.' becomes 'The room will be cleaned by her.'" },
                    { "front": "How do you convert questions into passive voice?", "back": "To convert a question into passive voice, keep the auxiliary verb at the beginning. Example: 'Did she write the letter?' becomes 'Was the letter written by her?'" },
                    { "front": "What is the passive voice of the sentence 'They play football every Sunday'?", "back": "The passive voice is 'Football is played by them every Sunday.'" },
                    { "front": "What is the passive voice of the sentence 'He repaired the car yesterday'?", "back": "The passive voice is 'The car was repaired by him yesterday.'" },
                    { "front": "What is the passive voice of the sentence 'She is teaching the students'?", "back": "The passive voice is 'The students are being taught by her.'" },
                    { "front": "How do you form passive voice with modals?", "back": "When modals are used in active voice, they change to passive with the modal + be + past participle. Example: 'They should complete the work.' becomes 'The work should be completed by them.'" }
                ]
            },
            {
                name: "Direct and Indirect Speech",
                description: "This section covers how to report someone's speech using direct and indirect speech, which is essential for understanding sentence transformations.",
                "flashcards": [
                    { "front": "What is Direct Speech?", "back": "Direct speech is the exact quotation of someone's words. Example: 'He said, 'I am going to the store.''" },
                    { "front": "What is Indirect Speech?", "back": "Indirect speech reports someone's words without quoting them directly. Example: 'He said that he was going to the store.'" },
                    { "front": "How do you change a statement from direct to indirect speech?", "back": "In indirect speech, remove quotation marks and change the tense. Example: 'She said, 'I like ice cream.'' becomes 'She said that she liked ice cream.'" },
                    { "front": "How do you convert questions into indirect speech?", "back": "In indirect speech, questions are turned into statements and the word order is changed. Example: 'He asked, 'Where are you going?'' becomes 'He asked where I was going.'" },
                    { "front": "What is the rule for converting 'will' into indirect speech?", "back": "In indirect speech, 'will' changes to 'would'. Example: 'She said, 'I will call you.' becomes 'She said that she would call me.'" },
                    { "front": "What changes occur with 'has' in indirect speech?", "back": "'Has' changes to 'had' in indirect speech. Example: 'She said, 'He has finished his homework.'' becomes 'She said that he had finished his homework.'" },
                    { "front": "What is the change in tense for indirect speech with past tense?", "back": "In indirect speech, the present tense generally changes to past tense. Example: 'He says, 'I am reading a book.'' becomes 'He said that he was reading a book.'" },
                    { "front": "How do you handle exclamatory sentences in indirect speech?", "back": "Exclamatory sentences are reported with 'that' or 'how' or 'what'. Example: 'She said, 'What a beautiful painting!'' becomes 'She exclaimed that it was a beautiful painting.'" },
                    { "front": "What is the indirect speech of 'I am studying now'?", "back": "'He said that he was studying then.'" },
                    { "front": "How do you report imperatives in indirect speech?", "back": "In indirect speech, imperative sentences are reported using 'to'. Example: 'He said, 'Please help me.'' becomes 'He asked to help him.'" },
                    { "front": "What happens to pronouns in indirect speech?", "back": "Pronouns in direct speech change based on the speaker and the listener in indirect speech. Example: 'I am tired' becomes 'He said that he was tired.'" }
                ]
            },
            {
                name: "Prepositions",
                    description: "Prepositions are words used to link nouns, pronouns, or phrases to other words within a sentence. This section explores different types of prepositions and their correct usage.",
                    "flashcards": [
                        { "front": "What are Prepositions?", "back": "Prepositions are words that show relationships between nouns (or pronouns) and other words in a sentence. Example: 'The cat is on the table.'" },
                        { "front": "Give examples of Prepositions of Place.", "back": "Examples of prepositions of place include 'on', 'in', 'under', 'between', 'above', 'below'. Example: 'The book is on the table.'" },
                        { "front": "Give examples of Prepositions of Time.", "back": "Examples of prepositions of time include 'at', 'on', 'in', 'before', 'after'. Example: 'We meet at 3 PM.'" },
                        { "front": "Give examples of Prepositions of Direction.", "back": "Examples of prepositions of direction include 'to', 'into', 'towards', 'through'. Example: 'He walked to the park.'" },
                        { "front": "What is the preposition in the sentence: 'She is sitting on the chair.'?", "back": "'On' is the preposition, showing the relationship between 'sitting' and 'chair.'" },
                        { "front": "What is the difference between 'in' and 'on'?", "back": "'In' refers to being inside an enclosed space (e.g., 'in the room'), while 'on' refers to being on a surface (e.g., 'on the table')." },
                        { "front": "What is the preposition in the sentence: 'He arrived at the airport at 7 PM.'?", "back": "'At' is the preposition, indicating the specific location and time." },
                        { "front": "How do you use 'between'?", "back": "'Between' is used when referring to two or more things or people, to show the position of something in the middle. Example: 'The store is between the two buildings.'" },
                        { "front": "How do you use 'by'?", "back": "'By' is used to indicate proximity or a deadline. Example: 'The book was written by Shakespeare.' 'We need to finish by tomorrow.'" },
                        { "front": "What is the preposition in: 'She went to the cinema with her friends.'?", "back": "'With' is the preposition, showing the relationship between 'went' and 'friends.'" }
                    ]
                },
                {
                    name: "Articles (Definite and Indefinite)",
                    description: "Articles are used before nouns to define whether the noun is specific or general. This section covers the usage of definite (the) and indefinite (a, an) articles.",
                    "flashcards": [
                        { "front": "What is an article?", "back": "An article is a word used to modify a noun, and it can be indefinite ('a', 'an') or definite ('the')." },
                        { "front": "What is the difference between 'a' and 'an'?", "back": "'A' is used before words starting with a consonant sound (e.g., 'a dog'), and 'an' is used before words starting with a vowel sound (e.g., 'an apple')." },
                        { "front": "When do we use the definite article 'the'?", "back": "'The' is used when referring to a specific noun, one that is already known or identified. Example: 'The book on the table is mine.'" },
                        { "front": "When do we use 'a'?", "back": "'A' is used before a singular, countable noun that is mentioned for the first time or when it is not specific. Example: 'I saw a dog in the park.'" },
                        { "front": "When do we use 'an'?", "back": "'An' is used before singular, countable nouns starting with a vowel sound. Example: 'She ate an orange.'" },
                        { "front": "What is the rule for using 'the' with geographical names?", "back": "'The' is used with geographical names such as rivers, seas, oceans, mountain ranges, and groups of islands. Example: 'The Amazon River' or 'The Alps.'" },
                        { "front": "What is the rule for using 'the' with singular nouns?", "back": "'The' can be used with singular nouns when referring to something that is unique or universally known. Example: 'The sun rises in the east.'" },
                        { "front": "What is the rule for using 'the' with superlatives?", "back": "'The' is used with superlative adjectives to indicate that something is the best, worst, etc. Example: 'She is the best player in the team.'" }
                    ]
                },
                {
                    name: "Adjectives and Adverbs",
                    description: "Adjectives modify nouns, while adverbs modify verbs, adjectives, or other adverbs. This section covers their usage and forms.",
                    "flashcards": [
                        { "front": "What is an adjective?", "back": "An adjective is a word that describes a noun or pronoun. Example: 'The tall building is impressive.'" },
                        { "front": "What is an adverb?", "back": "An adverb is a word that modifies a verb, an adjective, or another adverb. Example: 'She runs quickly.'" },
                        { "front": "How do you use adjectives to compare things?", "back": "Comparative adjectives are used to compare two things, and superlative adjectives are used to compare three or more. Example: 'She is taller than him' (comparative) and 'She is the tallest in the class' (superlative)." },
                        { "front": "What is the rule for forming adverbs from adjectives?", "back": "Many adverbs are formed by adding '-ly' to adjectives. Example: 'quick' becomes 'quickly', 'happy' becomes 'happily'." },
                        { "front": "What is the difference between an adjective and an adverb?", "back": "An adjective modifies a noun or pronoun, while an adverb modifies a verb, adjective, or another adverb. Example: 'She is a quick runner' (adjective) vs 'She runs quickly' (adverb)." },
                        { "front": "What is a positive adjective?", "back": "A positive adjective describes a noun or pronoun without making a comparison. Example: 'She is a smart student.'" },
                        { "front": "What is a comparative adjective?", "back": "A comparative adjective is used to compare two things. Example: 'He is taller than his brother.'" },
                        { "front": "What is a superlative adjective?", "back": "A superlative adjective is used to compare three or more things, indicating the highest or lowest degree. Example: 'She is the smartest student in the class.'" },
                        { "front": "Can you provide an example of an adverb modifying an adjective?", "back": "Yes, an adverb can modify an adjective to show the degree of the adjective. Example: 'She is very tall.'" },
                        { "front": "Can you provide an example of an adverb modifying another adverb?", "back": "Yes, adverbs can modify other adverbs. Example: 'He runs extremely fast.'" }
                    ]
                },
                {
                    name: "Clauses and Phrases",
                    description: "A clause is a group of words that contains both a subject and a verb. A phrase is a group of words that work together but do not have both a subject and verb. This section covers their types and usage.",
                    "flashcards": [
                        { "front": "What is a Clause?", "back": "A clause is a group of words that contains both a subject and a verb. Example: 'She went to the store.'" },
                        { "front": "What is a Phrase?", "back": "A phrase is a group of words that does not contain both a subject and a verb. Example: 'On the table.'" },
                        { "front": "What is an Independent Clause?", "back": "An independent clause can stand alone as a complete sentence. Example: 'She went to the store.'" },
                        { "front": "What is a Dependent Clause?", "back": "A dependent clause cannot stand alone as a sentence and relies on an independent clause to complete its meaning. Example: 'Because she was tired, she went to bed.'" },
                        { "front": "What is a Noun Clause?", "back": "A noun clause functions as a noun within a sentence. Example: 'What you said is true.'" },
                        { "front": "What is an Adjective Clause?", "back": "An adjective clause describes a noun in the sentence. Example: 'The car that is parked outside is mine.'" },
                        { "front": "What is an Adverbial Clause?", "back": "An adverbial clause modifies a verb, adjective, or adverb. Example: 'He ran faster than I did.'" },
                        { "front": "What is a Prepositional Phrase?", "back": "A prepositional phrase includes a preposition and its object, and it functions as a noun, adjective, or adverb. Example: 'In the morning, we went to school.'" },
                        { "front": "What is a Verb Phrase?", "back": "A verb phrase consists of the main verb and its auxiliary verb(s). Example: 'She has been running for an hour.'" }
                    ]
                },
                {
                    name: "Punctuation",
                    description: "Punctuation marks are essential for organizing and clarifying sentences. This section covers the correct usage of punctuation marks.",
                    "flashcards": [
                        { "front": "What is the role of a full stop?", "back": "A full stop (period) is used to end a declarative sentence. Example: 'He went to the market.'" },
                        { "front": "When do we use a comma?", "back": "A comma is used to separate items in a list, after introductory words or clauses, and to separate clauses. Example: 'She bought apples, bananas, and oranges.'" },
                        { "front": "What is the purpose of a question mark?", "back": "A question mark is used at the end of a direct question. Example: 'What is your name?'" },
                        { "front": "What is the purpose of an exclamation mark?", "back": "An exclamation mark is used to express strong emotions or emphasize a statement. Example: 'Wow! That’s amazing!'" },
                        { "front": "When do we use quotation marks?", "back": "Quotation marks are used to enclose direct speech, quotations, or titles of short works. Example: 'He said, 'I will be there soon.''" },
                        { "front": "What is the role of an apostrophe?", "back": "An apostrophe is used to indicate possession or in contractions. Example: 'John’s book' (possession), 'don’t' (contraction)." },
                        { "front": "When do we use colons?", "back": "A colon is used to introduce a list, explanation, or quotation. Example: 'Here are the items: pencils, notebooks, and pens.'" }
                    ]
                }            
                                       
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
                      
                        <a href="#" onclick="showFlashcards(${index})">Flashcards</a>
                        
                    </div>
                </div>
            `;
            chaptersContainer.appendChild(chapterElement);
        });
    }

    function toggleSubtopics(header) {
        const subtopics = header.nextElementSibling;
        const icon = header.querySelector('span');

        if (subtopics.style.display === "none" || subtopics.style.display === "") {
            subtopics.style.display = "block";
            icon.style.transform = "rotate(90deg)";
        } else {
            subtopics.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    }

    function searchChapter() {
        const query = document.getElementById('search').value.toLowerCase();
        const chapters = document.querySelectorAll('.chapter');

        chapters.forEach((chapter) => {
            const chapterName = chapter.querySelector('h3').textContent.toLowerCase();
            if (chapterName.includes(query)) {
                chapter.style.display = 'block';
            } else {
                chapter.style.display = 'none';
            }
        });
    }

    function showFlashcards(chapterIndex) {
        const chapter = chaptersData[chapterIndex];
        if (!chapter.flashcards) {
            alert('Flashcards for this chapter are not available yet.');
            return;
        }

        let currentCard = 0;

        function updateFlashcard() {
            const flashcard = chapter.flashcards[currentCard];
            contentArea.innerHTML = `
                <h2>${chapter.name} - Flashcards</h2>
                <div class="flashcard-container">
                    <div class="flashcard">
                        <div class="flashcard-front">
                            <div class="flashcard-content">${flashcard.front}</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="flashcard-content">${flashcard.back}</div>
                        </div>
                    </div>
                </div>
                <div class="flashcard-navigation">
                    <button class="flashcard-nav-button" onclick="prevCard()">Previous</button>
                    <button class="flashcard-nav-button" onclick="flipCard()">Flip</button>
                    <button class="flashcard-nav-button" onclick="nextCard()">Next</button>
                </div>
                <button class="flashcard-nav-button" onclick="renderChapters()">Back to Chapters</button>
            `;
        }

        updateFlashcard();

        window.flipCard = function() {
            const flashcard = document.querySelector('.flashcard');
            flashcard.classList.toggle('flipped');
        };

        window.prevCard = function() {
            currentCard = (currentCard - 1 + chapter.flashcards.length) % chapter.flashcards.length;
            updateFlashcard();
        };

        window.nextCard = function() {
            currentCard = (currentCard + 1) % chapter.flashcards.length;
            updateFlashcard();
        };
    }

    function showVideoLecture(chapterIndex) {
        window.location.href = "manual vedio/index.html"; // Redirects to manualv/index.html
    }
    
    

    function showTheory(chapterIndex) {
        window.location.href = chaptersData[chapterIndex].book;
    }

    function showGames(chapterIndex) {
        alert(`Games for ${chaptersData[chapterIndex].name} are not available yet.`);
    }

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Initial render
    renderChapters();

    // Make functions globally accessible
    window.toggleSubtopics = toggleSubtopics;
    window.searchChapter = searchChapter;
    window.showFlashcards = showFlashcards;
    window.showVideoLecture = showVideoLecture;
    window.showTheory = showTheory;
    window.showGames = showGames;
});

