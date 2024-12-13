const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;
        toggle.ariaExpanded = isClosed;
        nav.ariaHidden = isOpen;
        page.classList.toggle("noscroll", isClosed);
    });
}

const carousel = document.querySelector(".carrousel");
const prevButton = document.querySelector(".arrow__carrousel--left");
const nextButton = document.querySelector(".arrow__carrousel--right");

if (carousel && prevButton && nextButton) {
    // Calculer la largeur d'un élément avec l'espace entre eux
    const itemWidth = document.querySelector(".carrousel__img--film").offsetWidth + 24;

    // Flèche gauche - Défilement vers la gauche
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: -itemWidth, // Défiler vers la gauche
            behavior: "smooth", // Animation douce
        });
    });

    // Flèche droite - Défilement vers la droite
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({
            left: itemWidth, // Défiler vers la droite
            behavior: "smooth", // Animation douce
        });
    });
}