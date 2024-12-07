// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamiskt år i footern
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
