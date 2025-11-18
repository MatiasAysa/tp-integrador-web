import { modal } from "../../utils/mostrarModal.js";

const contenedorOpciones = document.querySelector('.metodoPago_Opciones')
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"))
const botonAgregar = document.querySelector('#agregarTarjeta')
mostrarTarjetas();

function mostrarTarjetas() {
    const tarjetas = usuarioActual.tarjetas;
    let contadorTarjeta = 0;
    tarjetas.forEach(tarjeta => {
        const ultimos4 = tarjeta.numero.slice(-4);
        const tipo = tarjeta.tipo
        const iTipo = (tipo == 'visa') ? 'fa-brands fa-cc-visa' : 'fa-brands fa-cc-mastercard'

        contenedorOpciones.innerHTML += `<section class="metodo_opcion">
                        <input type="radio" name="metodo-pago" id="tarjeta${contadorTarjeta}" required>
                        <label for="tarjeta${contadorTarjeta}">
                            <i class="${iTipo}"></i>
                            ${tipo} terminada en ${ultimos4}
                        </label>
                    </section>`
        contadorTarjeta ++
    });
}
botonAgregar.addEventListener('click', (a) => {
    a.preventDefault;
    if (usuarioActual.tarjetas.length >= 3) {
        modal.mostrarMensaje("Has llegado al maximo de tarjetas permitidas");
        return;
    }
    window.location.href = "../account-stuff/tarjetas.html"
})
