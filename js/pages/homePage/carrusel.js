export class CarruselProximos {
    constructor(contenedor, botonIzq, botonDer) {
        this.contenedor = contenedor;
        this.botonIzq = botonIzq;
        this.botonDer = botonDer;

        this.slides = this.contenedor.querySelectorAll('.proximos_carrusel');
        this.currentIndex = 0;
        this.totalSlides = this.slides.length;
        this.inicializarCarrusel();
    }
    
    inicializarCarrusel() {
        if (this.totalSlides === 0) {
            console.error('No se encontraron slides');
            return;
        }
        
        this.actualizarPosicion();
        this.agregarEventListeners();
    }
    
    agregarEventListeners() {
        this.botonIzq.addEventListener('click', () => {
            this.slideAnterior();
        });
        
        this.botonDer.addEventListener('click', () => {
            this.slideSiguiente();
        });
    }
    
    slideAnterior() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.actualizarPosicion();
        console.log("← Slide anterior - Índice:", this.currentIndex);
    }
    
    slideSiguiente() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.actualizarPosicion();
        console.log("→ Slide siguiente - Índice:", this.currentIndex);
    }
    
    actualizarPosicion() {
        const desplazamiento = -this.currentIndex * 100;
        this.contenedor.style.transform = `translateX(${desplazamiento}%)`;
    }
}