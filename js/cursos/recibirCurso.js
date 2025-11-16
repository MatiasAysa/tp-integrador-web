import { DATOS_CURSOS } from './datosCursos.js';

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const datos = DATOS_CURSOS.find(curso => curso.id == id);

console.log("descripcion: " + datos.descripcion_corta);

const tituloCurso = document.querySelector(".titulo");
tituloCurso.textContent = datos.nombre;

const imagenCurso = document.querySelector(".contenedorImagen__imagenCurso");
imagenCurso.src = `../../${datos.imagen}`;

const nivelCurso = document.querySelector(".subtitulo");
nivelCurso.textContent = `nivel ${datos.nivel}`;

const duracionCurso = document.querySelector("#duracion-js");
duracionCurso.textContent = `${datos.duracion} horas`;

const modalidadCurso = document.querySelector("#modalidad-js");
modalidadCurso.textContent = datos.modalidad;

const descripcionCurso = document.querySelector("#descripcion-js");
descripcionCurso.textContent = datos.descripcion_corta;