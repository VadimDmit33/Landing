document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Hero Section Loaded');
    
    // Add simple parallax effect on mouse move
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-3d-letter');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        
        if (heroImage) {
            heroImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });
});
