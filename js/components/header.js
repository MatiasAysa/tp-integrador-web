export class HeaderLogo {
    constructor() {}

    renderItems(headerLogo) {
        const headerContainer = document.querySelector('.js-header');
        const logoItem = document.createElement('div');
        logoItem.classList.add('barra-logo');
        const linkItem = document.createElement('a');
        linkItem.href = headerLogo[0].link;
        const imgItem = document.createElement('img');
        imgItem.src = headerLogo[0].src;
        imgItem.alt = headerLogo[0].alt;
        linkItem.appendChild(imgItem);
        logoItem.appendChild(linkItem);
        headerContainer.appendChild(logoItem);
    }
}