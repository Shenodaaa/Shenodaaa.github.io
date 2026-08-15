/* =========================
   LANGUAGE SWITCHER
========================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

function changeLanguage() {

    currentLanguage = currentLanguage === "en" ? "ar" : "en";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en]").forEach(element => {

        const translation =
            element.getAttribute(`data-${currentLanguage}`);

        if (translation) {
            element.textContent = translation;
        }

    });

    languageBtn.textContent =
        currentLanguage === "en" ? "AR" : "EN";
}

languageBtn.addEventListener("click", changeLanguage);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .skill-card, .education-card, .empty-projects, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);

sections.forEach(section => {
    navObserver.observe(section);
});/* =========================
   SKILLS STAGGER ANIMATION
========================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.12}s`;
});
/* =========================
   AUTOMATIC FOOTER YEAR
========================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}