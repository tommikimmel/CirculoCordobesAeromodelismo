document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menuToggle");
    const contHeader = document.querySelector(".contHeader");

    menuBtn.addEventListener("click", function () {
        contHeader.classList.toggle("headerActive");
        menuBtn.classList.toggle("open");
    });
});
