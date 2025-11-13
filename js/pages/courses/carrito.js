import { BuscandorElementos } from "../../utils/buscarElementos.js";
import { cursosProductosGrupal, cursosProductosInd } from "./constantesCarrito.js";
const buscadorDom = new BuscandorElementos();
const contenedorProductos = buscadorDom.buscandoElemento(".js-contenedor-productos");

cursosProductosInd.forEach(producto => {
    const templateCursos = `
                    <section class="main_producto">
                    <div class="divProductoImagen">
                        <img class="imagenProducto" src="${producto.img}" alt="Imagen de producto">
                    </div>
                    <div class="productoDescripcion">
                        <span class="descripcionIcono"><i class="fa-solid fa-user"></i></span>
                        <div class="productoDescripcionInfo">
                            <h4>${producto.nombre}</h4>
                            <span>Profesor : ${producto.profesor}</span>
                            <span>Horas : ${producto.horas}</span>
                            <button class="InfoEliminar js-EliminarCurso">Eliminar</button>
                        </div>
                        <div class="productoDescripcion_precio">
                            <span>$${producto.precio}</span>
                        </div>
                    </div>
                </section>`;

    contenedorProductos.innerHTML += templateCursos;
});
cursosProductosGrupal.forEach(producto => {
    const templateCursos = `
                    <section class="main_producto">
                    <div class="divProductoImagen">
                        <img class="imagenProducto" src="${producto.img}" alt="Imagen de producto">
                    </div>
                    <div class="productoDescripcion">
                        <span class="descripcionIcono"><i class="fa-solid fa-users"></i></span>
                        <div class="productoDescripcionInfo">
                            <h4>${producto.nombre}</h4>
                            <span>Profesor : ${producto.profesor}</span>
                            <span>Horas : ${producto.horas}</span>
                            <span>Participantes : ${producto.participantes}</span>
                            <span>Precio c/u : $${producto.precioUnidad}</span>
                            <button class="InfoEliminar js-EliminarCurso">Eliminar</button>
                        </div>
                        <div class="productoDescripcion_precio">
                            <span>$${producto.precio}</span>
                        </div>
                    </div>
                </section>`;

    contenedorProductos.innerHTML += templateCursos;
});