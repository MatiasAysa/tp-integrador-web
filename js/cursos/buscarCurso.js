import { DATOS_CURSOS } from './datosCursos.js';

export class BuscarCurso {
    constructor(id_curso) {
        this.datos = DATOS_CURSOS.find(curso => curso.id == id_curso);
    }
}
