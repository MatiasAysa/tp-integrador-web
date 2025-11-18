import { BuscandorElementos } from "./buscarElementos.js";
export class ModalElegirTipoCompra {
    constructor() {
    }


    render() {
        const buscadorDom = new BuscandorElementos();
        const modealElegirCompra = buscadorDom.buscandoElemento(".js-seccion3-dialog");
        const botonAbrirModal = document.querySelectorAll(".js-OpenModal");
        const botonCerrarModal = buscadorDom.buscandoElemento(".js-CloseModal");

        botonAbrirModal.forEach(element => {
            element.addEventListener("click", (event) => {
                modealElegirCompra.showModal();
            });
        });

        botonCerrarModal.addEventListener("click", (event) => { 
            modealElegirCompra.close();
        });

    }
}
