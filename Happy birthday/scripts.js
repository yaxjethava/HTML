let currentSection = 0;
const sections = document.querySelectorAll('.section');
const container = document.querySelector('.container');

function handleSwipe(event) {
    if (event.deltaY > 0) {
        // Swipe down
        if (currentSection < sections.length - 1) {
            currentSection++;
        } else {
            currentSection = 0; // Loop back to the first section
        }
    } else {
        // Swipe up
        if (currentSection > 0) {
            currentSection--;
        } else {
            currentSection = sections.length - 1; // Loop back to the last section
        }
    }
    updateSection();
}

function updateSection() {
    container.style.transform = `translateY(-${currentSection * 100}vh)`;
    
    sections.forEach((section, index) => {
        section.style.opacity = (index === currentSection) ? '1' : '0';
        section.style.transform = (index === currentSection) ? 'translateY(0)' : 'translateY(50px)';
    });
}

// Add smooth scrolling to the container
container.addEventListener('transitionend', () => {
    sections.forEach((section, index) => {
        if (index === currentSection) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});

window.addEventListener('wheel', handleSwipe);

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
    } else {
        currentSection = 0;
    }
    updateSection();
}
