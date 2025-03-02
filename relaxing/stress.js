// Event Listeners for Relaxation Type Buttons
document.getElementById('music-btn').addEventListener('click', function() {
    showContent('music');
});
document.getElementById('videos-btn').addEventListener('click', function() {
    showContent('videos');
});
document.getElementById('yoga-btn').addEventListener('click', function() {
    showContent('yoga');
});
document.getElementById('meditation-btn').addEventListener('click', function() {
    showContent('meditation');
});

// Show content based on the selected relaxation type
function showContent(type) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Hide audio and video players initially
    document.getElementById('audio-player-container').style.display = 'none';
    document.getElementById('video-player-container').style.display = 'none';

    // Show the selected section
    document.getElementById(`${type}-content`).style.display = 'block';

    // Show audio or video player if needed
    if (type === 'music') {
        document.getElementById('audio-player-container').style.display = 'block';
    } else if (type === 'videos' || type === 'yoga' || type === 'meditation') {
        document.getElementById('video-player-container').style.display = 'block';
    }
}

// For music buttons: Play the selected audio file
document.querySelectorAll('.music').forEach(button => {
    button.addEventListener('click', function() {
        const audioSrc = this.getAttribute('data-src');
        document.getElementById('audio-source').src = audioSrc;
        document.getElementById('audio-player').load(); // Load the new audio
        document.getElementById('audio-player').play(); // Start playing
    });
});

// For video buttons: Play the selected video
document.querySelectorAll('.video').forEach(button => {
    button.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-src');
        document.getElementById('video-player').src = videoSrc;
    });
});

// For YouTube video buttons: Play the selected video
document.querySelectorAll('.youtube-video').forEach(button => {
    button.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-src');
        document.getElementById('video-player').src = videoSrc;
    });
});
