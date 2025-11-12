const nameInput = document.querySelectorAll('.js-contactoName');
const emailInput = document.querySelector('js-contactoMail')
const mensajeInput = document.querySelector('js-contactoMensaje')
const submitButton = document.querySelector('js.contactoSubmit')

submitButton.addEventListener('click', (a) => {
    a.preventDefault;
    if(!nameInput.value || emailInput.value){
        
    }
})

function validarEmail(email) {
    const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return restriccionEmail.test(email);
}