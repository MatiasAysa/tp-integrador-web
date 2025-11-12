
const form = document.querySelector('.formWrap__form');
const submitButton = document.querySelector('.form__button');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const dniInput = document.querySelector('#dni');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.')
nameInput.setCustomValidity('El nombre solo debe contener letras y espacios.')
surnameInput.setCustomValidity('El apellido solo debe contener letras y espacios.')
usernameInput.setCustomValidity('El nombre de usuario no debe exceder los 40 caracteres.')
passwordInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.')


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
        form.submit;
        window.location.href = "./log-in.html"
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
    return nombre.trim().length > 0 && nombre.length <= 50;
}
function crearUsuario(usernameInput, passwordInput, emailInput, nameInput, surnameInput, dniInput) {
    const usuario = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        dni: dniInput.value,
        cursosObtenidos: []
    };
    return usuario;
}
function guardarUsuarioEnLocalStorage(usuario) {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (!usuariosGuardados) {
        localStorage.setItem('usuarios', JSON.stringify(usuario))
    }
    else {
        usuariosGuardados.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    }
}