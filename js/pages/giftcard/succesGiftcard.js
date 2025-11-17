document.addEventListener('DOMContentLoaded', () => {
    // Leer datos guardados
    const raw = localStorage.getItem('giftcardData');
    if (!raw) return;

    let data = null;
    try {
        data = JSON.parse(raw);
    } catch (e) {
        console.error('giftcardData parse error', e);
        return;
    }

    // Referencias en la página de éxito (esperamos que existan)
    const nombreEl = document.querySelector('#background__p--nombre-js');
    const tituloEl = document.querySelector('#background__p--titulo-js');
    const montoEl = document.querySelector('#monto-js');
    const cardBackground = document.querySelector('#card__background-js');

    if (nombreEl) {
        nombreEl.textContent = data.nombre && data.nombre.trim() !== '' ? data.nombre : 'Nombre';
    }

    // Aplicar color: mapear la opción a color concreto usando variables CSS cuando corresponda
    if (nombreEl && data.color) {
        // para 'azul' usamos la clase Colores (variables CSS ya cargadas) — aquí mapeamos manualmente
        switch (data.color) {
            case 'azul':
                // intentar usar var(--color-principal)
                nombreEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim() || '#122f87';
                break;
            case 'azul2':
                nombreEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-principalDegradado').trim() || '#090b35';
                break;
            case 'amarillo':
                nombreEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-secundario').trim() || '#e7c50c';
                break;
            case 'amarillo2':
                nombreEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-secundarioDegradado').trim() || '#99840a';
                break;
            case 'blanco':
            default:
                nombreEl.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-texto').trim() || '#f4f4f4';
                break;
        }
    }

    // font size: en la vista previa la clase .background__p--nombre controla tamaño relativo; aquí aplicamos escala
    if (nombreEl && data.fontSize) {
        // los valores guardados son multiplicadores (ej '1', '1.5'). Convertir a em
        const mult = parseFloat(data.fontSize) || 1;
        // La tarjeta tiene font-size base; aplicamos transform
        nombreEl.style.fontSize = (mult) + 'em';
    }

    if (montoEl && typeof data.monto !== 'undefined') {
        montoEl.textContent = data.monto || '0';
    }

    // Ubicación del monto: movemos el elemento .montoWrap según la clase guardada
    if (cardBackground && data.ubicacion) {
        // eliminamos posibles ubicaciones existentes
        ['montoWrap__upRight', 'montoWrap__upLeft', 'montoWrap__downRight'].forEach(cls => {
            const el = cardBackground.querySelector('.' + cls);
            if (el) el.style.display = 'none';
        });

        // crear o mostrar la posición elegida
        const posClass = data.ubicacion;
        let posEl = cardBackground.querySelector('.' + posClass);
        if (!posEl) {
            // si no existe, crear un contenedor simple
            posEl = document.createElement('div');
            posEl.className = posClass;
            posEl.innerHTML = '<p class="montoWrap__p"><span class="form__titulos-plata">$</span> <span id="monto-js">' + (data.monto || '0') + '</span></p>';
            cardBackground.appendChild(posEl);
        } else {
            // mostrar y actualizar
            posEl.style.display = '';
            const span = posEl.querySelector('#monto-js');
            if (span) span.textContent = data.monto || '0';
        }
    }

    // Fondo: data.background es nombre de archivo
    if (cardBackground && data.background) {
        // suponemos la ruta ../../img/giftcard/<file>
        const url = '../../img/giftcard/' + data.background;
        cardBackground.style.backgroundImage = `url(${url})`;
        cardBackground.style.backgroundSize = 'cover';
    }

    // Una vez renderizada, opcional: limpiar storage para evitar reuso accidental
    // localStorage.removeItem('giftcardData');
});
