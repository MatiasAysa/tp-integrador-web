import { Contador } from "./contador.js";
import { modal } from "../../utils/mostrarModal.js";

const form = document.querySelector('#form')
const nameInput = document.querySelector('.js-contactoName');
const surnameInput = document.querySelector('.js-contactoSurname');
const emailInput = document.querySelector('.js-contactoMail')
const telefono = document.querySelector('#telefono');
const submitButton = document.querySelector('#enviar')
emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.');
const contador = new Contador();
contador.render();

// willy
const errorEmail = document.querySelector('#error-email');
const errorName = document.querySelector('#error-name');
const errorSurname = document.querySelector('#error-surname');
const errorTel = document.querySelector('#error-tel');

function mostrarError(input, mensajeElemento, mensaje) {
    input.classList.remove('valido');
    input.classList.add('invalido');
    mensajeElemento.textContent = mensaje;
    input.setCustomValidity(mensaje);
}

function mostrarExito(input, mensajeElemento) {
    input.classList.remove('invalido');
    input.classList.add('valido');
    mensajeElemento.textContent = '';
    input.setCustomValidity('');
}
emailInput.addEventListener('input', () => {
    if (validarEmail(emailInput.value)) {
        mostrarExito(emailInput, errorEmail);
    } else {
        mostrarError(emailInput, errorEmail, 'Por favor, ingrese un correo electrónico válido.');
    }
});

nameInput.addEventListener('input', () => {
    if (validarNombres(nameInput.value)) {
        mostrarExito(nameInput, errorName);
    } else {
        mostrarError(nameInput, errorName, 'El nombre solo debe contener letras y espacios.');
    }
});

surnameInput.addEventListener('input', () => {
    if (validarNombres(surnameInput.value)) {
        mostrarExito(surnameInput, errorSurname);
    } else {
        mostrarError(surnameInput, errorSurname, 'El apellido solo debe contener letras y espacios.');
    }
});

//
submitButton.addEventListener('click', (a) => {
    a.preventDefault;
    if (!nameInput.value || !surnameInput.value) {
        modal.mostrarMensaje("Por favor, complete todos los campos");
        return;
    }
    else if (validarEmail(emailInput.value) === false) {
        form.reportValidity();
        return;
    }
    else {
        mostrarMensajeFinal('Mensaje enviado! nos pondremos en contacto', 'exito');
        setTimeout(() => {
            form.submit();
            form.reset();
        }, 2000);
        return;
    };
}
)

telefono.addEventListener('input', (event) => {
    telefono.value = telefono.value.replace(/[^0-9]/g, "");
});
function validarNombres(nombre) {
    if (typeof nombre !== 'string') return false;
    const limpio = nombre.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return limpio.length > 0 && limpio.length <= 50 && soloLetras.test(limpio);
}
function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
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
    setTimeout(() => { mensajeDiv.remove(); }, 2000);
}