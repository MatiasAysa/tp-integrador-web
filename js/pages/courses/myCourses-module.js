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
            contenedor.innerHTML += `<div class="curso">
                            <a href="./misCursos.html" class="curso__nombre">${curso.nombre}</a>
                            <p class="curso__progreso">Progreso: 25%</p>
                        </div>`
        });
    }
}

button.addEventListener('click', ()=>{
    window.location.href = `./coursesList.html`
})

