gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero-title", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".hero-contact", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".cta-button", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)"
});

// Nav Animation
gsap.from(".nav ul li", {
    opacity: 0,
    y: -30,
    stagger: 0.2,
    duration: 1,
    delay: 1,
    ease: "power3.out"
});

// Section Animations
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section.querySelector("h2"), {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset"
        }
    });

    gsap.from(section.querySelectorAll("p, .skill-card, .project-card, .experience-card, .cert-card"), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset"
        }
    });
});

// CTA Button Pulse
gsap.to(".cta-button", {
    scale: 1.03,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Skill Card Hover
gsap.utils.toArray(".skill-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.5, ease: "power2.out" });
    });
});

// Back-to-Top Button
const backToTop = document.createElement("a");
backToTop.href = "#";
backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.out" });
});