import { modal } from "../../utils/mostrarModal.js";


const cerrarSesionBtn = document.querySelector('.perfil__button--cerrarSesion');
const nombre = document.querySelector('.js-name');
const username = document.querySelector('.js-username');
const dni = document.querySelector('.js-dni');
const email = document.querySelector('.js-email');
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const indexUsuario = buscarUsuarioPorEmail();
const agregarTarjetaBtn = document.querySelector('.js-agregarTarjeta');
const contenedorTarjetas = document.querySelector('.js-tarjetas')
const borrarBtn = document.querySelector('.perfil__button--borrar');

const tarjetaIndex = buscarTarjetaPorNum();

agregarTarjetaBtn.addEventListener('click', (a) => {
    a.preventDefault;
    if (usuarioActual.tarjetas.length >= 3) {
        modal.mostrarMensaje("Has llegado al maximo de tarjetas permitidas");
        return;
    }
    window.location.href = "./tarjetas.html"
})

window.addEventListener("DOMContentLoaded", () => {
    nombre.textContent = usuarioActual.name;
    username.textContent = usuarioActual.surname;
    dni.textContent = usuarioActual.dni;
    email.textContent = usuarioActual.email
    mostrarTarjetas();
    const botones = document.querySelectorAll(".js-eliminarTarjeta");
    agregarFuncionalidad(botones);
});

cerrarSesionBtn.addEventListener('click', () => {
    modal.mostrarOpcion('¿Deseas cerrar sesion?').then(resultado => {
        if (resultado) {
            localStorage.setItem('iniciado', JSON.stringify(false));
            localStorage.removeItem('usuarioActual');
            window.location.href = `./log-in.html`
        } else {
            return;
        }
    })
});

borrarBtn.addEventListener('click', () => {
    modal.mostrarOpcion('¿Estás seguro que deseas borrar la cuenta actual?').then(resultado => {
        if (resultado) {
            usuarios.splice(indexUsuario, 1);
            localStorage.setItem('iniciado', JSON.stringify(false));
            localStorage.removeItem('usuarioActual');
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
            window.location.href = `./log-in.html`
        }
    })
})

function mostrarTarjetas() {
    const tarjetas = usuarioActual.tarjetas;
    tarjetas.forEach(tarjeta => {
        const ultimos2 = tarjeta.numero.slice(-2);
        const tipo = tarjeta.tipo
        contenedorTarjetas.innerHTML += `<div class="perfil__tarjetas">
                    <i class="fa-regular fa-square-minus js-eliminarTarjeta" data-tarjeta='${tarjeta.numero}'></i>
                    <p class="perfil__datos"><b>&nbsp;${tipo}:<br></b>&nbsp;XXXX-XXXX-XX${ultimos2}</p>
                </div>`
    });
}

function agregarFuncionalidad(botones) {
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const numeroTarjeta = boton.getAttribute('data-tarjeta')
            modal.mostrarOpcion('¿Deseas eliminar esta tarjeta?').then(resultado => {
                if (resultado) {
                    const tarjetaIndex = buscarTarjetaPorNum(numeroTarjeta)
                    usuarios[indexUsuario].tarjetas.splice(tarjetaIndex, 1)
                    usuarioActual.tarjetas.splice(tarjetaIndex, 1)
                    localStorage.setItem("usuarios", JSON.stringify(usuarios))
                    localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual))
                    boton.parentElement.remove();
                }
            })
            return;
        })
    })
}
function buscarUsuarioPorEmail() {
    return usuarios.findIndex(u => u.email === usuarioActual.email);
}

function buscarTarjetaPorNum(numero) {
    return usuarios[indexUsuario].tarjetas.findIndex(u => u.numero === numero)
}
