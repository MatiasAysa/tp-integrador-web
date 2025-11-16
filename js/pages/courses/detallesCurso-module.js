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

    const fechaInicio = document.querySelector("#fechaInicio-js");
    fechaInicio.textContent = datos.fecha_lanzamiento.toLocaleDateString("es-ES", { day: "numeric", month: "numeric", year: "numeric" });
    ingresarDatosProfesor();
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

// Profesor
function ingresarDatosProfesor() {
    const fotoProfesor = document.querySelector(".js-fotoPerfil");
    fotoProfesor.src = `../../${datos.profesor.imagen}`;

    const nombre = document.querySelector(".nombre");
    nombre.textContent = datos.profesor.nombre;

    const estrellas = document.querySelector(".estrellas");
    let totalEstrellas = "";
    let vacias = 5 - datos.profesor.calificacion;
    for (let i = 0; i < datos.profesor.calificacion; i++) {
        totalEstrellas += `<i class="fa-solid fa-star"></i>`;
    }
    for (let i = 0; i < vacias; i++) {
        totalEstrellas += `<i class="fa-regular fa-star"></i>`;
    }
    estrellas.innerHTML = `<ul>${totalEstrellas}<ul>`

    const descripcion = document.querySelector(".descripcion");
    descripcion.textContent = datos.profesor.descripcion;
}


// Acordeon
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".niveles__divide2").forEach(nivelHeader => {

        nivelHeader.addEventListener("click", () => {
            const contenedor = nivelHeader.parentElement;
            const primerBloque = nivelHeader.nextElementSibling;
            const segundoBloque = primerBloque ? primerBloque.nextElementSibling : null;
            const hijo = nivelHeader.querySelector(".open");
            const hijo2 = nivelHeader.querySelector(".closed");
            if (contenedor) contenedor.classList.toggle("open");
            if (primerBloque) primerBloque.classList.toggle("active");
            if (segundoBloque) segundoBloque.classList.toggle("active");
            if (hijo) hijo.classList.toggle("active");
            if (hijo2) hijo2.classList.toggle("active");
        });

    });
});


