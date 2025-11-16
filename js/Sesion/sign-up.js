
const form = document.querySelector('.formWrap__form');
const submitButton = document.querySelector('.form__button');

const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const dniInput = document.querySelector('#dni');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

//NUEVO CODIGO AGREGADO-DESPUES BORAR EL COMENTARIO PARA PUSHEAR-LUEGO MOSTRAR A LOS CHICOS
emailInput.addEventListener('input', () => {
    if (validarEmail(emailInput.value)) {
        emailInput.setCustomValidity('');
    } else {
        emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.');
    }
});

nameInput.addEventListener('input', () => {
    if (validarNombres(nameInput.value)) {
        nameInput.setCustomValidity('');
    } else {
        nameInput.setCustomValidity('El nombre solo debe contener letras y espacios.');
    }
});

surnameInput.addEventListener('input', () => {
    if (validarNombres(surnameInput.value)) {
        surnameInput.setCustomValidity('');
    } else {
        surnameInput.setCustomValidity('El apellido solo debe contener letras y espacios.');
    }
});

usernameInput.addEventListener('input', () => {
    if (validarNombres(usernameInput.value)) {
        usernameInput.setCustomValidity('');
    } else {
        usernameInput.setCustomValidity('El nombre de usuario no debe exceder los 40 caracteres.');
    }
});

passwordInput.addEventListener('input', () => {
    if (validarPassword(passwordInput.value)) {
        passwordInput.setCustomValidity('');
    } else {
        passwordInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.');
    }
});

dniInput.addEventListener('input', (event) => {
    dniInput.value = dniInput.value.replace(/[^0-9]/g, "");
});
//----POSTDATA:SON SIMPLES EVENTOS,DONDE DONDE "INPUT" SE ACCIONA CUANDO SE ESCRIBE O BORRA EN UN INPUT
//BASICAMENTE ES UNA VALIDACION EN TIEMPO REAL.LIT AGREGA MAYOR SEGURIDAD,EL GOAT

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!emailInput.value || !nameInput.value || !surnameInput.value || !dniInput.value || !usernameInput.value || !passwordInput.value) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    else if (validarEmail(emailInput.value) === false) {
        form.reportValidity();
        emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.');
        return;
    }
    else if (detectarDuplicados(emailInput.value) === false) {
        form.reportValidity();
        emailInput.setCustomValidity('Email ya utilizado juju');
        return;
    }
    else if (validarPassword(passwordInput.value) === false) {
        form.reportValidity();
        passwordInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.');

        return;
    }
    else if (validarNombres(nameInput.value) === false) {
        form.reportValidity();
        nameInput.setCustomValidity('El nombre solo debe contener letras y espacios.');

        return;
    }
    else if (validarNombres(surnameInput.value) === false) {
        form.reportValidity();
        surnameInput.setCustomValidity('El apellido solo debe contener letras y espacios.');

        return;
    }
    else if (validarNombres(usernameInput.value) === false) {
        form.reportValidity();
        usernameInput.setCustomValidity('El nombre de usuario no debe exceder los 40 caracteres.');

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
function detectarDuplicados(email) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.email === email)) {
        return false;
    }
    return true;
}
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
        cursosObtenidos: [],
        tarjetas: []
    };
    return usuario;
}
function guardarUsuarioEnLocalStorage(usuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}