const contenedorCursosDetalle = document.querySelector(".js-detalleCompra");
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
const botonRealizarCompra = document.querySelector(".js-realizarCompra");
usuarioActual.cursosEnCarrito.forEach(curso => {
    const templateCursosDetalle = `
                        <section class="compra_curso">
                            <article class="curso_imagen">
                                <img src="${curso.imagen}" alt="${curso.nombre}">
                            </article>
                            <article class="curso_informacion">
                                <p>${curso.nombre}</p>
                                <p>Profesor: <span>${curso.profesor.nombre}</span></p>
                            </article>
                        </section>
`;
    contenedorCursosDetalle.innerHTML += templateCursosDetalle;
});

botonRealizarCompra.addEventListener("click", (e) => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarioActual.cursosEnCarrito.forEach(curso => {
        usuarioActual.cursosObtenidos.push(curso);
    });
    usuarioActual.cursosEnCarrito = [];
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
    guardarEnUsuarios(usuarioActual);

});

function guardarEnUsuarios(usuarioActual) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuariosActualizados = usuarios.map(u =>
        u.email === usuarioActual.email ? usuarioActual : u
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
}