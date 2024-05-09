class FadeInOnScroll {
    constructor() {
        this.elements = document.querySelectorAll('.project.fade-in'); // Elements to animate
        this.threshold = 0.3; // Change this threshold as needed
        this.init();
    }

    init() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: this.threshold,
        };

        // Create a new Intersection Observer
        const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);

        // Observe each element
        this.elements.forEach((element) => {
            observer.observe(element);
        });
    }

    handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= this.threshold) {
                entry.target.classList.add('visible'); // Add a class to trigger the animation
                observer.unobserve(entry.target); // Stop observing the element once it's visible
            }
        });
    }
}

// Initialize the fade-in animation class when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FadeInOnScroll();
});
