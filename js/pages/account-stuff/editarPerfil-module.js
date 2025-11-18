import { modal } from "../../utils/mostrarModal.js"
const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name')
const surnameInput = document.querySelector('.js-surname')
const dniInput = document.querySelector('.js-dni');
const emailInput = document.querySelector('.js-email');
const submitButton = document.querySelector('.js-submit');
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const indexUsuario = buscarUsuarioPorEmail();

const errorEmail = document.querySelector('#error-email');
const errorName = document.querySelector('#error-name');
const errorSurname = document.querySelector('#error-surname');
const errorDni = document.querySelector('#error-dni');

window.addEventListener("DOMContentLoaded", () => {
    const usuarioCompleto = usuarios.find(u => u.email === usuarioActual.email)
    nameInput.value = usuarioCompleto.name;
    surnameInput.value = usuarioCompleto.surname;
    dniInput.value = usuarioCompleto.dni;
    emailInput.value = usuarioCompleto.email
});

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
dniInput.addEventListener('input', (event) => {
    dniInput.value = dniInput.value.replace(/[^0-9]/g, "");

    if (validarDNI(dniInput.value)) {
        mostrarExito(dniInput, errorDni);
    } else {
        mostrarError(dniInput, errorDni, 'El DNI debe tener 8 dígitos.');
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarEmail(emailInput.value) === false) {
        emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.')
        form.reportValidity();
        return;
    }
    else if (validarNombres(nameInput.value) === false) {
        nameInput.setCustomValidity('El nombre solo debe contener letras y espacios.')
        form.reportValidity();
        return;
    }
    else if (validarNombres(surnameInput.value) === false) {
        surnameInput.setCustomValidity('El apellido solo debe contener letras y espacios.')
        form.reportValidity();
        return;
    }
    else {
        usuarios[indexUsuario].name = nameInput.value;
        usuarios[indexUsuario].surname = surnameInput.value;
        usuarios[indexUsuario].email = emailInput.value;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem('usuarioActual', JSON.stringify(usuarios[indexUsuario]))
        mostrarMensajeFinal("¡Usuario modificado con exito!", "exito")
        setTimeout(() => {window.location.href = "./my-profile.html";}, 1500)
    }
}
);
function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
}
dniInput.addEventListener('input', (event) => {
    dniInput.value = dniInput.value.replace(/[^0-9]/g, "");
});
function validarNombres(nombre) {
    if (typeof nombre !== 'string') return false;
    const limpio = nombre.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return limpio.length > 0 && limpio.length <= 50 && soloLetras.test(limpio);
}


function buscarUsuarioPorEmail() {
    return usuarios.findIndex(u => u.email === usuarioActual.email);
}
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
function validarDNI(dni) {
    return dni.length === 8 && /^\d+$/.test(dni);
}