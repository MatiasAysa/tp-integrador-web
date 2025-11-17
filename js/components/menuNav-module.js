import { Navbar } from './navbar.js';
import { HEADER_BUSCADOR, NAV_ITEMS, NAV_ITEMS_NO_LOGUEADO,} from './constants.js';
import { HeaderLogo } from './header.js';
import { HEADER_LOGO, HEADER_LOGO_NO_LOGUEADO} from './constants.js';
import { barraBuscador } from './buscador.js';
import { Carrito } from './carrito.js';
import { IniciarSesionbtn} from './iniciarSesionbtn.js';
import { Footer } from './footer.js'
import { ModalCarrito } from '../utils/modalCarrito.js';
import { CarritoSlibear } from '../utils/carritoSlibear.js';
const headerLogo = new HeaderLogo();
const buscador = new barraBuscador();
const carrito = new Carrito();
const iniciarSesion = new IniciarSesionbtn()
const navbar = new Navbar();
const footer = new Footer();
const contenedorPadreHeader = document.querySelector(".js-header");
const contenedorPadreElegirTipoCompra = document.querySelector(".js-nav");
const actualizarCarrito = new CarritoSlibear();
footer.addFooter();
isUserLoggedIn();

actualizarCarrito.render();

function renderModal(){
//PRIMERO "DIBUJAR" MODAL DEL CARRITO EN EL NAVBAR    
const templateModalCarrito = `
<dialog class="js-modalCarrito">
        <div class="contenido_MainCarrito">
            <div class="contenedorPrincipal">
                <h1><i class="fa-solid fa-cart-arrow-down"></i> Carrito de compra</h1>
                <button class="js-closeModalCarrito">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="main_contenido">
                <div class="main_productosCarrito js-contenedor-productos">
                </div>

                <div class="main_montoTotal">
                    <h3>Resumen de compra</h3>
                    <div class="montoTotal_Descripcion">
                        <div class="montoTotal_elemento">
                            <span>Cantidad de curso/s</span>
                            <span>3</span>
                        </div>
                        <div class="montoTotal_elemento">
                            <span>Subtotal</span>
                            <span id="subtotal"><s>$30.000</s>$17.500</span>
                        </div>
                        <div class="montoTotal_elemento total">
                            <span>Total</span>
                            <span>$10000</span>
                        </div>
                        <div class="montoTotal_elementoComprar">
                            <a href="./metodoPago.html">Continuar compra</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </dialog>

`;
contenedorPadreHeader.innerHTML += templateModalCarrito;


//SEGUNDO DIBUJAR EL MODAL PARA ELECCION DEL TIPO 
const templateElegirTipoCompra = `
        <dialog class="js-seccion3-dialog">
                <div class="main_contenidoCompra">
                    <button class="boton_cerrar js-CloseModal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="contenido_titulo">
                        <h2>! Elige tipo de compra !</h2>
                    </div>
                    <div class="contenido_botones">
                        <button class="boton_individual js-boton-añadirIndividual">
                            <i class="fa-solid fa-user"></i></i>Individual</button>
                        <button class="boton_grupal">
                            <i class="fa-solid fa-users"></i>Grupal</button>
                    </div>
                </div>
            </dialog>
`;
contenedorPadreElegirTipoCompra.innerHTML += templateElegirTipoCompra;

const modalCarrito = new ModalCarrito();
modalCarrito.render();

}





function isUserLoggedIn() {
    const iniciado = localStorage.getItem('iniciado');
    if (iniciado === 'true') {
        headerLogo.renderItems(HEADER_LOGO);
        buscador.render(HEADER_BUSCADOR);
        carrito.render();
        navbar.renderItems(NAV_ITEMS);
        renderModal();
    }
    else {
        headerLogo.renderItems(HEADER_LOGO_NO_LOGUEADO);
        buscador.render(HEADER_BUSCADOR);
        iniciarSesion.render();
        navbar.renderItems(NAV_ITEMS_NO_LOGUEADO);

    }
}
