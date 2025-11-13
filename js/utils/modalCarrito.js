import { BuscandorElementos } from "./buscarElementos.js";
export class ModalCarrito {
    constructor() {
    }

    render() {
        const buscadorDom = new BuscandorElementos();
        const botonAbrirModal = document.querySelectorAll(".js-modalBoton");
        const botonCerrarModal = buscadorDom.buscandoElemento(".js-closeModalCarrito");
        const contenedorModal = buscadorDom.buscandoElemento(".js-modalCarrito");

        botonAbrirModal.forEach(element => {
            element.addEventListener("click", (event) => {
                contenedorModal.showModal();
                console.log("asd");
            });
        });

        botonCerrarModal.addEventListener("click", (event) => { 
            contenedorModal.close();
        });

    }
}
