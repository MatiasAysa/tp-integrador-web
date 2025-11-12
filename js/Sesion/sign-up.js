import { VALIDITYSINGUP } from './constantsSingUp.js';

const form = document.querySelector('.formWrap__form');
const submitButton = document.querySelector('.form__button');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const dniInput = document.querySelector('#dni');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
emailInput.setCustomValidity(VALIDITYSINGUP[0].emailMessage);
passwordInput.setCustomValidity(VALIDITYSINGUP[5].passwordMessage);
dniInput.setCustomValidity(VALIDITYSINGUP[3].dniMessage);
nameInput.setCustomValidity(VALIDITYSINGUP[1].nameMessage);
surnameInput.setCustomValidity(VALIDITYSINGUP[2].surnameMessage);
usernameInput.setCustomValidity(VALIDITYSINGUP[4].usernameMessage);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emailInput.value || !nameInput.value || !surnameInput.value || !dniInput.value || !usernameInput.value || !passwordInput.value) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    else if (validarEmail(emailInput.value) === false) {
        form.reportValidity();
        return;
    }
    else if (validarPassword(passwordInput.value) === false) {
        form.reportValidity();
        return;
    }
    else if (validarDNI(dniInput.value) === false) {
        form.reportValidity();
        return;
    }
    else if (validarNombres(nameInput.value) === false) {
        form.reportValidity();
        return;
    }
    else if (validarNombres(surnameInput.value) === false) {
        form.reportValidity();
        return;
    }
    else if (validarNombres(usernameInput.value) === false) {
        form.reportValidity();
        return;
    }
    else {
        guardarUsuarioEnLocalStorage(crearUsuario(usernameInput, passwordInput, emailInput, nameInput, surnameInput, dniInput));
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        form.reset();
    }
}
);


function validarPassword(password) {
    const contieneNumero = /\d/.test(password);
    const contieneLetraMayuscula = /[A-Z]/.test(password);
    const contieneLetraMinuscula = /[a-z]/.test(password);
    return contieneNumero && contieneLetraMayuscula && contieneLetraMinuscula;
}
function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
}
dniInput.addEventListener('input', (event) => {
    dniInput.value = dniInput.value.replace(/[^0-9]/g, "");
});

function validarNombres(nombre) {
    if (typeof nombre !== 'string') return false;
    return nombre.trim().length > 3 && nombre.length <= 50;
}
function crearUsuario(usernameInput, passwordInput, emailInput, nameInput, surnameInput, dniInput) {
    const usuario = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        dni: dniInput.value,
    };
    return usuario;
}
function guardarUsuarioEnLocalStorage(usuario) {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosGuardados.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
}