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


// lista de cursos dinamica
import { DATOS_CURSOS } from "./datosCursos.js"
const paginaCursos = document.querySelector(".pagina");
const CANTIDAD_MAXIMA_CURSOS = 6;
let cant = 0;

do {

    const datos = DATOS_CURSOS[cant];

    const templateCurso = `
                    <div class="cursos__contenedor cursoContenedor-js" id="HTML" data-curso='${datos.id}'>
                    <div class="cursos__contenedor-imagen">
                        <img src="../../${datos.imagen}" class="imagen" alt="${datos.nombre}">
                    </div>
                    <div class="cursos__contenedor-descripcion">
                        <h5 class="categoria"> <i class="fa-regular fa-folder-open"></i>Programacion </h5>
                        <h1 class="titulo">${datos.nombre}</h1>
                        <div class="descripcion">
                            <h3>Nivel: ${datos.nivel}</h3>
                            <h3>Duracion: ${datos.duracion} horas</h3>
                            <h3>Modalidad: ${datos.modalidad}</h3>
                        </div>
                        <div>
                            <h3><i class="fa-regular fa-calendar"></i> Fecha de Inicio</h3>
                            <h2 class="fechaInicio"> ${datos.fecha_lanzamiento.toLocaleDateString("es-ES", {day: "numeric", month: "numeric", year: "numeric"})} </h2>
                            
                        </div>
                    </div>
                    <div class="cursos__contenedor-compra">
                        <h4 class="valorCurso">
                            Valor del Curso
                        </h4>
                        <h1 class="precio">
                            $18990
                        </h1>
                        <a href=""><button id="Mas Informacion" name="Mas Informacion"
                                class="boton masInfo-js"> Mas Informacion</button></a>
                        <a href="./add.html"><button id="Mas Informacion" name="Mas Informacion"
                                class="boton js-aniadir-cursos"> Añadir al Carrito</button></a>
                    </div>
                </div>
    `

    paginaCursos.insertAdjacentHTML('beforebegin', templateCurso)

    cant++;

} while (cant < CANTIDAD_MAXIMA_CURSOS && cant < DATOS_CURSOS.length);


