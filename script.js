document.addEventListener('DOMContentLoaded', function () {
    // ... code inside the event listener function ...

    let sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function changeSection() {
        // ... code inside the changeSection function ...
    }

    // Initial setup
    sections[currentSectionIndex].classList.add('active');

    // Event listener for scroll
    window.addEventListener('scroll', function () {
        // ... code inside the scroll event listener function ...

        if (scrollPosition >= sections[currentSectionIndex].offsetTop + sections[currentSectionIndex].offsetHeight) {
            changeSection();
        }
    });
});