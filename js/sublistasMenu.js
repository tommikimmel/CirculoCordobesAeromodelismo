document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los <li> que tengan un <a> dentro
    const menuItems = document.querySelectorAll("li");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            // Evita que el enlace recargue la página
            if (e.target.tagName === "A") {
                e.preventDefault();
            }
            // Si el <li> ya tiene la clase active, la quita
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                // Quita la clase active de todos los <li>
                menuItems.forEach(function (el) {
                    el.classList.remove("active");
                });
                // Agrega la clase active al <li> clickeado
                item.classList.add("active");
            }
        });
    });
});