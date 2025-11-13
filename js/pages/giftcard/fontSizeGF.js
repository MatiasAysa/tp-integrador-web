export class FontSizeGF {

    constructor() {
    }

    render(nombreView) {
        const fontSizeInputs = document.querySelectorAll(".font-size__input");
        const tituloView = document.querySelector(".background__p--titulo");

        fontSizeInputs.forEach((input, i) => {
            input.addEventListener('input', (e) => {
                
                const selectedFontSize = e.target.value;
                nombreView.style.fontSize = selectedFontSize + "em";
                tituloView.style.fontSize = (0.5*selectedFontSize) + "em";
                
            });
        });

    }
}