const cerrarSesionBtn = document.querySelector('.perfil__button--cerrarSesion');

cerrarSesionBtn.addEventListener('click', () => {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        localStorage.setItem('iniciado', JSON.stringify(false));
        localStorage.removeItem('usuarioActual');
    } else {
        return;
    }});