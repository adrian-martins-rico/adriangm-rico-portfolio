// Interacciones del portfolio

document.addEventListener('DOMContentLoaded', function() {

    // Menú móvil (toggle)
    const nav = document.querySelector('.nav ul');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.style.display = 'none';
    menuBtn.style.position = 'fixed';
    menuBtn.style.top = '1rem';
    menuBtn.style.right = '1rem';
    menuBtn.style.zIndex = '1001';
    menuBtn.style.background = 'var(--card-bg)';
    menuBtn.style.color = 'var(--text-primary)';
    menuBtn.style.padding = '0.5rem';
    menuBtn.style.borderRadius = '4px';
    menuBtn.style.border = '1px solid var(--border-color)';
    document.body.appendChild(menuBtn);

    menuBtn.addEventListener('click', function() {
        if (nav.style.display === 'flex' || nav.style.display === '') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            flexDirection: column;
            gap: 1rem;
        }
    });

    // Activar enlace activo en el menú
    const links = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Suave scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal para Descargar CV (simulado)
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('CV download functionality would open your CV file here.');
        });
    }

    // Efecto hover en cards
    const cards = document.querySelectorAll('.offer-card, .project-card, .process-item, .education-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rising: true
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar estilo inicial para animación
    const animatedElements = document.querySelectorAll('.hero-content, .offer-grid .offer-card, .approach-content, .skills-grid .skill-category, .process-grid .process-item, .projects-grid .project-card, .education-grid .education-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});