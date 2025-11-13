export class Carrito {
    constructor() {}
    render() {
        const carritoContainer = document.querySelector('.js-header');
        const carritoDiv = document.createElement('div');
        carritoDiv.classList.add('buscador-carrito');
        const carritoLink = document.createElement('a');
        carritoLink.href = '../courses/carrito.html';
        const carritoIcon = document.createElement('i');
        const contadorCarrito = document.createElement('span');
        contadorCarrito.classList.add('carrito-count');
        const stored = localStorage.getItem('cantidadCursos');
        contadorCarrito.textContent = stored ? stored : '';
        carritoIcon.classList.add('fa-solid', 'fa-cart-shopping');
        carritoLink.appendChild(carritoIcon);
        carritoLink.appendChild(contadorCarrito);
        carritoDiv.appendChild(carritoLink);
        carritoContainer.appendChild(carritoDiv);

        const actualizarContador = (count) => {
            if (!contadorCarrito) return;
            const value = (typeof count !== 'undefined' && count !== null) ? String(count) : (localStorage.getItem('cantidadCursos') || '');
            contadorCarrito.textContent = value === '0' ? '' : value;
        };

        window.addEventListener('actualizarCarrito', (actualizar) => {
            const detailCount = actualizar.detail.count;
            actualizarContador(detailCount);
        });
    }
}