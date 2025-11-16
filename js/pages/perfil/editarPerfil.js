
const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name')
const surnameInput = document.querySelector('.js-surname')
const dniInput = document.querySelector('.js-dni');
const emailInput = document.querySelector('.js-email');
const submitButton = document.querySelector ('.js-submit');
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const indexUsuario = buscarUsuarioPorEmail();

window.addEventListener("DOMContentLoaded", ()=>{
    const usuarioCompleto = usuarios.find(u => u.email === usuarioActual.email) 
    nameInput.value = usuarioCompleto.name;
    surnameInput.value = usuarioCompleto.surname;
    dniInput.value = usuarioCompleto.dni;
    emailInput.value = usuarioCompleto.email
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
        localStorage.setItem("usuarios" , JSON.stringify(usuarios));
        localStorage.setItem('usuarioActual', JSON.stringify(usuarios[indexUsuario]))
        alert("usuario modificado")
        window.location.href = "./my-profile.html"
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
    return nombre.trim().length > 0 && nombre.length <= 50;
}

function buscarUsuarioPorEmail() {
    return usuarios.findIndex(u => u.email === usuarioActual.email);
}