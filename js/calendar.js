import { eventos } from "../constants/eventos.js";

const monthElement = document.querySelector(".js-calendar-month");
const yearElement = document.querySelector(".js-calendar-year");
const daysContainer = document.querySelector(".js-calendar-days");

const hoy = new Date();
let fechaActual = new Date();

function renderCalendar(fecha) {
    //limpia dias anteriores
    daysContainer.innerHTML = "";

    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();

    //actializa titulo
    monthElement.textContent = fecha.toLocaleString("es", { month: "long" });
    yearElement.textContent = anio;

    //nro de dia(lunes = 1, martes= 2...)en el que empieza el mes
    const indicePrimerDia = new Date(anio, mes, 1).getDay();

    //cantidad de dias del mes
    const ultimoDia = new Date(anio, mes + 1, 0).getDate();

    //ajuste para q la semana empieze los lunes (lunes = 0, martes= 2..)
    let ajusteInicioDiaDeLaSemana;
    if (indicePrimerDia === 0) {      //(domingo=6)
        ajusteInicioDiaDeLaSemana = 6;
    } else {
        ajusteInicioDiaDeLaSemana = indicePrimerDia - 1;
    }

    //crea dias vacios antes del 1
    let diasVacios = "";
    for (let i = 0; i < ajusteInicioDiaDeLaSemana; i++) {
        diasVacios += '<li class="calendar__day empty"></li>';
    }
    daysContainer.innerHTML += diasVacios;


    //crea los dias del mes
    let diasDelMes = "";
    for (let dia = 1; dia <= ultimoDia; dia++) {

        let isToday = dia == hoy.getDate() && mes == hoy.getMonth() && anio == hoy.getFullYear();

        //obtiene eventos del dia
        let eventosDelDia = eventos.filter(function (ev) {
            return ev.dia === dia && ev.mes === mes + 1 && ev.anio === anio;
        });

        //crea html de eventos
        let contenidoEventos = "";
        for (let j = 0; j < eventosDelDia.length; j++) {
            let evento= eventosDelDia[j];
            contenidoEventos +=
            '<div class="event" titulo="' + evento.title +'" descripcion="' + evento.descripcion + '" link="' + evento.link + '">' + '<h4>' + evento.title + '</h4>' + '</div>';

            
        }

        //agregar today y eventos
        diasDelMes += '<li class="calendar__day' + (isToday ? " today" : "") + '">';
        diasDelMes += '<h4>' + dia + '</h4>';
        diasDelMes += contenidoEventos;
        diasDelMes += '</li>';
    }

    //lo agrega al container de dias
    daysContainer.innerHTML += diasDelMes;

    //agrega eventos al hacer click
    agregarListenersEventos();
}

renderCalendar(fechaActual);

//Botones para cambiar de mes
const btnPrev = document.querySelector(".js-prev-month");
const btnNext = document.querySelector(".js-next-month");

//fncion mes anterior
function mesAnterior() {
    fechaActual.setMonth(fechaActual.getMonth() - 1);
    renderCalendar(fechaActual);
}

//funcion mes siguiente
function mesSiguiente() {
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    renderCalendar(fechaActual);
}

btnPrev.addEventListener("click", mesAnterior);
btnNext.addEventListener("click", mesSiguiente);

//POPUP
const popup = document.querySelector(".js-popu");
const popupTitulo = document.getElementById("popup-titulo");
const popupDescripcion = document.getElementById("popup-descripcion");
const popupLink = document.getElementById("popup-link");
const popupClose = document.querySelector(".js-popup-close");

//muestra popup
function mostrarPopup(titulo, descripcion, link) {
    popupTitulo.textContent = titulo;
    popupDescripcion.innerHTML = descripcion;
    popupLink.href = link;
    popupLink.target = "_self";
    popup.classList.remove("popup--hidden");
}

//oculta popup
function ocultarPopup() {
    popup.classList.add("popup--hidden");
}

popupClose.addEventListener("click", ocultarPopup);

//agrega los eventos al clic
function agregarListenersEventos() {
    const eventosHTML = document.querySelectorAll(".event");
    for (let i = 0; i < eventosHTML.length; i++) {

        eventosHTML[i].addEventListener("click", function () {
            const titulo = this.getAttribute("titulo");
            const descripcion = this.getAttribute("descripcion");
            const link = this.getAttribute("link");

            mostrarPopup(titulo, descripcion, link);
        });
    }
}
