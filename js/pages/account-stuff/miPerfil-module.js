const cerrarSesionBtn = document.querySelector('.perfil__button--cerrarSesion');
const nombre = document.querySelector('.js-name');
const username = document.querySelector('.js-username');
const dni = document.querySelector('.js-dni');
const email =  document.querySelector('.js-email');
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const agregarTarjetaBtn = document.querySelector('.js-agregarTarjeta');

agregarTarjetaBtn.addEventListener('click' , (a)=> {
    a.preventDefault;
    if(usuarioActual.tarjetas.length >= 3){
        alert("Has llegado al maximo de tarjetas permitidas");
        return;
    }
    window.location.href = "./tarjetas.html"
})

window.addEventListener("DOMContentLoaded", ()=>{
    nombre.textContent = usuarioActual.name;
    username.textContent = usuarioActual.surname;
    dni.textContent = usuarioActual.dni;
    email.textContent = usuarioActual.email
});

cerrarSesionBtn.addEventListener('click', () => {
    if (confirm('¿Estás seguro que deseas cerrar sesión?')) {
        localStorage.setItem('iniciado', JSON.stringify(false));
        localStorage.removeItem('usuarioActual');
    } else {
        return;
    }});