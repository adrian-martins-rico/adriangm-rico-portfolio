document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const nav = document.querySelector('.nav ul');
    const menuBtn = document.createElement('button');
    menuBtn.style.cssText = 'display:none; position:fixed; top:1rem; right:1rem; background:#12121c; color:#e0e0e0; padding:0.5rem; border-radius:4px; border:1px solid #2a2a3a; z-index:1001;';
    menuBtn.innerHTML = '<i style="color:#00d4aa;">☰</i>';
    document.body.appendChild(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        if (nav.style.display === 'flex' || nav.style.display === '') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.gap = '1rem';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
