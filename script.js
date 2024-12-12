document.addEventListener('DOMContentLoaded', () => {
    const villaCards = document.querySelectorAll('.villa-card');
    
    villaCards.forEach(card => {
        const button = card.querySelector('.cta-button');
        
        button.addEventListener('click', (e) => {
            // Add a ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
            
            // Here you can add the redirect logic
            // window.location.href = 'villa-specific-page.html';
        });
    });
}); 