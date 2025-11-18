import { DATOS_CURSOS } from "./datosCursos.js"
import { DATOS_CATEGORIAS, DATOS_NIVELES } from "./datosCategorias&Niveles.js";
// --- LISTA DE CURSOS ---

const sectionCursos = document.querySelector(".cursos");
let cant = 0;

const categoriasCont = document.querySelector(".categorias-js");
const nivelesCont = document.querySelector(".niveles-js");
let filtrosAplicados = [];

crearFiltros(categoriasCont, DATOS_CATEGORIAS);
clickearFiltros();
agregarCursosLista();

function agregarCursosLista() {

    do {

        const datos = DATOS_CURSOS[cant];

        const templateCurso = `
                <div class="cursos__contenedor cursoContenedor-js curso-card" id="HTML" data-curso='${datos.id}'>
                    <div class="cursos__contenedor-imagen">
                        <img src="../../${datos.imagen}" class="imagen" alt="${datos.nombre}">
                    </div>
                    <div class="cursos__contenedor-descripcion">
                        <h5 class="categoria"> <i class="fa-regular fa-folder-open"></i>
                        ${devolverCategoria(datos.categorias)}
                        </h5>
                        <h1 class="titulo">${datos.nombre}</h1>
                        <div class="descripcion">
                            <h3>Nivel: ${datos.nivel}</h3>
                            <h3>Duracion: ${datos.duracion} horas</h3>
                            <h3>Modalidad: ${datos.modalidad}</h3>
                        </div>
                        <div>
                            <h3><i class="fa-regular fa-calendar"></i> Fecha de Inicio</h3>
                            <h2 class="fechaInicio"> ${datos.fecha_lanzamiento.toLocaleDateString("es-ES", { day: "numeric", month: "numeric", year: "numeric" })} </h2>
                            
                        </div>
                    </div>
                    <div class="cursos__contenedor-compra">
                        <h4 class="valorCurso">
                            Valor del Curso
                        </h4>
                        <h1 class="precio">
                            $${datos.precio}
                        </h1>
                        <a href=""><button id="Mas Informacion" name="Mas Informacion"
                                class="boton masInfo-js"> Mas Informacion</button></a>
                        <button id="Mas Informacion" name="Mas Informacion"
                                class="boton js-aniadir-cursos js-OpenModal"> Añadir al Carrito</button>
                    </div>
                </div>
    `

        sectionCursos.innerHTML += templateCurso;

        cant++;
    } while (cant < DATOS_CURSOS.length);

}


// ---------------------------------- FILTROS ----------------------------------

// ------- Renderizar los filtros -------
function crearFiltros(contenedor, datos) {
    datos.forEach(item => {
        const templateFiltro = `
        <div class="filtros__opciones-filtro">
            <input type="checkbox" id="${item.id}" name="${item.id}" class="checkbox">
                <p> ${item.nombre} </p>
        </div>
        `
        contenedor.innerHTML += templateFiltro;
    });
}

function devolverCategoria(categorias) {
    if (categorias.length == 1) return categorias[0].nombre;

    let categoriasSeparadas = "";
    categorias.forEach((item, i) => {
        categoriasSeparadas += item.nombre;
        if (i != categorias.length - 1) { categoriasSeparadas += ", " }
    });

    return categoriasSeparadas;
}
// ------- Renderizar los filtros -------

// ------- Lógica los filtros -------
function clickearFiltros() {
    const filtros = document.querySelectorAll(".checkbox");
    filtros.forEach((item, i) => {
        item.addEventListener('click', e => {
            almacenarFiltros(item.getAttribute("id"));
            compararFiltros();
        })
    });

}

function almacenarFiltros(filtro) {
    const nombreFiltro = "#" + filtro;

    const filtroInput = document.querySelector(nombreFiltro);

    if (filtroInput.checked) { filtrosAplicados.push(filtro); }
    else {
        let indice = filtrosAplicados.indexOf(filtro);
        filtrosAplicados.splice(indice, 1);
    }

}

function compararFiltros() {

    const cursosHTML = document.querySelectorAll(".cursoContenedor-js");

    // Si no hay filtros aplicados, cambiarles el display a todos a flex, sex
    if (filtrosAplicados.length === 0) {
        cursosHTML.forEach(cursoHTML => cursoHTML.style.display = "flex");
        return;
    }

    // Si hay filtros aplicados
    DATOS_CURSOS.forEach(curso => {

        // .map crea un array auxiliar transformando cada elemento de otro array
        // en este caso, creaemos un arary que contenga la/s categorias de cada curso
        const categoriasDelCurso = curso.categorias.map(cat => cat.id);

        // .every devuelve true si todos los elementos del array cumplen la condición
        // en este caso, todos los elementos de los filtros aplicados deberían de econtrarse en los filtros del curso
        const contieneTodas = filtrosAplicados.every(filtro => 
            // .includes devuelve true si el array contiene el valor buscado
            categoriasDelCurso.includes(filtro)
        );


        if (contieneTodas) desocultarCursoPorId(curso.id);
        else ocultarCursoPorId(curso.id);
    });
}

function ocultarCursoPorId(id) {
    const cursoAocultar = document.querySelectorAll(".cursoContenedor-js");
    cursoAocultar.forEach(item => {
        if (item.getAttribute("data-curso") == id) {
            item.style.display = "none";
        }
    })
}

function desocultarCursoPorId(id) {

    const cursoAocultar = document.querySelectorAll(".cursoContenedor-js");
    cursoAocultar.forEach(item => {
        if (item.getAttribute("data-curso") == id) {
            item.style.display = "flex";
        }
    })
}

// ------- Aplicar los filtros -------

// ---------------------------------- FILTROS ----------------------------------

