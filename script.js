document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({
            behavior: 'smooth'
        });
    }

    document.addEventListener('wheel', function (event) {
        event.preventDefault(); // Prevent default scroll behavior

        const direction = event.deltaY > 0 ? 1 : -1;
        currentSectionIndex += direction;

        if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
        } else if (currentSectionIndex >= sections.length) {
            currentSectionIndex = sections.length - 1;
        }

        scrollToSection(currentSectionIndex);
    });
});
