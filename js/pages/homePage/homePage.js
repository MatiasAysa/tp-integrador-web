import { BuscandorElementos } from "../../utils/buscarElementos.js";
import { CarruselProximos } from "./carrusel.js";
import { ModalElegirTipoCompra } from "../../utils/modalElegirTipoCompra.js";
import { DATOS_CURSOS } from "../../cursos/datosCursos.js";
import { ModalCarrito } from "../../utils/modalCarrito.js";

const buscarDom = new BuscandorElementos();
const contenedorCursosNuevos = buscarDom.buscandoElemento(".js-cursosNuevos_contenido");
const contenedorCursosDestacados = buscarDom.buscandoElemento(".js-cursosDestacados");
const contenedorCursosProximos = buscarDom.buscandoElemento(".js-proximos");

let hoy = new Date();

// ultimos cursos
DATOS_CURSOS.forEach(item => {

    let cantCursosRecientes = 0;

    const haceDosMeses = new Date();
    haceDosMeses.setMonth(hoy.getMonth() - 2);

    if (item.fecha_lanzamiento <= haceDosMeses || item.fecha_lanzamiento >= hoy) return;

    const templateCurso =
        `<a href="../courses/Detalles de curso 2.html">
            <article class="contenido_cardNuevos">
                <div class="card_imagenCursoNuevo">
                    <img src="../../${item.imagen}" alt="${item.nombre}">
                    <span>Nuevo</span>
                </div>
                <div class="card_infoCursoNuevo">
                    <h4>${item.nombre}</h4>
                    <span>${item.profesor}</span>
                </div>
            </article>
        </a>`;

    contenedorCursosNuevos.innerHTML += templateCurso;

});

const duplicado = contenedorCursosNuevos.innerHTML;
contenedorCursosNuevos.innerHTML += duplicado;
const duplicado2 = contenedorCursosNuevos.innerHTML;
contenedorCursosNuevos.innerHTML += duplicado2;

// cursos detacados
DATOS_CURSOS.forEach(item => {
    if (item.destacado !== true) return;
    
    let contCursos = 0;
    const templateCursosDestacados = `
    <article class="curso-card js-cursoCard" data-curso='${item.id}'>
                    <div class="curso-card__imagen">
                        <img src="../../${item.imagen}" alt="${item.nombre}">
                    </div>
                    <div class="curso-card__contenido">
                        <h3>${item.nombre}</h3>
                        <p>${item.descripcion_corta}</p>
                    </div>
                    <div class="curso-card__duracion">
                        <span><i class="fa-solid fa-clock"></i> Duracion: ${item.duracion} horas</span>
                    </div>
                    <div class="curso-card__precio">
                        <span>$${item.precio}</span>
                    </div>
                    <div class="curso-card__botones">
                        <button class="boton_añadir js-OpenModal boton_cursoCard">
                            <i class="fas fa-shopping-cart"></i>Añadir
                        </button>
                        <a href="../courses/Detalles de curso 1.html" class="boton_detalle boton_cursoCard">Ver detalles</a>
                    </div>
                </article>
    `;
    contCursos++;
    if (contCursos <= 6) {
        contenedorCursosDestacados.innerHTML += templateCursosDestacados;
    }
});

// proximos cursos
DATOS_CURSOS.forEach(item => {

    if (item.fecha_lanzamiento <= hoy) return;

    const templateProximosCursos = `
            <div class="proximos_carrusel">
                <div class="proximo_informacion">
                    <span class="prox_lanzamiento">Proximo Lanzamiento</span>
                    <h2>${item.nombre}</h2>
                    <span class="prox_disponible">Disponible apartir del ${item.fecha_lanzamiento.getDay()} de ${item.fecha_lanzamiento.toLocaleString('es-ES', { month: 'long' })} 
                    ${item.fecha_lanzamiento.getFullYear()}</span>
                    <p>${item.descripcion_corta}</p>
                    <span><a href="../courses/Detalles de curso 2.html" id="prox_detalles">Mas Detalles.</a></span>
                    <span class="ver_calendario"><a href="../calendar/calendar.html">Ver Calendario</a></span>
                </div>
                <div class="proximo_imagen">
                    <a href="../courses/Detalles de curso 3.html"><img src= "../../${item.imagen}"
                            alt="Imagen ${item.nombre}">
                    </a>
                </div>
            </div>
    `;

    contenedorCursosProximos.innerHTML += templateProximosCursos;
});

const botonDesplazarIzquierda = buscarDom.buscandoElemento(".js-boton-proximosLeft");
const botonDesplazarDerecha = buscarDom.buscandoElemento(".js-boton-proximosRight");

const carrusel = new CarruselProximos(
    contenedorCursosProximos,
    botonDesplazarIzquierda,
    botonDesplazarDerecha
);

const modealElegirCompra = buscarDom.buscandoElemento(".js-seccion3-dialog");

const modal = new ModalElegirTipoCompra(modealElegirCompra);
modal.render();

const modalCarrito = new ModalCarrito();
modalCarrito.render();










