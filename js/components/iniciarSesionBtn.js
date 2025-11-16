export class IniciarSesionbtn {
    constructor() {}
    render() {
        const iniciarSesionContainer = document.querySelector('.js-header');
        const iniciarSesionDiv = document.createElement('div');
        iniciarSesionDiv.classList.add('buscador-carrito');
        iniciarSesionDiv.classList.add('iniciarSesion');
        const iniciarSesionLink = document.createElement('a');
        iniciarSesionLink.ariaLabel = 'Iniciar Sesión';
        iniciarSesionLink.href = '../pages/account-stuff/log-in.html';
        iniciarSesionLink.textContent = 'INICIAR SESIÓN';
        iniciarSesionDiv.appendChild(iniciarSesionLink);
        iniciarSesionContainer.appendChild(iniciarSesionDiv);
    }
}