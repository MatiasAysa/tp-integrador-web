import { BuscandorElementos } from "./buscarElementos.js";
export class ModalElegirTipoCompra {
    constructor(contenedorPadre) {
        this.contenedorPadre = contenedorPadre;
    }


    render() {
        const buscadorDom = new BuscandorElementos();
        const botonAbrirModal = document.querySelectorAll(".js-OpenModal");
        const botonCerrarModal = buscadorDom.buscandoElemento(".js-CloseModal");

        botonAbrirModal.forEach(element => {
            element.addEventListener("click", (event) => {
                this.contenedorPadre.showModal();
            });
        });

        botonCerrarModal.addEventListener("click", (event) => { 
            this.contenedorPadre.close();
        });

    }
}
