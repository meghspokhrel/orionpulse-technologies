const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }

});


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!expanded)
        );

        document.body.classList.toggle(
            "menu-open",
            !expanded
        );

    });

}
