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
        const cantCursosSpan = document.querySelectorAll(".js-cantCursos");
        const totalPrecioSpan = document.querySelectorAll(".js-totalPrecio");
        const contadorCarrito = buscadorDom.buscandoElemento(".carrito-count");
        const modal = new ModalElegirTipoCompra();
        modal.render();
        //ESTA PARTE ESTA MEGA HARDCODEADA PERO NO TENGO TIEMPO PARA HACERLO MEJOR
        //POSIBLE MEJORA ,MODALELEGIRTIPOCOMPRA.JS
        const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
        //BOTON AÑADIR
        let idCursoSeleccionado = "";
        const botonAbrirModal = document.querySelectorAll(".js-OpenModal");

        renderCarrito();
        actualizarResumenCompra();

        function actualizarResumenCompra() {
            contadorCarrito.textContent = actualizarCantCursos(usuarioActual);
            cantCursosSpan.forEach(span => {
                span.textContent = actualizarCantCursos(usuarioActual);
            });
            totalPrecioSpan.forEach(span => {
                span.textContent = `$${total(usuarioActual)}`;
            });
        }

        botonAbrirModal.forEach(element => {
            element.addEventListener("click", (event) => {
                const cardCursoSeleccionado = event.target.closest(".curso-card");
                idCursoSeleccionado = cardCursoSeleccionado.dataset.curso;
                console.log("ID del curso seleccionado:", idCursoSeleccionado);
            });
        });

        //BOTONES INDIVIDUAL AL CARRITO ,ES OTRA LOGICA,
        botonesAñadir.forEach(boton => {

            boton.addEventListener("click", (event) => {
                let cursoParaAgregar = DATOS_CURSOS.find(curso => curso.id == idCursoSeleccionado);
                const modealElegirCompra = buscadorDom.buscandoElemento(".js-seccion3-dialog");

                if (!cursoParaAgregar) {
                    console.warn("Intentaste agregar un curso inexistente o sin seleccionar.");
                    return;
                }

                const yaExiste = usuarioActual.cursosEnCarrito.some(c => c.id === cursoParaAgregar.id);

                if (yaExiste) {
                    mostrarMensajeFinal("Este curso ya está en tu carrito.", "error");
                    modealElegirCompra.close();
                    return;
                }

                const yaLoTiene = usuarioActual.cursosObtenidos?.some(c => c.id === cursoParaAgregar.id);
                if (yaLoTiene) {
                    mostrarMensajeFinal("Ya obtuviste este curso, no puedes volver a añadirlo.", "error");
                    modealElegirCompra.close();
                    return;
                }

                usuarioActual.cursosEnCarrito.push(cursoParaAgregar);
                localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
                guardarEnUsuarios(usuarioActual);
                renderCarrito();
                actualizarResumenCompra();
                mostrarMensajeFinal("Feliciadsed", "exito");
                modealElegirCompra.close();
            });
        });

        //eliminar
        contenedorProductos.addEventListener("click", (e) => {
            const eliminarBtn = e.target.closest(".js-EliminarCurso");
            if (!eliminarBtn) return;

            const productSection = eliminarBtn.closest(".main_producto");
            if (!productSection) return;

            const idEliminar = productSection.dataset.curso;

            usuarioActual.cursosEnCarrito =
                usuarioActual.cursosEnCarrito.filter(c => String(c.id) !== String(idEliminar));

            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            guardarEnUsuarios(usuarioActual);
            renderCarrito();
            actualizarResumenCompra();
        });


        function mostrarMensajeFinal(mensaje, tipo = "exito") {
            const icono = tipo === "exito" ? "fa-check-circle" : "fa-exclamation-triangle";
            const color = tipo === "exito" ? "#4CAF50" : "#f44336";

            const mensajeDiv = document.createElement("div");
            mensajeDiv.className = `mensaje-final mensaje-${tipo}`;

            mensajeDiv.innerHTML = `
        <i class="fa-solid ${icono}"></i>
        <span>${mensaje}</span>
    `;

            mensajeDiv.style.cssText = `
        position: fixed;
        top: 2em;
        right: 2em;
        background: ${color};
        color: white;
        padding: 1em 1.3em;
        border-radius: 8px;
        display: flex;
        align-items: center;
        max-width: 27em;
        gap: 1em;
        box-shadow: rgba(0,0,0,0.25) 0px 4px 10px;
    `;

            document.body.appendChild(mensajeDiv);

            setTimeout(() => {
                mensajeDiv.remove();
            }, 2000);
        }




        function renderCarrito() {
            contenedorProductos.innerHTML = ""; //reseteo para dibujar en hola limpia,el goat
            if (usuarioActual.cursosEnCarrito.length === 0) {
                contenedorProductos.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
                return;
            }
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
                            <span>Profesor : ${producto.profesor.nombre}</span>
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
        function guardarEnUsuarios(usuarioActual) {
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            const usuariosActualizados = usuarios.map(u =>
                u.email === usuarioActual.email ? usuarioActual : u
            );

            localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
        }

        function actualizarCantCursos(usuarioActual) {
            return usuarioActual.cursosEnCarrito.length;
        }
        function total(usuarioActual) {
            let total = 0;
            usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
            usuarioActual.cursosEnCarrito.forEach(curso => {
                total = total + curso.precio;
            });
            return total;
        }
        
        
            
    }

}
