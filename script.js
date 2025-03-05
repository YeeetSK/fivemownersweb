// Smooth scrolling with active link highlighting
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });

            // Add active class to the clicked link
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Section fade-in animations on scroll with staggered delays
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200); // Staggered delay for each section
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    const span = document.querySelector('.text-imp');
    const triggerPoint = window.innerHeight / 1.5;

    function checkScroll() {
        const headerPosition = header.getBoundingClientRect().top;
        if (headerPosition < triggerPoint) {
            span.classList.add('scroll-animate');
        } else {
            span.classList.remove('scroll-animate');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check in case the element is already in view
});
