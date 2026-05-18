/**
 * GARGI KAR PORTFOLIO - INTERACTIVE SCRIPTS
 * Futuristic, cinematic, and agentic.
 */

(function () {
    "use strict";

    /* ============================================
       CONFIGURATION
       ============================================ */
    const CONFIG = {
        scrollRevealOffset: 100,
        scrollRevealThreshold: 0.15,
        parallaxIntensity: 0.05,
        tiltMaxAngle: 10,
        glareOpacity: 0.3,
        statsCountDuration: 2000,
    };

    /* ============================================
       DOM ELEMENTS
       ============================================ */
    let nav, heroVisual, scrollRevealElements, tiltElements, form;
    let animateOnScrollObserver;

    /* ============================================
       INITIALIZATION
       ============================================ */
    function init() {
        cacheDOM();
        initScrollReveal();
        init3DTilt();
        initNeuralNetwork();
        initStatsCounter();
        initParallax();
        initSmoothScroll();
        initContactForm();
        initNavScroll();
        initMouseGlow();
    }

    function cacheDOM() {
        nav = document.querySelector(".nav");
        heroVisual = document.querySelector(".hero-visual");
        scrollRevealElements = document.querySelectorAll("[data-scroll-reveal]");
        tiltElements = document.querySelectorAll("[data-tilt]");
        form = document.getElementById("contactForm");
    }

    /* ============================================
       SCROLL REVEAL ANIMATIONS
       ============================================ */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll("[data-scroll-reveal]");

        const observerOptions = {
            root: null,
            rootMargin: `0px 0px -${CONFIG.scrollRevealOffset}px 0px`,
            threshold: CONFIG.scrollRevealThreshold,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add("is-visible");
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        };

        animateOnScrollObserver = new IntersectionObserver(observerCallback, observerOptions);

        revealElements.forEach((el) => {
            animateOnScrollObserver.observe(el);
        });
    }

    /* ============================================
       3D TILT EFFECT (VANITY TILT)
       ============================================ */
    function init3DTilt() {
        const cards = document.querySelectorAll("[data-tilt]");

        cards.forEach((card) => {
            card.addEventListener("mousemove", handleTiltMouseMove);
            card.addEventListener("mouseleave", handleTiltMouseLeave);
        });
    }

    function handleTiltMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -CONFIG.tiltMaxAngle;
        const rotateY = ((x - centerX) / centerX) * CONFIG.tiltMaxAngle;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Update CSS variables for glow position
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${xPercent}%`);
        card.style.setProperty("--mouse-y", `${yPercent}%`);
    }

    function handleTiltMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    }

    /* ============================================
       NEURAL NETWORK EFFECT
       ============================================ */
    function initNeuralNetwork() {
        const neuralContainer = document.getElementById("neuralNetwork");
        if (!neuralContainer) return;

        const nodeCount = 15;
        const containerRect = neuralContainer.getBoundingClientRect();

        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement("div");
            node.className = "neural-node";
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            node.style.left = `${x}%`;
            node.style.top = `${y}%`;
            node.style.animationDelay = `${Math.random() * 6}s`;
            node.style.animationDuration = `${4 + Math.random() * 4}s`;
            neuralContainer.appendChild(node);
        }
    }

    /* ============================================
       STATS COUNTER ANIMATION
       ============================================ */
    function initStatsCounter() {
        const counters = document.querySelectorAll("[data-count]");

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        };

        const counterObserver = new IntersectionObserver(observerCallback, observerOptions);

        counters.forEach((counter) => {
            counterObserver.observe(counter);
        });
    }

    function animateCounter(element) {
        const target = parseInt(element.dataset.count, 10);
        const duration = CONFIG.statsCountDuration;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeOutQuart(progress);
            const current = Math.floor(easeProgress * target);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    /* ============================================
       PARALLAX EFFECT
       ============================================ */
    function initParallax() {
        let ticking = false;

        window.addEventListener("scroll", () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    function handleParallax() {
        const scrollY = window.scrollY;
        const width = window.innerWidth;

        if (width < 1024) return;

        // Parallax for hero visual
        if (heroVisual) {
            const heroParallax = scrollY * 0.3;
            heroVisual.style.transform = `translateY(${heroParallax}px)`;
        }
    }

    /* ============================================
       SMOOTH SCROLL NAVIGATION
       ============================================ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute("href");
                if (targetId === "#") return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        });
    }

    /* ============================================
       CONTACT FORM
       ============================================ */
    function initContactForm() {
        if (!form) return;

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const btn = form.querySelector(".btn-submit");
            const originalText = btn.textContent;

            btn.innerHTML = '<span class="btn-glow"></span>Transmitting...';
            btn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                btn.innerHTML = '<span class="btn-glow"></span>Transmitted!';
                btn.style.background = "var(--color-bg-secondary)";
                btn.style.border = "1px solid var(--color-accent)";

                setTimeout(() => {
                    btn.innerHTML = `<span class="btn-glow"></span>${originalText}`;
                    btn.disabled = false;
                    btn.style.background = "";
                    btn.style.border = "";
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }

    /* ============================================
       NAVIGATION SCROLL EFFECT
       ============================================ */
    function initNavScroll() {
        let lastScrollY = 0;

        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                nav.style.background = "rgba(10, 10, 10, 0.95)";
                nav.style.backdropFilter = "blur(20px)";
            } else {
                nav.style.background = "linear-gradient(to bottom, rgba(10, 10, 10, 0.9) 0%, transparent 100%)";
                nav.style.backdropFilter = "blur(10px)";
            }

            lastScrollY = currentScrollY;
        });
    }

    /* ============================================
       MOUSE GLOW EFFECT FOR CARDS
       ============================================ */
    function initMouseGlow() {
        const cards = document.querySelectorAll(".bento-card, .project-card");

        cards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                card.style.setProperty("--mouse-x", `${x}%`);
                card.style.setProperty("--mouse-y", `${y}%`);
            });
        });
    }

    /* ============================================
       INITIALIZE WHEN DOM IS READY
       ============================================ */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();