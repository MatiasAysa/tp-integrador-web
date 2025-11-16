import { DATOS_CURSOS } from './datosCursos.js';
import { BuscarCurso } from './buscarCurso.js';

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const buscador = new BuscarCurso(id);
const datos = buscador.datos;

ingresarValoresCurso();

function ingresarValoresCurso() {
    const tituloCurso = document.querySelector("#nombreCurso-js");
    tituloCurso.textContent = datos.nombre;

    const duracionCurso = document.querySelector("#duracionCurso-js");
    duracionCurso.textContent += ` ${datos.duracion} horas`;

    const modalidadCurso = document.querySelector("#modalidadCurso-js");
    modalidadCurso.textContent += ` ${datos.modalidad}`;

    const imagenCurso = document.querySelector("#imagenCurso-js");
    imagenCurso.src = `../../${datos.imagen}`;

    const nivelCurso = document.querySelector("#nivelCurso-js");
    nivelCurso.textContent = `nivel ${datos.nivel}`;

    const descripcionCurso = document.querySelector("#descripcionCurso-js");
    descripcionCurso.innerHTML += datos.descripcion_larga;

    const precioCurso = document.querySelector("#precioCurso-js");
    precioCurso.textContent = `$${datos.precio}`;

    const objetivosCurso = document.querySelector("#objetivosCurso-js");
    datos.objetivos.forEach(objetivo => {
        const li = document.createElement("li");
        li.textContent = objetivo;
        li.className = "objetivo__lista--espacio";
        objetivosCurso.appendChild(li);
    });

    const cuatrimestresCurso = document.querySelectorAll(".cuatrimestresCurso");
    datos.cuatrimestres.forEach((cuatri, i) => {
        cuatri.forEach((cuatri, j) => {
            const li = document.createElement("li");
            li.textContent = cuatri;
            cuatrimestresCurso[i].appendChild(li);
        });
    })
}


const contenedorCursosAlt = document.querySelector(".contenedoresInfo__infoSecundaria");
const CANTIDAD_MAXIMA_CURSOSALT = 3;
let cantidadCursosAlt = 0;

DATOS_CURSOS.forEach((item, i) => {
    if (cantidadCursosAlt < CANTIDAD_MAXIMA_CURSOSALT) {
        if (item.destacado) {
            crearCursoAlt(contenedorCursosAlt, item);
        }
    }
});

function crearCursoAlt(contenedor, curso) {
    const templateCursoAlt = 
    `
        <div class="cursosAlt">
            <a href="./course-details.html?id=${curso.id}" target="_self">
                <img src="../../${curso.imagen}" alt="Imagen de Curso Alt" class="cursosAlt__imagen">
                <h5 class="cursosAlt__texto">${curso.nombre}</h5>
            </a>
        </div>
    `

    contenedor.innerHTML += templateCursoAlt;

    cantidadCursosAlt++;
}
//acordeon
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".niveles__divide2").forEach(nivelHeader => {

        nivelHeader.addEventListener("click", () => {
            const primerBloque = nivelHeader.nextElementSibling;
            const segundoBloque = primerBloque ? primerBloque.nextElementSibling : null;
            const hijo = nivelHeader.querySelector(".open");
            const hijo2 = nivelHeader.querySelector(".closed");
            if (primerBloque) primerBloque.classList.toggle("active");
            if (segundoBloque) segundoBloque.classList.toggle("active");
            if (hijo) hijo.classList.toggle("active");
            if (hijo2) hijo2.classList.toggle("active");
        });

    });
});
/*

                    <div class="cursosAlt">
                        <a href="./Detalles de Curso 2.html" target="_self">
                            <img src="../../img/courses/Python.jpg" alt="Imagen de Curso Alt" class="cursosAlt__imagen">
                            <h5 class="cursosAlt__texto">Curso de Python</h5>
                        </a>
                    </div>

*/
