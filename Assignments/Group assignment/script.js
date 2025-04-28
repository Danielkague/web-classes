// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to skill bars on scroll
window.addEventListener('scroll', function() {
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    if (isInViewport(skillSection)) {
        skillBars.forEach(bar => {
            bar.style.width = bar.parentElement.getAttribute('data-width');
        });
    }
});

// Helper function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
let counted = false;

window.addEventListener('scroll', function() {
    if (!counted && isInViewport(document.querySelector('.stats'))) {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let count = 0;
            const interval = setInterval(() => {
                stat.textContent = count;
                if (count >= target) {
                    clearInterval(interval);
                }
                count += Math.ceil(target / 100);
            }, 20);
        });
        counted = true;
    }
});