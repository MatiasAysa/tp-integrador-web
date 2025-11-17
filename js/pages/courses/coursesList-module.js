const aniadirCursosBtn = document.querySelectorAll('.js-aniadir-cursos');

aniadirCursosBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const cursoId = button.closest('.cursos__contenedor').id;
        const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'))
        let cursosEnCarrito = JSON.parse(localStorage.getItem('cursosEnCarrito')) || [];
        if (!usuarioActual.cursosObtenidos.includes(cursoId)) {
            usuarioActual.cursosObtenidos.push(cursoId);
            cursosEnCarrito.push(cursoId);
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            localStorage.setItem('cantidadCursos', usuarioActual.cursosObtenidos.length);
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: cursosEnCarrito.length } }));
            alert(`El curso ${cursoId} ha sido añadido al carrito.`);
        } else {
            alert(`El curso ${cursoId} ya está en el carrito.`);
            usuarioActual.cursosObtenidos.length = []
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            localStorage.removeItem('cantidadCursos');
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: 0 } }));
        }
    });
});


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

    while (cant < DATOS_CURSOS.length) {

        if (filtrosAplicados.length > 0 &&
            !compararFiltroCategorias(DATOS_CURSOS[cant].categorias)) {

            cant++;
            continue; // <-- vuelve a empezar el while
        }

        const datos = DATOS_CURSOS[cant];

        const templateCurso = `
                <div class="cursos__contenedor cursoContenedor-js" id="HTML" data-curso='${datos.id}'>
                    <div class="cursos__contenedor-imagen">
                        <img src="../../${datos.imagen}" class="imagen" alt="${datos.nombre}">
                    </div>
                    <div class="cursos__contenedor-descripcion">
                        <h5 class="categoria"> <i class="fa-regular fa-folder-open"></i>
                        ${devolverCategoria(datos.categorias)}
                        </h5>
                        <h1 class="titulo">${datos.nombre}</h1>
                        <div class="descripcion">
                            <h3>Nivel: ${datos.nivel.nombre}</h3>
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
                        <a href="./add.html"><button id="Mas Informacion" name="Mas Informacion"
                                class="boton js-aniadir-cursos"> Añadir al Carrito</button></a>
                    </div>
                </div>
    `

        sectionCursos.innerHTML += templateCurso;

        cant++;
    }

}


// ---------------------------------- FILTROS ----------------------------------

// ------- Crear los filtros -------
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
// ------- Crear los filtros -------


// ------- Aplicar los filtros -------
function clickearFiltros() {
    const filtros = document.querySelectorAll(".checkbox");
    filtros.forEach((item, i) => {
        item.addEventListener('click', e => {
            console.log(item.getAttribute("id"));
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

    let resultado;

    DATOS_CURSOS.forEach(curso => {
        curso.categorias.forEach(cat => {
            filtrosAplicados.forEach(filtro => {
                if (filtro == cat.id) {
                    resultado = true;
                }
            });
        });

    })

    cant = 0;
    sectionCursos.querySelectorAll(".cursoContenedor-js").forEach(el => el.remove());
    agregarCursosLista();

}



function compararFiltroCategorias(categorias) {
    for (const filtro of filtrosAplicados) {
        for (const categoria of categorias) {
            if (filtro === categoria.id) {
                return true; // <<-- CORTA TODA LA FUNCIÓN
            }
        }
    }

    return false;
}

// ------- Aplicar los filtros -------

// ---------------------------------- FILTROS ----------------------------------