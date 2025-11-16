const aniadirCursosBtn = document.querySelectorAll('.js-aniadir-cursos');

aniadirCursosBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const cursoId = button.closest('.cursos__contenedor').id;
        const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'))
        let cursosEnCarrito = JSON.parse(localStorage.getItem('cursosEnCarrito')) || [];
        if (!usuarioActual.cursosObtenidos.includes(cursoId)) {
            usuarioActual.cursosObtenidos.push(cursoId);
            cursosEnCarrito.push(cursoId);
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            localStorage.setItem('cantidadCursos', usuarioActual.cursosObtenidos.length);
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: cursosEnCarrito.length } }));
            alert(`El curso ${cursoId} ha sido añadido al carrito.`);
        } else {
            alert(`El curso ${cursoId} ya está en el carrito.`);
            usuarioActual.cursosObtenidos.length = []
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            localStorage.removeItem('cantidadCursos');
            window.dispatchEvent(new CustomEvent('actualizarCarrito', { detail: { count: 0 } }));
        }
    });
});
