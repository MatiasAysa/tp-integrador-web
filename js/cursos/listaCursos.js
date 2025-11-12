const aniadirCursosBtn = document.querySelectorAll('.js-aniadir-cursos');

aniadirCursosBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const cursoId = button.closest('.cursos__contenedor').id;
        let cursosEnCarrito = JSON.parse(localStorage.getItem('cursosEnCarrito')) || [];
        if (!cursosEnCarrito.includes(cursoId)) {
            cursosEnCarrito.push(cursoId);
            localStorage.setItem('cursosEnCarrito', JSON.stringify(cursosEnCarrito));
            localStorage.setItem('cantidadCursos', cursosEnCarrito.length);
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: cursosEnCarrito.length } }));
            alert(`El curso ${cursoId} ha sido añadido al carrito.`);
        } else {
            alert(`El curso ${cursoId} ya está en el carrito.`);
            // remove items (existing behaviour) and notify
            localStorage.removeItem('cursosEnCarrito');
            localStorage.removeItem('cantidadCursos');
            localStorage.removeItem('usuarios')
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: 0 } }));
        }
    });
});
