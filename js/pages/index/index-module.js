import { BuscandorElementos } from "../../utils/buscarElementos.js";
import { DATOS_CURSOS } from "../courses/datosCursos.js";
import { modal } from "../../utils/mostrarModal.js"

const buscarDom = new BuscandorElementos();
const contenedorCursos = buscarDom.buscandoElemento(".main__seccion3__cards");

DATOS_CURSOS.forEach(item => {
    if (item.destacado !== true) return;
    
    let contCursos = 0;
    const templateCursosDestacados = `
    <article class="curso-card" data-curso='${item.id}'>
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
                        <button class="boton_añadir boton_cursoCard">
                            <i class="fas fa-shopping-cart"></i>Añadir
                        </button>
                        <a class="boton_detalle boton_cursoCard">Ver detalles</a>
                    </div>
                </article>
    `;
    contCursos++;
    if (contCursos <= 6) {
        contenedorCursos.innerHTML += templateCursosDestacados;
    }
});
const btn_detallesCurso = document.querySelectorAll('.boton_detalle');
const btn_agregarCarrito = document.querySelectorAll('.boton_añadir')
const cursosDestacados = document.querySelectorAll('.curso-card');
extraerIdCursoClickeando(btn_detallesCurso, cursosDestacados);

function extraerIdCursoClickeando(elemento, cursos) {
    elemento.forEach((item, i) => {
        item.addEventListener('click', (evento) => {
            evento.preventDefault();
            const cursoId = cursos[i].getAttribute('data-curso');
            console.log(`./pages/courses/course-details.html?id=${cursoId}`);
            
            window.location.href = `./pages/courses/course-details.html?id=${cursoId}`;
        });
    });

}
btn_agregarCarrito.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        modal.mostrarMensaje('Debe iniciar sesion para agregar al carrito', () =>
            window.location.href = `./pages/account-stuff/log-in.html`)
    })
}
)

