export class Navbar {
    constructor() {}

    renderItems(items) {
        const navContainer = document.querySelector('.js-nav');
        const listaGeneral = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            const linkItem = document.createElement('a');
            linkItem.textContent = item.text;
            linkItem.href = item.link;
            listItem.appendChild(linkItem);
            navContainer.appendChild(listItem);
            listaGeneral.appendChild(listItem);
            navContainer.appendChild(listaGeneral);
        });
    }
}