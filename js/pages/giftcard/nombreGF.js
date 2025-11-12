export class NombreGiftacrd {
    constructor() {}

    render(nombreView) {
        const nombreForm = document.querySelector("#texto__input-js");
        // const nombreView = document.querySelector("#background__p--nombre-js");

        let nombreViewText = "";

        nombreForm.addEventListener('input', (e) => {

            nombreViewText = nombreForm.value;

            if (nombreViewText.length < 20) {
                nombreView.textContent = nombreViewText === "" ? "Nombre" : nombreViewText;
            }
        });
    }

}