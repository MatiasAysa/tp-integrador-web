export class BuscandorElementos {
    constructor(){}

    buscandoElemento(cssSelector){
        return document.querySelector(cssSelector);
    }

    obtenerElValorDelElemento(cssSelector){
        return this.buscandoElemento(cssSelector).value;

    }
}