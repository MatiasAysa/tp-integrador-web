import { DATOS_CURSOS } from './datosCursos.js';


// --- HOMEPAGE ---

// proximos cursos
const imgProxCurso = document.querySelectorAll('.clickImagenProxCurso-js');
const masDetallesProxCurso = document.querySelectorAll('.clickMasDetalles-js');
const proximosCursos = document.querySelectorAll('.proximos_carrusel');
extraerIdCursoClickeando(imgProxCurso, proximosCursos);
extraerIdCursoClickeando(masDetallesProxCurso, proximosCursos);

// ultimos cursos
const ultimosCursos = document.querySelectorAll('.contenido_cardNuevos');
extraerIdCursoClickeando(ultimosCursos, ultimosCursos);

// cursos destacados
const btn_detallesCurso = document.querySelectorAll('.boton_detalle');
const cursosDestacados = document.querySelectorAll('.curso-card');
extraerIdCursoClickeando(btn_detallesCurso, cursosDestacados);
// extraerIdCursoClickeando(cursosDestacados, cursosDestacados);


// --- LISTA DE CURSOS ---
const btn_masInfo = document.querySelectorAll(".masInfo-js")
const cursosLista = document.querySelectorAll(".cursoContenedor-js");
extraerIdCursoClickeando(btn_masInfo, cursosLista);


// --- funciones ---

function extraerIdCursoClickeando(elemento, cursos) {
    elemento.forEach((item, i) => {
        item.addEventListener('click', (evento) => {
            evento.preventDefault();
            const cursoId = cursos[i].getAttribute('data-curso');
            window.location.href = `../courses/course-details.html?id=${cursoId}`;
        });
    });

}