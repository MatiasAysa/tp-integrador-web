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
        modal.mostrarMensaje("mensaje enviado!" ,()=>{
            form.submit();
            form.reset();
            return;
        });
    }
})

telefono.addEventListener('input', (event) => {
    telefono.value = telefono.value.replace(/[^0-9]/g, "");
});
function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
}
