import { modal } from "../../utils/mostrarModal.js"

const form = document.querySelector('.js-form')
const tipo = document.querySelector('.js-select');
const numero = document.querySelector('.js-numTarjeta');
const cod = document.querySelector('.js-cod');
const vencimiento = document.querySelector('.js-vencimiento');
const direccion = document.querySelector('#direccion');
const cp = document.querySelector('#cp');
const nombre = document.querySelector('#name');
const surname = document.querySelector('#surname');
const submitButton = document.querySelector('.form__button');
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const indexUsuario = buscarUsuarioPorEmail();

numero.addEventListener('input', () => {
    if (validarNumero(numero.value)) {
        numero.setCustomValidity('');
    } else {
        numero.setCustomValidity('La tarjeta debe tener 16 numeros.');
    }
});
cod.addEventListener('input', (event) => {
    cod.value = cod.value.replace(/[^0-9]/g, "");
});

vencimiento.addEventListener('input', () => {
    if (validarVencimiento(vencimiento.value)) {
        vencimiento.setCustomValidity('');
    } else {
        vencimiento.setCustomValidity('Ingrese una fecha Valida');
    }
});
direccion.addEventListener('input', () => {
    if (validarDireccion(direccion.value)) {
        direccion.setCustomValidity('');
    } else {
        direccion.setCustomValidity('La direccion solo debe tener letras y numeros.');
    }
});
nombre.addEventListener('input', () => {
    if (validarNombre(nombre.value)) {
        nombre.setCustomValidity('');
    } else {
        nombre.setCustomValidity('El nombre solo debe tener caracteres.');
    }
});
surname.addEventListener('input', () => {
    if (validarNombre(surname.value)) {
        surname.setCustomValidity('');
    } else {
        surname.setCustomValidity('El apellido solo debe tener caracteres.');
    }
});
cp.addEventListener('input', (event) => {
    cp.value = cp.value.replace(/[^0-9]/g, "");
});
numero.addEventListener('input', (event) => {
    numero.value = numero.value.replace(/[^0-9]/g, "");
});


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!numero.value || !cod.value || !vencimiento.value || !direccion.value || !cp.value || !nombre.value || !surname.value) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    else if (validarNumero(numero.value) === false) {
        form.reportValidity();
        numero.setCustomValidity('La tarjeta debe tener 16 numeros.');
        return;
    }
    else if (detectarDuplicados(numero.value) === false) {
        numero.setCustomValidity('tarjeta ya ingresada.');
        form.reportValidity();
        return;
    }
    else if (validarVencimiento(vencimiento.value) === false) {
        form.reportValidity();
        vencimiento.setCustomValidity('Ingrese una fecha Valida.');

        return;
    }
    else if (validarDireccion(direccion.value) === false) {
        form.reportValidity();
        direccion.setCustomValidity('La direccion solo debe tener letras y numeros.');

        return;
    }
    else if (validarNombre(nombre.value) === false) {
        form.reportValidity();
        nombre.setCustomValidity('El nombre solo debe tener caracteres.');
        return;
    }
    else if (validarNombre(surname.value) === false) {
        form.reportValidity();
        surname.setCustomValidity('El apellido solo debe tener caracteres.');
        return;
    }
    else {
        const tarjeta = agregarTarjetas(tipo, numero, cod, vencimiento, direccion, cp, nombre, surname);
        usuarioActual.tarjetas.push(tarjeta);
        usuarios[indexUsuario].tarjetas.push(tarjeta)
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual))
        mostrarMensajeFinal('¡Tarjeta agregada con exito!', 'exito');
        setTimeout(() => {window.location.href = "./my-profile.html";}, 1500);
    }
}
);


function validarNumero(numero){
    if(numero.length != 16){
        return false;
    }
    return true;
}

function detectarDuplicados(numero) {
    const tarjetas = usuarios[indexUsuario].tarjetas;
    if (tarjetas.some(u => u.numero === numero)) {
        return false;
    }
    return true;
}

function validarVencimiento(vencimiento){
    const restricciones = /^\d{2}\/\d{2}$/;
    if(!restricciones.test(vencimiento)){
        return false
    }
    return true;
}

function validarNombre(nombre){
    const restricciones = /^[A-Za-z]+$/;
    if(!restricciones.test(nombre)){
        return false}
    return true;
}

function validarDireccion(direccion){
    const restricciones = /^[A-Za-z0-9\s]+$/;
    if(!restricciones.test(direccion)){
        return false
    }
    return true;
}
function agregarTarjetas(tipo, numero, cod, vencimiento, direccion, cp, nombre, surname) {
    const tarjeta = {
        tipo: tipo.value,
        numero: numero.value,
        cod: cod.value,
        vencimiento: vencimiento.value,
        direccion: direccion.value,
        cp: cp.value,
        nombre: nombre.value,
        surname: surname.value
    };
    return tarjeta;
}

function buscarUsuarioPorEmail() {
    return usuarios.findIndex(u => u.email === usuarioActual.email);
}
function mostrarMensajeFinal(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje-final mensaje-${tipo}`;
    mensajeDiv.innerHTML = `
        <i class="fa-solid ${tipo === 'exito' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
        <span>${mensaje}</span>
    `;
    
    mensajeDiv.style.cssText = `
        position: fixed;
        top: 2em;
        right: 2em;
        background: ${tipo === 'exito' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1em;
        border-radius: 8px;
        display: flex;
        align-items: center;
        max-width: 27em;
        gap: 0.5em;
    `;
    document.body.appendChild(mensajeDiv);
    setTimeout(() => {mensajeDiv.remove();}, 2000);
}

