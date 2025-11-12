import { NombreGiftacrd } from './nombreGF.js';
import { ColoresGF } from './coloresGF.js';
import { FontSizeGF } from './fontSizeGF.js';
import { Monto } from './montoCant.js';
import { MontoPosicion } from './montoPos.js';
import { FondoGF } from './background.js';

const fondoGF = new FondoGF();
fondoGF.render();

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

const FONDOGF = new FondoGF();
FONDOGF.render();

// Guardar opciones del formulario en localStorage antes de navegar a la página de éxito
const form = document.querySelector('.form');
if (form) {
	form.addEventListener('submit', (e) => {
		try {
			const nombre = document.querySelector('#texto__input-js')?.value || '';
			const color = document.querySelector('input[name="color"]:checked')?.value || 'blanco';
			const fontSize = document.querySelector('input[name="fontSize"]:checked')?.value || '1';
			const monto = document.querySelector('#monto__input')?.value || '';
			const ubicacion = document.querySelector('input[name="ubicacion"]:checked')?.value || 'montoWrap__upRight';
			const background = document.querySelector('input[name="background"]:checked')?.value || 'crfondo.png';

			const data = { nombre, color, fontSize, monto, ubicacion, background };
			localStorage.setItem('giftcardData', JSON.stringify(data));
			// no preventDefault: dejamos que el formulario envíe y navegue a la página de éxito
		} catch (err) {
			console.error('Error guardando datos de giftcard:', err);
		}
	});
}

