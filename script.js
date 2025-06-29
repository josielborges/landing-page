// Developer Platform Landing Page - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initTypewriterEffect();
    initScrollAnimations();
    initSmoothScrolling();
    initNavbarScroll();
    initTerminalAnimation();
    initSkillTagsAnimation();
    initServiceCardsAnimation();
    initTechGridAnimation();
});

// Typewriter effect for terminal
function initTypewriterEffect() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 2000);
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.tech-item, .service-card, .skills-category, .about-content, .about-visual'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax apenas no fundo do hero
    // document.addEventListener('scroll', () => {
    //     const scrolled = window.pageYOffset;
    //     const heroBg = document.querySelector('.hero-bg');
    //     if (heroBg) {
    //         const speed = scrolled * 0.2;
    //         heroBg.style.transform = `translateY(${speed}px)`;
    //     }
    // });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Terminal animation
function initTerminalAnimation() {
    const terminal = document.querySelector('.terminal-window');
    if (!terminal) return;
    
    // Add typing animation to terminal
    const codeLines = terminal.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 800);
    });
}

// Skill tags hover animation
function initSkillTagsAnimation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Service cards animation
function initServiceCardsAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 255, 136, 0.2)';
        });
    });
}

// Tech grid animation
function initTechGridAnimation() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add animation class when elements come into view
// document.addEventListener('scroll', () => {
//     const elements = document.querySelectorAll('.animate-in');
//     elements.forEach(el => {
//         if (isElementInViewport(el)) {
//             el.style.opacity = '1';
//             el.style.transform = 'translateY(0)';
//         }
//     });
// });

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .fade-in-left {
        animation: fadeInLeft 0.8s ease forwards;
    }
    
    .fade-in-right {
        animation: fadeInRight 0.8s ease forwards;
    }
    
    /* Glow effect for buttons */
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    
    /* Terminal cursor animation */
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    /* Tech item shine effect */
    .tech-item::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent);
        transition: left 0.5s ease;
    }
    
    .tech-item:hover::after {
        left: 100%;
    }
    
    /* Service card top border animation */
    .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-green), var(--accent-green-muted));
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
    
    .service-card:hover::before {
        transform: scaleX(1);
    }
`;

document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero section elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-cta');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-up');
        }, index * 200);
    });
    
    // Animate terminal
    setTimeout(() => {
        const terminal = document.querySelector('.terminal-window');
        if (terminal) {
            terminal.classList.add('fade-in-right');
        }
    }, 800);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-green), var(--accent-green-muted));
    z-index: 1001;
    transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset;
//     const docHeight = document.body.offsetHeight - window.innerHeight;
//     const scrollPercent = (scrollTop / docHeight) * 100;
//     progressBar.style.width = scrollPercent + '%';
// });

// Add copy functionality for code blocks
document.querySelectorAll('.code-block').forEach(block => {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.className = 'copy-btn';
    copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--accent-green);
        color: var(--primary-bg-dark);
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    block.style.position = 'relative';
    block.appendChild(copyButton);
    
    block.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
    });
    
    block.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0';
    });
    
    copyButton.addEventListener('click', () => {
        const code = block.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        });
    });
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-green);
            border-radius: 50%;
            opacity: 0.3;
            pointer-events: none;
            animation: float 6s ease-in-out infinite;
            animation-delay: ${Math.random() * 6}s;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        hero.appendChild(particle);
    }
}

// Add floating animation
const floatAnimation = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
        }
    }
`;

style.textContent += floatAnimation;

// Initialize particles
setTimeout(createParticles, 1000);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        document.querySelectorAll('.modal, .menu-open').forEach(el => {
            el.classList.remove('active');
        });
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

// document.addEventListener('touchstart', (e) => {
//     touchStartY = e.changedTouches[0].screenY;
// });
// document.addEventListener('touchend', (e) => {
//     touchEndY = e.changedTouches[0].screenY;
//     handleSwipe();
// });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger scroll down
            window.scrollBy(0, 100);
        } else {
            // Swipe down - could trigger scroll up
            window.scrollBy(0, -100);
        }
    }
}

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
// window.addEventListener('scroll', throttle(() => {
//     // Scroll-based animations
// }, 16)); // ~60fps

console.log('🚀 Developer Platform Landing Page loaded successfully!');
console.log('💻 Built with modern web technologies');
console.log('🎨 Following Developer Platform Design System');

// --- Internationalization (i18n) ---
const translations = {
    en: {
        nav: ["About", "Services", "Technologies", "Contact"],
        hero: {
            title: "From Architecture to AI",
            subtitle: "Robust and Intelligent Software Solutions",
            description: "Java and Python specialist with over 15 years of experience, turning complex challenges into efficient digital products. Currently seeking freelance projects to get hands-on and build amazing solutions.",
            cta1: "Let's Talk",
            cta2: "My Services"
        },
        techTitle: "Technologies I Master",
        about: {
            title: "A Passion for Solving Problems",
            text: [
                "My journey in technology began in 2009. With a solid foundation in Computer Science and specializations in Agile Leadership and Artificial Intelligence, I've always been driven by curiosity and a desire to learn.",
                "I started with PHP, but it was in the Java ecosystem that I built my career and became a senior specialist. In 2016, I took on the challenge of technical leadership, guiding teams to deliver high-impact projects.",
                "Today, as a Tech Lead, my greatest pleasure is still the same as in the beginning: programming. I love being on the front lines, developing products, solving problems, and exploring new frontiers with Generative AI and Python.",
                "This passion for building motivates me to seek new challenges as a freelancer."
            ]
        },
        servicesTitle: "From Backend to Artificial Intelligence",
        services: [
            {
                title: "High-Performance Backend Development",
                desc: "Building robust and scalable systems with Java (Spring, Quarkus) and Python (FastAPI)."
            },
            {
                title: "Generative AI Solutions",
                desc: "Developing intelligent applications using OpenAI/Gemini libraries and frameworks like LangChain."
            },
            {
                title: "System Integration",
                desc: "Architecture and implementation of integrations via REST APIs, SOAP, and messaging solutions to connect complex ecosystems."
            },
            {
                title: "Intelligent Chatbots",
                desc: "Building chatbots for automating support and processes, offering smooth and efficient user experiences."
            },
            {
                title: "Software Architecture",
                desc: "Designing resilient and well-documented application architectures, ensuring longevity and maintainability."
            },
            {
                title: "Databases",
                desc: "Modeling and optimizing relational databases to ensure performance and data integrity."
            }
        ],
        skillsTitle: "My Toolbox",
        skills: {
            languages: "Languages",
            frameworks: "Backend Frameworks",
            ai: "Artificial Intelligence",
            databases: "Databases",
            integrations: "Integrations & APIs",
            methods: "Methodologies"
        },
        contactTitle: "Got a challenge in mind?",
        contactText: "If you are looking for a developer who combines deep technical knowledge, leadership experience, and a genuine passion for creating solutions, let's talk. I'm ready to help bring your project to life.",
        contactBtn: "Contact Me",
        footer: {
            services: "Services",
            contact: "Contact"
        }
    },
    pt: {
        nav: ["Sobre", "Serviços", "Tecnologias", "Contato"],
        hero: {
            title: "Da Arquitetura à IA",
            subtitle: "Soluções de Software Robustas e Inteligentes",
            description: "Especialista em Java e Python com mais de 15 anos de experiência, transformando desafios complexos em produtos digitais eficientes. Atualmente buscando projetos freelance para colocar a mão na massa e construir soluções incríveis.",
            cta1: "Vamos Conversar",
            cta2: "Meus Serviços"
        },
        techTitle: "Tecnologias que Domino",
        about: {
            title: "Uma Paixão por Resolver Problemas",
            text: [
                "Minha jornada no mundo da tecnologia começou em 2009. Com uma base sólida em Ciência da Computação e especializações em Liderança Ágil e Inteligência Artificial, sempre fui movido pela curiosidade e pelo desejo de aprender.",
                "Comecei com PHP, mas foi no ecossistema Java que construí minha carreira e me tornei um especialista sênior. Em 2016, assumi o desafio da liderança técnica, guiando equipes para entregar projetos de alto impacto.",
                "Hoje, como Tech Lead, meu maior prazer ainda é o mesmo do início: programar. Adoro estar na linha de frente, desenvolvendo produtos, resolvendo problemas e explorando novas fronteiras com IA Generativa e Python.",
                "É essa paixão por construir que me motiva a buscar novos desafios como freelancer."
            ]
        },
        servicesTitle: "Do Backend à Inteligência Artificial",
        services: [
            {
                title: "Desenvolvimento Backend de Alta Performance",
                desc: "Criação de sistemas robustos e escaláveis com Java (Spring, Quarkus) e Python (FastAPI)."
            },
            {
                title: "Soluções com IA Generativa",
                desc: "Desenvolvimento de aplicações inteligentes utilizando as bibliotecas da OpenAI/Gemini e frameworks como o LangChain."
            },
            {
                title: "Integração de Sistemas",
                desc: "Arquitetura e implementação de integrações via APIs REST, SOAP e soluções de mensageria para conectar ecossistemas complexos."
            },
            {
                title: "Chatbots Inteligentes",
                desc: "Construção de chatbots para automação de atendimento e processos, oferecendo experiências de usuário fluidas e eficientes."
            },
            {
                title: "Arquitetura de Software",
                desc: "Desenho de arquiteturas de aplicação resilientes e bem documentadas, garantindo a longevidade e a manutenibilidade do seu projeto."
            },
            {
                title: "Bancos de Dados",
                desc: "Modelagem e otimização de bancos de dados relacionais para garantir a performance e a integridade dos dados."
            }
        ],
        skillsTitle: "Minha Caixa de Ferramentas",
        skills: {
            languages: "Linguagens",
            frameworks: "Frameworks Backend",
            ai: "Inteligência Artificial",
            databases: "Bancos de Dados",
            integrations: "Integrações e APIs",
            methods: "Metodologias"
        },
        contactTitle: "Tem um desafio em mente?",
        contactText: "Se você busca um desenvolvedor que une profundo conhecimento técnico, experiência em liderança e uma paixão genuína por criar soluções, vamos conversar. Estou pronto para ajudar a tirar seu projeto do papel.",
        contactBtn: "Entre em Contato",
        footer: {
            services: "Serviços",
            contact: "Contato"
        }
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    // Navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((el, i) => el.textContent = t.nav[i]);
    // Hero
    document.querySelector('.hero-title').innerHTML = `<span class="code-bracket">{</span> ${t.hero.title} <span class="code-bracket">}</span>`;
    document.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelector('.hero-cta .btn-primary').textContent = t.hero.cta1;
    document.querySelector('.hero-cta .btn-secondary').textContent = t.hero.cta2;
    // Tecnologias
    document.querySelector('.technologies .section-title').textContent = t.techTitle;
    // About
    document.querySelector('.about .section-title').textContent = t.about.title;
    const aboutText = document.querySelector('.about-text');
    aboutText.innerHTML = t.about.text.map(p => `<p>${p}</p>`).join('');
    // Serviços
    document.querySelector('.services .section-title').textContent = t.servicesTitle;
    const serviceCards = document.querySelectorAll('.service-card');
    t.services.forEach((serv, i) => {
        serviceCards[i].querySelector('.service-title').textContent = serv.title;
        serviceCards[i].querySelector('.service-description').textContent = serv.desc;
    });
    // Skills
    document.querySelector('.skills .section-title').textContent = t.skillsTitle;
    const skillCats = document.querySelectorAll('.skills-category');
    skillCats[0].querySelector('.category-title').textContent = t.skills.languages;
    skillCats[1].querySelector('.category-title').textContent = t.skills.frameworks;
    skillCats[2].querySelector('.category-title').textContent = t.skills.ai;
    skillCats[3].querySelector('.category-title').textContent = t.skills.databases;
    skillCats[4].querySelector('.category-title').textContent = t.skills.integrations;
    skillCats[5].querySelector('.category-title').textContent = t.skills.methods;
    // Contato
    document.querySelector('.contact .section-title').textContent = t.contactTitle;
    document.querySelector('.contact-text p').textContent = t.contactText;
    document.querySelector('.contact-cta .btn-primary').textContent = t.contactBtn;
    // Footer
    const footerSections = document.querySelectorAll('.footer-section h4');
    footerSections[0].textContent = t.footer.services;
    footerSections[1].textContent = t.footer.contact;
}

// Language switcher logic
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        langBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        setLanguage(this.dataset.lang);
    });
});
// Set default language to English
setLanguage('en');
document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');

// Hamburger menu logic
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

document.addEventListener('click', function(e) {
    if (hamburgerBtn.contains(e.target)) {
        hamburgerMenu.classList.toggle('open');
    } else if (!hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('open');
    }
}); 