import { NombreGiftacrd } from './nombreGF.js';
import { ColoresGF } from './coloresGF.js';
import { FontSizeGF } from './fontSizeGF.js';
import { Monto } from './montoCant.js';
import { MontoPosicion } from './montoPos.js';

const nombreView = document.querySelector("#background__p--nombre-js");

const NOMBREGF = new NombreGiftacrd();
NOMBREGF.render(nombreView);

const COLORESGF = new ColoresGF();
COLORESGF.render(nombreView);

const FONTSIZEGF = new FontSizeGF();
FONTSIZEGF.render(nombreView);

const MONTO = new Monto();
MONTO.render(); 

const MONTOPOSICION = new MontoPosicion();
MONTOPOSICION.render();

