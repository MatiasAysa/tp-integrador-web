export class Colores {
    constructor() {
        const rootStyles = getComputedStyle(document.documentElement);
        // --color-principal: #122f87;
        // --color-principalDegradado: #090b35;
        // --color-secundario: #e7c50c;
        // --color-secundarioDegradado: #99840a;
        // --color-terciario: rgb(229, 229, 229);
        // --color-texto: #f4f4f4;

        // Guardar como propiedades de la instancia para que puedan usarse desde afuera
        this.COLOR_PRINCIPAL = rootStyles.getPropertyValue('--color-principal').trim();
        this.COLOR_PRINCIPAL_DEGRADADO = rootStyles.getPropertyValue('--color-principalDegradado').trim();
        this.COLOR_SECUNDARIO = rootStyles.getPropertyValue('--color-secundario').trim();
        this.COLOR_SECUNDARIO_DEGRADADO = rootStyles.getPropertyValue('--color-secundarioDegradado').trim();
        this.COLOR_TERCIARIO = rootStyles.getPropertyValue('--color-terciario').trim();
        // corrección: leer --color-texto (antes estaba mal apuntando a --color-terciario)
        this.COLOR_TEXTO = rootStyles.getPropertyValue('--color-texto').trim();
    }
}
