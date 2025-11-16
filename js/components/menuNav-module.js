import { Navbar } from './navbar.js';
import { HEADER_BUSCADOR, NAV_ITEMS, NAV_ITEMS_NO_LOGUEADO,} from './constants.js';
import { HeaderLogo } from './header.js';
import { HEADER_LOGO, HEADER_LOGO_NO_LOGUEADO} from './constants.js';
import { barraBuscador } from './buscador.js';
import { Carrito } from './carrito.js';
import { IniciarSesionbtn} from './iniciarSesionbtn.js';

const headerLogo = new HeaderLogo();
const buscador = new barraBuscador();
const carrito = new Carrito();
const iniciarSesion = new IniciarSesionbtn()
const navbar = new Navbar();
isUserLoggedIn();

function isUserLoggedIn() {
    const iniciado = localStorage.getItem('iniciado');
    if (iniciado === 'true') {
        headerLogo.renderItems(HEADER_LOGO);
        buscador.render(HEADER_BUSCADOR);
        carrito.render();
        navbar.renderItems(NAV_ITEMS);

    }
    else {
        headerLogo.renderItems(HEADER_LOGO_NO_LOGUEADO);
        buscador.render(HEADER_BUSCADOR);
        iniciarSesion.render();
        navbar.renderItems(NAV_ITEMS_NO_LOGUEADO);

    }
}
