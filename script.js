document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function changeSection() {
        sections[currentSectionIndex].classList.remove('active');
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        sections[currentSectionIndex].classList.add('active');
    }

    function scrollHandler() {
        let scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= sections[currentSectionIndex].offsetTop + sections[currentSectionIndex].offsetHeight) {
            changeSection();
        }
    }

    // Initial setup
    sections[currentSectionIndex].classList.add('active');

    // Event listener for scroll
    window.addEventListener('scroll', scrollHandler);
});
