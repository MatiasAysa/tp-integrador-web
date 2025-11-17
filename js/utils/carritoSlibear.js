import { BuscandorElementos } from "./buscarElementos.js";
import { DATOS_CURSOS } from "../../js/pages/courses/datosCursos.js";
import { ModalElegirTipoCompra } from "./modalElegirTipoCompra.js";
export class CarritoSlibear {
    constructor() {
    }

    render() {
        const buscadorDom = new BuscandorElementos();
        const contenedorProductos = buscadorDom.buscandoElemento(".js-contenedor-productos");
        const botonesAñadir = document.querySelectorAll(".js-boton-añadirIndividual");

        const modal = new ModalElegirTipoCompra();
        modal.render();
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

        //BOTONES INDIVIDUAL AL CARRITO ,ES OTRA LOGICA,
        botonesAñadir.forEach(boton => {
            /*
                        boton.addEventListener("click", (event) => {
                let cursoParaAgregar = DATOS_CURSOS.find(curso => curso.id == idCursoSeleccionado);
                console.log(cursoParaAgregar);
                usuarioActual.cursosEnCarrito.push(cursoParaAgregar);
                localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
                renderCarrito();
            });
            */
            boton.addEventListener("click", (event) => {
                let cursoParaAgregar = DATOS_CURSOS.find(curso => curso.id == idCursoSeleccionado);

                if (!cursoParaAgregar) {
                    console.warn("Intentaste agregar un curso inexistente o sin seleccionar.");
                    return;
                }

                usuarioActual.cursosEnCarrito.push(cursoParaAgregar);
                localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
                renderCarrito();
            });
        });

        // Delegación de evento para eliminar cursos desde el carrito
        contenedorProductos.addEventListener("click", (e) => {
            const eliminarBtn = e.target.closest(".js-EliminarCurso");
            console.log("sda");
            if (!eliminarBtn) return;

            const productSection = eliminarBtn.closest(".main_producto");
            if (!productSection) return;

            const idEliminar = productSection.dataset.curso;

            usuarioActual.cursosEnCarrito =
                usuarioActual.cursosEnCarrito.filter(c => String(c.id) !== String(idEliminar));

            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            renderCarrito();
        });






        function renderCarrito() {
            contenedorProductos.innerHTML = ""; //reseteo para dibujar en hola limpia,el goat
            usuarioActual.cursosEnCarrito.forEach(producto => {

                const templateCursos = `
                    <section class="main_producto" data-curso="${producto.id}" >
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
    }


}

