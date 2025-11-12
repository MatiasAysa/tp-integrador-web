export class Monto {

    constructor() { }

    render() {

        const montoInput = document.querySelector("#monto__input");
        const montoView = document.querySelector("#monto-js");

        let montoViewText = "0000"

        montoInput.addEventListener('input', (e) => {

            // Eliminar cualquier caracter que no sea número
            montoInput.value = montoInput.value.replace(/[^0-9]/g, "");

            montoViewText = montoInput.value;

            if (montoViewText.length < 12) {
                montoView.textContent = montoViewText;
            }
        });

    }
}