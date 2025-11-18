import { NombreGiftacrd } from './nombreGF.js';
import { ColoresGF } from './coloresGF.js';
import { FontSizeGF } from './fontSizeGF.js';
import { Monto } from './montoCant.js';
import { MontoPosicion } from './montoPos.js';
import { FondoGF } from './background.js';

const nombreView = document.querySelector("#background__p--nombre-js");
const emailInput = document.querySelector(".form__email");

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
		e.preventDefault();
		try {
			const nombre = document.querySelector('#texto__input-js')?.value || '';
			const color = document.querySelector('input[name="color"]:checked')?.value || 'blanco';
			const fontSize = document.querySelector('input[name="fontSize"]:checked')?.value || '1';
			const monto = document.querySelector('#monto__input')?.value || '';
			const ubicacion = document.querySelector('input[name="ubicacion"]:checked')?.value || 'montoWrap__upRight';
			const background = document.querySelector('input[name="background"]:checked')?.value || 'crfondo.png';
			const data = { nombre, color, fontSize, monto, ubicacion, background };
			localStorage.setItem('giftcardData', JSON.stringify(data));
		} catch (err) {
			console.error('Error guardando datos de giftcard:', err);
		}
		mostrarMensajeFinal('Giftcard añadida al Carrito!', 'exito');
		setTimeout(() => {
			form.reset();
			location.reload();
		}, 1500);
	});
}
function mostrarError(input) {
	input.classList.remove('valido');
	input.classList.add('invalido');
}

function mostrarExito(input) {
	input.classList.remove('invalido');
	input.classList.add('valido');
}
emailInput.addEventListener('input', () => {
	if (validarEmail(emailInput.value)) {
		mostrarExito(emailInput);
	} else {
		mostrarError(emailInput);
	}
});
function validarEmail(email) {
	const restriccionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return restriccionEmail.test(email);
}

function mostrarMensajeFinal(mensaje, tipo) {
	const mensajeDiv = document.createElement('div');
	mensajeDiv.className = `mensaje-final mensaje-${tipo}`;
	mensajeDiv.innerHTML = `
        <i class="fa-solid ${tipo === 'exito' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
        <span>${mensaje}</span>
    `;

	mensajeDiv.style.cssText = `
        position: fixed;
        top: 2em;
        right: 2em;
        background: ${tipo === 'exito' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1em;
        border-radius: 8px;
        display: flex;
        align-items: center;
        max-width: 27em;
        gap: 0.5em;
    `;
	document.body.appendChild(mensajeDiv);
	setTimeout(() => { mensajeDiv.remove(); }, 2000);
}
