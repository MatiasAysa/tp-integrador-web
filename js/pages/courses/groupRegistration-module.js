import { BuscarCurso } from "./buscarCurso.js";


const contenedorPersonas = document.getElementById('personas');
const btnAgregar = document.getElementById('btnAgregar');
let contador = 1;
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const buscador = new BuscarCurso(id);
const datos = buscador.datos;
const TARIFA = 10000;
const PRECIOINICIAL = datos.precio;
const precio = document.querySelector(".form__total-amount")

llenarEspacios();

function llenarEspacios(){
    const titulo = document.querySelector(".form__title")
    titulo.textContent = datos.nombre

    precio.textContent = "$" + (TARIFA+datos.precio) 
}
// Agregar persona
btnAgregar.addEventListener('click', () => {

    contador++;
    console.log(contador);

    const personaOriginal = contenedorPersonas.querySelector('.person');
    const nuevaPersona = personaOriginal.cloneNode(true);

    // Actualizamos el número y los atributos
    nuevaPersona.querySelector('.person__index').textContent = `Persona ${contador}`;

    const input = nuevaPersona.querySelector('input');
    input.value = '';
    input.id = `persona${contador}_nombre`;
    input.name = `persona${contador}_nombre`;

    const label = nuevaPersona.querySelector('label');
    label.setAttribute('for', `persona${contador}_nombre`);
    contenedorPersonas.appendChild(nuevaPersona);
    precio.textContent = "$" + (TARIFA+(PRECIOINICIAL*contador)) 
});

// Eliminar persona (delegación de eventos)
contenedorPersonas.addEventListener('click', (e) => {

    if (contador > 1) {
        if (e.target.closest('.btn--remove')) {
            const persona = e.target.closest('.person');
            persona.remove();
            actualizarNumeracion();
            precio.textContent = "$" + (TARIFA+(PRECIOINICIAL*contador))
        }
    }

});

// Reasigna números
function actualizarNumeracion() {
    const personas = contenedorPersonas.querySelectorAll('.person');
    personas.forEach((p, i) => {
        p.querySelector('.person__index').textContent = `Persona ${i + 1}`;
        const input = p.querySelector('input');
        input.id = `persona${i + 1}_nombre`;
        input.name = `persona${i + 1}_nombre`;
        const label = p.querySelector('label');
        label.setAttribute('for', `persona${i + 1}_nombre`);
    });
    contador = personas.length;
}
