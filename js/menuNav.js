import { Navbar } from './navbar.js';
import { HEADER_BUSCADOR, NAV_ITEMS } from './constants.js';
import { HeaderLogo } from './header.js';
import { HEADER_LOGO } from './constants.js';
import { barraBuscador } from './buscador.js';
import { Carrito } from './carrito.js';

const headerLogo = new HeaderLogo();
headerLogo.renderItems(HEADER_LOGO);
const buscador = new barraBuscador();
buscador.render(HEADER_BUSCADOR);
const carrito = new Carrito();
carrito.render();
const navbar = new Navbar();
navbar.renderItems(NAV_ITEMS);
