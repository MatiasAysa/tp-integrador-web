import { Colores } from '../components/colors.js';

export class ColoresGF {

    constructor() { }

    render() {

        const COLORES = new Colores();

        const nombreView = document.querySelector("#background__p--nombre-js");

        const coloresForm = document.querySelectorAll(".labelRadio__color");
        const coloresInput = document.querySelectorAll(".color__input");        

        coloresForm.forEach( (color, i) => {
            color.addEventListener('click', (e) => {

                switch (coloresInput[i].value) {
                    case 'azul':                        
                        nombreView.style.color = COLORES.COLOR_PRINCIPAL;
                        break; 
                    case 'azul2':
                        nombreView.style.color = COLORES.COLOR_PRINCIPAL_DEGRADADO;
                        break;
                    case 'amarillo':
                        nombreView.style.color = COLORES.COLOR_SECUNDARIO;
                        break;
                    case 'amarillo2':
                        nombreView.style.color = COLORES.COLOR_SECUNDARIO_DEGRADADO; 
                        break; 
                    case 'blanco':
                        nombreView.style.color = COLORES.COLOR_TEXTO;
                        break;
                }

            });
        });

    }
}