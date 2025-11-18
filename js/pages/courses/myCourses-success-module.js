import { BuscarCurso } from './buscarCurso.js';

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const buscador = new BuscarCurso(id);
const datos = buscador.datos;
ingresarValores();

function ingresarValores(){
    const titulo = document.querySelector("#titulo")
    titulo.textContent = datos.nombre

    const fotoProfesor = document.querySelector(".imagenProfesor-js");
    fotoProfesor.src = `../../${datos.profesor.imagen}`;

    const nombreProfesor = document.querySelector("#nombreProfesor");
    nombreProfesor.textContent = datos.profesor.nombre;
    s
    const fecha = document.querySelector("#fecha")
    fecha.textContent = datos.fecha_lanzamiento.toLocaleDateString("es-ES", { day: "numeric", month: "numeric", year: "numeric" });

}
