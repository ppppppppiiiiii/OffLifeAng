document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".scroll-reveal");

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
