import { DATOS_CURSOS } from './datosCursos.js';

const btn_detallesCurso = document.querySelectorAll('.boton_detalle');
const cursos = document.querySelectorAll('.curso-card');

btn_detallesCurso.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const cursoId = cursos[i].getAttribute('data-curso');
        // const curso = DATOS_CURSOS.find(c => c.id === cursoId);
        window.location.href = `../courses/course-details.html?id=${cursoId}`;
    });
})
