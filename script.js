// Select all sections and footer
const elements = document.querySelectorAll(
    "section, footer"
);

// Create an observer
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

elements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});

