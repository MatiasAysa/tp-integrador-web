export class FondoGF {

    constructor() {}

    render() {
        const fondoInput = document.querySelectorAll(".input__background");
        const fondoView = document.querySelector(".card__background");

        fondoInput.forEach((input, i) => {
            input.addEventListener('input', (e) => {
                console.log(fondoInput[i].value);
                fondoView.style.backgroundImage = `url(../../img/giftcard/${fondoInput[i].value})`;
            });
        });

    }
}