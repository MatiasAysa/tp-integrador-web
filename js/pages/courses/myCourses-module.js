import { modal } from "../../utils/mostrarModal.js";

const contenedor = document.querySelector(".cursoWrap")
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
mostrarCursos();
const button = document.querySelector('.button')

function mostrarCursos() {
    const cursosObtenidos = usuarioActual.cursosObtenidos
    if (cursosObtenidos === null || cursosObtenidos.length == 0) {
        contenedor.innerHTML = `<div class="noObtenido">
                            <p class="noObtenido__texto">Aun no has obtenido ningun curso</p>
                            <button class="button">Obtener cursos</button>
                        </div>
                        `
        return;
    } else {
        cursosObtenidos.forEach(curso => {
            const fecha = new Date(curso.fecha_lanzamiento)
            contenedor.innerHTML += `<div class="curso myCourses-js" data-curso='${curso.id}'>
                            <a href="./myCourses-selected.html" class="curso__nombre">${curso.nombre}</a>
                            <p class="curso__progreso">Fecha de inicio: ${fecha.toLocaleDateString("es-ES", { day: "numeric", month: "numeric", year: "numeric" })}</p>
                        </div>`
        });
    }
}

button.addEventListener('click', ()=>{
    window.location.href = `./coursesList.html`
})

