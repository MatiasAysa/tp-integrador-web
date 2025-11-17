export class barraBuscador {
    constructor() {}

    render(HEADER_BUSCADOR) {
        const barraBuscadorContainer = document.querySelector('.js-header');
        if (!barraBuscadorContainer) return;
        const buscadorDiv = document.createElement('div');
        buscadorDiv.classList.add('barra-buscador');
        const buscadorForm = document.createElement('form');
        buscadorForm.classList.add('buscador-form');
        buscadorForm.id = 'search-form';
        const buscadorInput = document.createElement('input');
        buscadorInput.type = 'search';
        buscadorInput.placeholder = HEADER_BUSCADOR[0].placeholder;
        buscadorInput.classList.add('buscador-input');
        buscadorInput.id = 'buscador';
        const buscadorButton = document.createElement('button');
        buscadorButton.type = 'submit';
        buscadorButton.classList.add('buscador-button');
        const buttonIcon = document.createElement('i');
        buttonIcon.classList.add('fa-solid', 'fa-magnifying-glass');
        buscadorButton.appendChild(buttonIcon);
        buscadorForm.appendChild(buscadorInput);
        buscadorForm.appendChild(buscadorButton);
        buscadorDiv.appendChild(buscadorForm);
        barraBuscadorContainer.appendChild(buscadorDiv);

        Buscador(buscadorForm, buscadorInput);
    }

}
    const LISTA_BUSQUEDA = [
    {keywords: ['html', 'html y css', 'curso html', 'desarrollador html'], url: '/pages/courses/Detalles de Curso 1.html'},
    {keywords: ['python', 'curso python','pyton','paiton'], url: '/pages/courses/Detalles de Curso 2.html'},
    {keywords: ['cursos', 'curso', 'lista','crusos'], url: '/pages/courses/cursos.html'},]

function buscadorPalabra(query, LISTA_BUSQUEDA) {
    const busqueda = query.toLowerCase().trim();
    if (!busqueda) return null;
    for (const item of LISTA_BUSQUEDA) {
        for (const kw of item.keywords) {
            if (busqueda === kw || busqueda.includes(kw) || kw.includes(busqueda)) return item.url;
        }
    }
    return null;
}

function Buscador(form, input) {
    if (!form || !input) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value || '';
        const encontrado = buscadorPalabra(query, LISTA_BUSQUEDA);
        if (encontrado) {
            window.location.href = encontrado;
            return;
        }
        if (encontrado === null) {
            alert('No se encontraron resultados para su búsqueda.');    
        }
    });
}