export class Carrito {
    constructor() {}
    render() {
        const carritoContainer = document.querySelector('.js-header');
        const carritoDiv = document.createElement('div');
        carritoDiv.classList.add('buscador-carrito');
        const carritoLink = document.createElement('a');
        carritoLink.href = '../courses/carrito.html';
        const carritoIcon = document.createElement('i');
        carritoIcon.classList.add('fa-solid', 'fa-cart-shopping');
        carritoLink.appendChild(carritoIcon);
        carritoDiv.appendChild(carritoLink);
        carritoContainer.appendChild(carritoDiv);
    }
}