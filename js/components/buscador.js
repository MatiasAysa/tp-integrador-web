import { DATOS_CURSOS } from "../pages/courses/datosCursos.js"
import { modal } from "../utils/mostrarModal.js";
export class barraBuscador {
    constructor() { }

    render(HEADER_BUSCADOR) {
        const barraBuscadorContainer = document.querySelector('.js-header');
        if (!barraBuscadorContainer) return;
        const buscadorDiv = document.createElement('div');
        buscadorDiv.classList.add('barra-buscador');
        const buscadorForm = document.createElement('form');
        buscadorForm.classList.add('buscador-form');
        buscadorForm.id = 'search-form';
        const buscadorInput = document.createElement('input');
        buscadorInput.type = 'search';
        buscadorInput.placeholder = HEADER_BUSCADOR[0].placeholder;
        buscadorInput.classList.add('buscador-input');
        buscadorInput.id = 'buscador';
        const buscadorButton = document.createElement('button');
        buscadorButton.type = 'submit';
        buscadorButton.classList.add('buscador-button');
        const buttonIcon = document.createElement('i');
        buttonIcon.classList.add('fa-solid', 'fa-magnifying-glass');
        buscadorButton.appendChild(buttonIcon);
        buscadorForm.appendChild(buscadorInput);
        buscadorForm.appendChild(buscadorButton);
        buscadorDiv.appendChild(buscadorForm);
        barraBuscadorContainer.appendChild(buscadorDiv);
        Buscador(buscadorForm, buscadorInput);
    }

}
const LISTA_BUSQUEDA = [
    {
        keywords: ['javascript básico, aprender javascript, fundamentos js, programación web inicial, dom, eventos, curso principiante javascript, desarrollo front-end, proyectos js, programación para principiantes, to-do list, calculadora js'],
        id: `${DATOS_CURSOS[0].id}`
    },
    { keywords: ['curso python, python intermedio, programación python, análisis de datos, numpy, pandas, scripts python, automatización con python, desarrollo con python, matplotlib, proyectos python, machine learning básico'], id: `${DATOS_CURSOS[1].id}` },
    { keywords: ['full stack, desarrollo web completo, html5 avanzado, css3 avanzado, react, angular, node.js, express, bases de datos, mongodb, sql, apis rest, devops, despliegue web, programación avanzada, proyecto full stack'], id: `${DATOS_CURSOS[2].id}` },
    { keywords: ['godot engine, crear videojuegos, desarrollo de juegos, gdscript, diseño de niveles, motor godot, animaciones godot, programación de juegos, efectos visuales juegos, game dev, proyecto de videojuego'], id: `${DATOS_CURSOS[3].id}` },
    { keywords: ['curso java avanzado, programación orientada a objetos, java enterprise, colecciones java, hilos java, javafx, desarrollo web java, servlets, jdbc, spring framework, android java, aplicaciones java'], id: `${DATOS_CURSOS[4].id}` },
    { keywords: ['curso csharp, aprender c#, programación básica c#, objetos en c#, excepciones c#, .net, windows forms, aplicaciones c#, unity básico, sintaxis csharp, proyecto c#'], id: `${DATOS_CURSOS[5].id}` },
    { keywords: ['curso firebase, firestore, tiempo real, autenticación firebase, storage firebase, cloud functions, desarrollo móvil firebase, backend serverless, apps escalables, integración firebase, proyecto firebase completo'], id: `${DATOS_CURSOS[6].id}` },
]

function buscadorPalabra(query, LISTA_BUSQUEDA) {
    const resultados = []
    const busqueda = query.toLowerCase().trim();
    if (!busqueda) return null;
        for (const item of LISTA_BUSQUEDA) {
            for (const kw of item.keywords) {
                if (busqueda === kw || busqueda.includes(kw) || kw.includes(busqueda))
                    resultados.push(item.id + "%")
            }
        }
    if(resultados.length !== 0){
        return resultados
    }
    return null;
}

function Buscador(form, input) {
    if (!form || !input) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value || '';
        const encontrado = buscadorPalabra(query, LISTA_BUSQUEDA);
        if (encontrado) {
            window.location.href = `../../pages/courses/coursesList.html?id=${encontrado}`;
            return;
        }
        if (encontrado === null) {
            modal.mostrarMensaje('No se encontraron resultados para su búsqueda.');
        }
    });
}