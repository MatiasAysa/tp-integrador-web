export class MontoPosicion {
    constructor() {}

    render() {
        
        const montoWrap = document.querySelector(".montoWrap__upRight");
        const posicionLabel = document.querySelectorAll(".labelRadio__monto-js");
        const posicionInput = document.querySelectorAll(".input__montoPos");

        posicionLabel.forEach((input, i) => {
            input.addEventListener('click', (e) => {
                montoWrap.className = posicionInput[i].value;
                console.log(posicionInput[i].value);
            });
        });


    }
}