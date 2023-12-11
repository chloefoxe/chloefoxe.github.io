$(document).ready(function() {
    let sections = $('.section');
    let currentSectionIndex = 0;

    function changeSection() {
        sections.eq(currentSectionIndex).removeClass('active');
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        sections.eq(currentSectionIndex).addClass('active');
    }

    function scrollHandler() {
        let scrollPosition = $(window).scrollTop() + $(window).height();

        if (scrollPosition >= sections.eq(currentSectionIndex).offset().top + sections.eq(currentSectionIndex).outerHeight()) {
            changeSection();

            // Add smooth scroll to the start of the next section
            sections.eq(currentSectionIndex)[0].scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Initial setup
    sections.eq(currentSectionIndex).addClass('active');

    // Event listener for scroll
    $(window).on('scroll', scrollHandler);
});
