const form = document.querySelector('#form')
const nameInput = document.querySelector('.js-contactoName');
const surnameInput = document.querySelector('.js-contactoSurname');
const emailInput = document.querySelector('.js-contactoMail')
const mensajeInput = document.querySelector('.js-contactoMensaje')
const submitButton = document.querySelector('#enviar')
emailInput.setCustomValidity('Por favor, ingrese un correo electrónico válido.');

submitButton.addEventListener('click', (a) => {
    a.preventDefault;
    if (!nameInput.value || !surnameInput.value) {
        alert("Por favor, complete todos los campos");
        return;
    }
    else if (validarEmail(emailInput.value) === false) {
        form.reportValidity();
        return;
    }
    else {
        alert("mensaje enviado!");
        form.submit;
        window.location.href = "./succes-contact.html"
    }
})

function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
}