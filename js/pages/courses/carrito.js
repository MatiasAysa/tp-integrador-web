import { BuscandorElementos } from "../../utils/buscarElementos.js";
import { DATOS_CURSOS } from "../../cursos/datosCursos.js";
const buscadorDom = new BuscandorElementos();
const contenedorProductos = buscadorDom.buscandoElemento(".js-contenedor-productos");
const botonesAñadir = document.querySelectorAll(".js-boton-añadirIndividual");
/*
function obtenerUsuarioDeLocalStorage(email, password) {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    for (const usuario of usuariosGuardados) {
        if (usuario.email === email && usuario.password === password) {
            return usuario;
        }
    }
}

const usuarioActual = obtenerUsuarioDeLocalStorage(
    JSON.parse(localStorage.getItem('usuarioActual'))?.email,
    JSON.parse(localStorage.getItem('usuarioActual'))?.password
);
*/
//ESTA PARTE ESTA MEGA HARDCODEADA PERO NO TENGO TIEMPO PARA HACERLO MEJOR
//POSIBLE MEJORA ,MODALELEGIRTIPOCOMPRA.JS
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
//BOTON AÑADIR
let idCursoSeleccionado = "";
const botonAbrirModal = document.querySelectorAll(".js-OpenModal");

renderCarrito();

botonAbrirModal.forEach(element => {
    element.addEventListener("click", (event) => {
        const cardCursoSeleccionado = event.target.closest(".curso-card");
        idCursoSeleccionado = cardCursoSeleccionado.dataset.curso;
        console.log("ID del curso seleccionado:", idCursoSeleccionado);
    });
});
//dato de color : en elemento que tienen como atributo ej data-curso = "el goat" 
//data es una palabra resercada que ademas de agregarle al elemento un atributo
//Permite guardar dicho valor del atributo en el famoso dataset

//BOTONES INDIVIDUAL AL CARRITO ,ES OTRA LOGICA,
botonesAñadir.forEach(boton => {
    boton.addEventListener("click", (event) => {
        let cursoParaAgregar = DATOS_CURSOS.find(curso => curso.id == idCursoSeleccionado);
        console.log(cursoParaAgregar);
        usuarioActual.cursosEnCarrito.push(cursoParaAgregar);
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
        renderCarrito();
    });
});


function renderCarrito() {
    contenedorProductos.innerHTML = ""; //reseteo para dibujar en hola limpia,el goat

    usuarioActual.cursosEnCarrito.forEach(producto => {

        const templateCursos = `
                    <section class="main_producto">
                    <div class="divProductoImagen">
                        <img class="imagenProducto" src="${producto.imagen}" alt="Imagen de producto">
                    </div>
                    <div class="productoDescripcion">
                        <span class="descripcionIcono"><i class="fa-solid fa-user"></i></span>
                        <div class="productoDescripcionInfo">
                            <h4>${producto.nombre}</h4>
                            <span>Profesor : ${producto.profesor}</span>
                            <span>Horas : ${producto.duracion}</span>
                            <button class="InfoEliminar js-EliminarCurso">Eliminar</button>
                        </div>
                        <div class="productoDescripcion_precio">
                            <span>$${producto.precio}</span>
                        </div>
                    </div>
                </section>`;

        contenedorProductos.innerHTML += templateCursos;
    });

}