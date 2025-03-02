let score = 0;

// Add drag events to blocks
const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    block.addEventListener('dragstart', dragStart);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

// Add drop events to test tubes
const testTubes = document.querySelectorAll('.test-tube');
testTubes.forEach(tube => {
    tube.addEventListener('dragover', dragOver);
    tube.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault(); // Allow dropping
}

function drop(event) {
    const draggedBlockId = event.dataTransfer.getData('text');
    const draggedBlock = document.getElementById(draggedBlockId);
    const correctTubeId = draggedBlockId + '-tube';

    if (event.target.id === correctTubeId) {
        // Correct drop
        event.target.appendChild(draggedBlock);
        score += 10;
        updateScore();
    } else {
        // Incorrect drop
        alert('Incorrect! Try again.');
    }
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}
