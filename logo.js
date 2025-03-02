document.addEventListener('DOMContentLoaded', () => {
    const keyIcon = document.querySelector('.key-icon');
    const logoText = document.querySelector('.logo-text');

    keyIcon.addEventListener('mouseover', () => {
        keyIcon.style.animationDuration = '5s';
    });

    keyIcon.addEventListener('mouseout', () => {
        keyIcon.style.animationDuration = '10s';
    });

    logoText.addEventListener('mouseover', () => {
        const guru = logoText.querySelector('.guru');
        const killi = logoText.querySelector('.killi');
        
        guru.style.color = '#A52A2A';  // Darker red
        killi.style.color = '#FFD700';  // Brighter gold
    });

    logoText.addEventListener('mouseout', () => {
        const guru = logoText.querySelector('.guru');
        const killi = logoText.querySelector('.killi');
        
        guru.style.color = '#800000';  // Original red
        killi.style.color = '#E0A75E';  // Original gold
    });
});

