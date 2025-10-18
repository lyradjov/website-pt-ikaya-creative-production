document.addEventListener('DOMContentLoaded', function() {
    const leftElements = document.querySelectorAll('.fade-in-left');
    const rightElements = document.querySelectorAll('.fade-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    leftElements.forEach(element => {
        observer.observe(element);
    });

    rightElements.forEach(element => {
        observer.observe(element);
    });
});