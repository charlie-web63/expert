// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Button ripple effect
document.querySelectorAll('button, .add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `
.ripple {
    position: absolute;
    background: rgba(41, 128, 185, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    pointer-events: none;
    width: 100px;
    height: 100px;
    z-index: 10;
}
@keyframes ripple-effect {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
}
button, .add-cart-btn { position: relative; overflow: hidden; }
`;
document.head.appendChild(rippleStyle);

// Simple form validation for signup and contact forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        let valid = true;
        this.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                valid = false;
            } else {
                field.style.borderColor = '#ccc';
            }
        });
        if (!valid) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
});

// Show password toggle for login and signup forms
document.querySelectorAll('input[type="password"]').forEach(input => {
    const toggle = document.createElement('span');
    toggle.textContent = '👁️';
    toggle.style.cursor = 'pointer';
    toggle.style.position = 'absolute';
    toggle.style.right = '10px';
    toggle.style.top = '50%';
    toggle.style.transform = 'translateY(-50%)';
    toggle.style.fontSize = '1.2em';
    input.parentNode.style.position = 'relative';
    input.parentNode.appendChild(toggle);
    toggle.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});