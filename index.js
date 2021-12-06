const navToggle = document.querySelector(".nav-toggle-header")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

    if (navMenu.classList.contains("nav-menu-visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }