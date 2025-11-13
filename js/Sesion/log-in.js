const form = document.querySelector('.formWrap__form');
const submitButton = document.querySelector('.form__button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
let iniciado = false;

function obtenerUsuarioDeLocalStorage(email, password) {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    for (const usuario of usuariosGuardados) {
        if (usuario.email === email && usuario.password === password) {
            return usuario;
        }
    }
}
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usuarioGuardado = obtenerUsuarioDeLocalStorage(emailInput.value, passwordInput.value);
    if (usuarioGuardado === undefined) {
        alert('Usuario o contraseña incorrectos. Por favor, intente de nuevo.');
        return;
    }
    let iniciado = true;
    localStorage.setItem('iniciado', JSON.stringify(iniciado));
    localStorage.setItem('usuarioActual', JSON.stringify(usuarioGuardado));
    submitButton.form.submit();
});


