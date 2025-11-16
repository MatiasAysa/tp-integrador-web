document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".niveles__divide2").forEach(nivelHeader => {

        nivelHeader.addEventListener("click", () => {
            const primerBloque = nivelHeader.nextElementSibling;
            const segundoBloque = primerBloque ? primerBloque.nextElementSibling : null;

            if (primerBloque) primerBloque.classList.toggle("active");
            if (segundoBloque) segundoBloque.classList.toggle("active");
        });

    });
});
