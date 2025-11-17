export class Modal {
    constructor() {
        this.modal = document.createElement('dialog');
        this.modal.id = 'customModal';
        this.modal.classList.add('dialog');
        document.body.appendChild(this.modal);
    }

    mostrarMensaje(mensaje, callback = () => { }) {
        this.modal.innerHTML = `
        <div class="main_contenidoModal">
            <p class="modal-mensaje">${mensaje}</p>
            <button id="cerrarModal" class="boton_cerrar_Modal">Aceptar</button>
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
    mostrarCompra() {
        this.modal.innerHTML =
            `<div class="main_contenidoCompra">
                        <button class="cerrar js-CloseModal">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                <div class="contenido_tituloModal">
                    <h2 class="h2Modal">! Elige tipo de compra !</h2>
                </div>
                <div class="contenido_botones">
                    <button class="boton_individual">
                        <i class="fa-solid fa-user"></i></i>Individual</button>
                    <button class="boton_grupal">
                        <i class="fa-solid fa-users"></i>Grupal</button>
                </div>
            </div>`;

        this.modal.showModal();
        
        const btnCerrar = this.modal.querySelector('.js-CloseModal')

        btnCerrar.addEventListener('click' , ()=>{
            this.modal.close()
        })

    }
}
export const modal = new Modal();