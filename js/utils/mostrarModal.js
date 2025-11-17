export class Modal {
    constructor() {
        this.modal = document.createElement('dialog');
        this.modal.id = 'customModal';
        this.modal.classList.add('dialog');
        document.body.appendChild(this.modal);
    }

    mostrarMensaje(mensaje, callback = () => {}) {
        this.modal.innerHTML = `
        <div class="main_contenidoModal">
            <p class="modal-mensaje">${mensaje}</p>
            <button id="cerrarModal" class="boton_cerrar">Aceptar</button>
        </div>
        `;

        this.modal.showModal();

        const btnCerrar = this.modal.querySelector('#cerrarModal');

        btnCerrar.addEventListener('click', () => {
            this.modal.close();
            
            if (typeof callback === 'function') {
                callback();
            }
        });
    }
}
export const modal = new Modal();