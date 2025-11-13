const contenedorPersonas = document.getElementById('personas');
const btnAgregar = document.getElementById('btnAgregar');

let contador = 1;

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
});

// Eliminar persona (delegación de eventos)
contenedorPersonas.addEventListener('click', (e) => {

    if (contador > 1) {
        if (e.target.closest('.btn--remove')) {
            const persona = e.target.closest('.person');
            persona.remove();
            actualizarNumeracion();
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
