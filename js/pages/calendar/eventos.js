import { DATOS_CURSOS } from "../courses/datosCursos.js";

const TEMPLATE_CADUCADO = `
    <h2 class='tituloCaducado'><strong>CURSO CADUCADO</h2>

    <p>Este curso ha caducado, no es posible acceder a él.</p
    <p>Si quieres ver mas cursos, clickea en <b>Más información</b>.</p>
`

const LINK_LISTA_CURSOS = "../../../pages/courses/coursesList.html";

// estos se extraen del arhivo datosCursos
export const eventosDinamicos = DATOS_CURSOS.map(curso => ({
  dia: curso.fecha_lanzamiento.getDate(),
  mes: curso.fecha_lanzamiento.getMonth() + 1,
  anio: curso.fecha_lanzamiento.getFullYear(),
  title: curso.nombre,
  link: `../../pages/courses/course-details.html?id=${curso.id}`,
  descripcion: curso.descripcion_larga
}));

export const eventosCaducados = [
  {
    dia: 5,
    mes: 11,
    anio: 2025,
    title: "C++",
    link: LINK_LISTA_CURSOS,
    descripcion: TEMPLATE_CADUCADO
  },

  {
    dia: 1, mes: 11, anio: 2025,
    title: "React",
    link: LINK_LISTA_CURSOS,
    descripcion: TEMPLATE_CADUCADO,
  },

  {
    dia: 1, mes: 11, anio: 2025, title: "SQL", link: LINK_LISTA_CURSOS,
    descripcion: TEMPLATE_CADUCADO
  },


  {
    dia: 15,
    mes: 11,
    anio: 2025,
    title: "Unity Avanzado",
    link: LINK_LISTA_CURSOS,
    descripcion: TEMPLATE_CADUCADO
  },
]

export const eventos = [
  ...eventosDinamicos,
  ...eventosCaducados
]