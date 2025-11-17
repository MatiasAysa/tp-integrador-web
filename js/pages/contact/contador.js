export class Contador {
    constructor() {
    }
    render() {
        const maxCaracteres = 1000;
        const mensaje = document.querySelector(".js-contactoMensaje")
        const counter = document.createElement("p");
        counter.classList.add("contador");
        counter.style.color = "#f1f1f1";
        counter.style.fontSize = "0.4em";
        mensaje.parentElement.appendChild(counter);
        counter.textContent = `0 / ${maxCaracteres} caracteres`;
        mensaje.addEventListener("input", (e) => {
            e.preventDefault();

            if (mensaje.value.length > this.maxCaracteres) {
                mensaje.value = mensaje.value.slice(0, this.maxCaracteres);
            }
            counter.textContent = `${mensaje.value.length} / ${maxCaracteres} caracteres`;
        });
    }
}