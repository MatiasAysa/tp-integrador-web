export class Footer{
    constructor(){
    }
    addFooter(){
        const container = document.querySelector('.pie-pagina');
        crearFooter(container);
    }
}

function crearFooter(container){
    container.innerHTML += 
        `<div class="pie-pagina-contenido">
            <div class="pie-pagina-nosotros">
                <h4>Team Queso</h4>
                <div class="pie-pagina-nosotros-miembros">
                    <ul>
                        <li><i class="fa-solid fa-user"></i>Matias Aysa </li>
                        <li>Dni:46987982</li>
                        <li><i class="fa-solid fa-user"></i>Leon Rey </li>
                        <li>Dni:46874342</li>
                        <li><i class="fa-solid fa-user"></i>Eric Barrios</li>
                        <li>Dni:46346348</li>
                        <li><i class="fa-solid fa-user"></i>Ivan Gamboa </li>
                        <li>Dni:47791152</li>
                    </ul>
                </div>
            </div>

            <div class="pie-pagina-navegacion">
                <div class="pie-pagina-navegacion-soporte">
                    <h4>Soporte</h4>
                    <ul>
                        <li><a href="../../pages/footer/soporteYlegal.html#preguntas">Preguntas Frecuentes</a></li>
                        <li><a href="../../pages/contact/contact.html">Contactanos</a></li>
                    </ul>
                </div>
                <div class="pie-pagina-navegacion-legal">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="../../pages/footer/soporteYlegal.html#terminos">Terminos y Condiciones</a></li>
                        <li><a href="../../pages/footer/soporteYlegal.html#cookies">Politica de Cookies</a></li>
                        <li><a href="../../pages/footer/soporteYlegal.html#privacidad">Politica de Privacidad</a></li>
                    </ul>
                </div>
            </div>

            <div class="pie-pagina-redes">
                <h4>Redes Sociales</h4>
                <div class="pie-pagina-redes-lista">
                    <ul>
                        <li><a href="https://www.instagram.com/teamquesogg/" target="_blank"><i
                                    class="fa-brands fa-square-instagram"></i>Instagram</a></li>
                        <li><a href="https://www.facebook.com/TeamQueso/" target="_blank"><i
                                    class="fa-brands fa-square-facebook"></i>Facebook</a></li>
                        <li><a href="https://www.youtube.com/c/TeamQueso" target="_blank"><i
                                    class="fa-brands fa-square-youtube"></i>Youtube</a></li>
                        <li><a href="https://x.com/teamquesogg?lang=es" target="_blank"><i
                                    class="fa-brands fa-square-x-twitter"></i>Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pie-pagina-inferior">
            <p>&copy; 2025 La Academia Team Queso. Todos los derechos reservados.</p>
        </div>`
};"../.."


