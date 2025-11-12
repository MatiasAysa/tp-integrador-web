export class Monto {

    constructor() { }

    render() {
        const montoInput = document.querySelector("#monto__input");
        const montoView = document.querySelector("#monto-js");

        montoInput.addEventListener('input', () => {
            // Eliminar caracteres que no sean números
            let valor = montoInput.value.replace(/[^0-9]/g, "");

            // Limitar la longitud (por ejemplo, hasta 10 millones → 8 dígitos)
            if (valor.length > 8) valor = valor.slice(0, 8);

            // Actualizar el input sin formato
            montoInput.value = valor;

            // Formatear con puntos como separadores de miles
            montoView.textContent = Number(valor).toLocaleString("es-AR");
        });
    }
}
