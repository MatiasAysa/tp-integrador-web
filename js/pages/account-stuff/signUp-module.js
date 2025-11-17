
const form = document.querySelector('.formWrap__form');
const submitButton = document.querySelector('.form__button');

const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const dniInput = document.querySelector('#dni');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// LOS MALDITOS SPANS PARA METER MENSAJES DE ERROR O EXITO,GOAT
const errorEmail = document.querySelector('#error-email');
const errorName = document.querySelector('#error-name');
const errorSurname = document.querySelector('#error-surname');
const errorDni = document.querySelector('#error-dni');
const errorUsername = document.querySelector('#error-username');
const errorPassword = document.querySelector('#error-password');
//NUEVO CODIGO AGREGADO-DESPUES BORAR EL COMENTARIO PARA PUSHEAR-LUEGO MOSTRAR A LOS CHICOS


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

function limpiarErroresExitos() {
    const elementos = [{ input: emailInput, mensaje: errorEmail },
    { input: nameInput, mensaje: errorName }, { input: surnameInput, mensaje: errorSurname },
    { input: dniInput, mensaje: errorDni }, { input: usernameInput, mensaje: errorUsername },
    { input: passwordInput, mensaje: errorPassword }
    ];

    elementos.forEach(item => {
        item.input.classList.remove('invalido', 'valido');
        item.mensaje.textContent = '';
        item.input.setCustomValidity('');
    });
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

usernameInput.addEventListener('input', () => {
    if (validarUsername(usernameInput.value)) {
        mostrarExito(usernameInput, errorUsername);
    } else {
        mostrarError(usernameInput, errorUsername, 'El nombre de usuario solo puede contener letras, números y guiones bajos (máx. 40 caracteres).');
    }
});

passwordInput.addEventListener('input', () => {
    if (validarPassword(passwordInput.value)) {
        mostrarExito(passwordInput, errorPassword);
    } else {
        mostrarError(passwordInput, errorPassword, 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.');
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

//BASICAMENTE ES UNA VALIDACION EN TIEMPO REAL.LIT AGREGA MAYOR SEGURIDAD,EL GOAT

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    limpiarErroresExitos();
    
    let formularioValido = true;

    if (!emailInput.value) {
        mostrarError(emailInput, errorEmail, 'El email es obligatorio.');
        formularioValido = false;
    } else if (!validarEmail(emailInput.value)) {
        mostrarError(emailInput, errorEmail, 'Por favor, ingrese un correo electrónico válido.');
        formularioValido = false;
    } else if (!detectarDuplicados(emailInput.value)) {
        mostrarError(emailInput, errorEmail, 'Este email ya está registrado.');
        formularioValido = false;
    } else {
        mostrarExito(emailInput, errorEmail); 
    }

    if (!nameInput.value) {
        mostrarError(nameInput, errorName, 'El nombre es obligatorio.');
        formularioValido = false;
    } else if (!validarNombres(nameInput.value)) {
        mostrarError(nameInput, errorName, 'El nombre solo debe contener letras y espacios.');
        formularioValido = false;
    } else {
        mostrarExito(nameInput, errorName); 
    }

    if (!surnameInput.value) {
        mostrarError(surnameInput, errorSurname, 'El apellido es obligatorio.');
        formularioValido = false;
    } else if (!validarNombres(surnameInput.value)) {
        mostrarError(surnameInput, errorSurname, 'El apellido solo debe contener letras y espacios.');
        formularioValido = false;
    } else {
        mostrarExito(surnameInput, errorSurname); 
    }

    if (!dniInput.value) {
        mostrarError(dniInput, errorDni, 'El DNI es obligatorio.');
        formularioValido = false;
    } else if (!validarDNI(dniInput.value)) {
        mostrarError(dniInput, errorDni, 'El DNI debe tener 8 dígitos.');
        formularioValido = false;
    } else {
        mostrarExito(dniInput, errorDni); 
    }

    if (!usernameInput.value) {
        mostrarError(usernameInput, errorUsername, 'El nombre de usuario es obligatorio.');
        formularioValido = false;
    } else if (!validarUsername(usernameInput.value)) {
        mostrarError(usernameInput, errorUsername, 'El nombre de usuario solo puede contener letras, números y guiones bajos (máx. 40 caracteres).');
        formularioValido = false;
    } else {
        mostrarExito(usernameInput, errorUsername); 
    }

    if (!passwordInput.value) {
        mostrarError(passwordInput, errorPassword, 'La contraseña es obligatoria.');
        formularioValido = false;
    } else if (!validarPassword(passwordInput.value)) {
        mostrarError(passwordInput, errorPassword, 'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.');
        formularioValido = false;
    } else {
        mostrarExito(passwordInput, errorPassword); 
    }

    if (formularioValido) {
        guardarUsuarioEnLocalStorage(crearUsuario(usernameInput, passwordInput, emailInput, nameInput, surnameInput, dniInput));
        mostrarMensajeFinal('¡Registro exitoso! Ahora puedes iniciar sesión.', 'exito');
        setTimeout(() => {window.location.href = "./log-in.html";}, 2000);
    } else {
        mostrarMensajeFinal('Por favor, corrige los errores marcados en rojo.', 'error');
    }
});
//DATO DE COLOR;USAR TERNARIO EN INNER PUEDE GENERAR ERRORES EN ALGUNOS NAVEGADORES
//UBUNTU,DAMIAN = 1,NT CARRERA
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

function validarUsername(username) {
    if (typeof username !== 'string') return false;
    const regex = /^[a-zA-Z0-9_]+$/; 
    return regex.test(username) && username.length > 0 && username.length <= 40;
}

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
    const limpio = nombre.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return limpio.length > 0 && limpio.length <= 50 && soloLetras.test(limpio);
}

function validarDNI(dni) {
    return dni.length === 8 && /^\d+$/.test(dni);
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
        cursosEnCarrito: [],
        tarjetas:[]
    };
    return usuario;
}
function guardarUsuarioEnLocalStorage(usuario) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

