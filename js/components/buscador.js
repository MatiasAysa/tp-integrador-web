import { DATOS_CURSOS } from "../pages/courses/datosCursos.js"
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
    { keywords: ['javascript básico, aprender javascript, fundamentos js, programación web inicial, dom, eventos, curso principiante javascript, desarrollo front-end, proyectos js, programación para principiantes, to-do list, calculadora js'], url: '../../pages/courses/course-details.html' },
    { keywords: ['curso python, python intermedio, programación python, análisis de datos, numpy, pandas, scripts python, automatización con python, desarrollo con python, matplotlib, proyectos python, machine learning básico'], url: '/pages/courses/Detalles de Curso 2.html' },
    { keywords: ['full stack, desarrollo web completo, html5 avanzado, css3 avanzado, react, angular, node.js, express, bases de datos, mongodb, sql, apis rest, devops, despliegue web, programación avanzada, proyecto full stack'], url: '/pages/courses/cursos.html' },
    { keywords: ['godot engine, crear videojuegos, desarrollo de juegos, gdscript, diseño de niveles, motor godot, animaciones godot, programación de juegos, efectos visuales juegos, game dev, proyecto de videojuego'], url: '/pages/courses/cursos.html' },
    { keywords: ['curso java avanzado, programación orientada a objetos, java enterprise, colecciones java, hilos java, javafx, desarrollo web java, servlets, jdbc, spring framework, android java, aplicaciones java'], url: '/pages/courses/cursos.html' },
    { keywords: ['curso csharp, aprender c#, programación básica c#, objetos en c#, excepciones c#, .net, windows forms, aplicaciones c#, unity básico, sintaxis csharp, proyecto c#'], url: '/pages/courses/cursos.html' },
    { keywords: ['curso firebase, firestore, tiempo real, autenticación firebase, storage firebase, cloud functions, desarrollo móvil firebase, backend serverless, apps escalables, integración firebase, proyecto firebase completo'], url: '/pages/courses/cursos.html' }]


function buscadorPalabra(query, LISTA_BUSQUEDA) {
    const busqueda = query.toLowerCase().trim();
    if (!busqueda) return null;
    for (const item of LISTA_BUSQUEDA) {
        for (const kw of item.keywords) {
            if (busqueda === kw || busqueda.includes(kw) || kw.includes(busqueda)) return item.url;
        }
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
            window.location.href = encontrado;
            return;
        }
        if (encontrado === null) {
            alert('No se encontraron resultados para su búsqueda.');
        }
    });
}