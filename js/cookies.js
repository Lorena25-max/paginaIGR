// Aviso de Cookies - Iglesia Global de Restauración
(function () {
    const STORAGE_KEY = 'igr_cookies_aceptadas';

    if (localStorage.getItem(STORAGE_KEY) === 'true') {
        return;
    }

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background-color: #0d0d0d;
        border-top: 1px solid #c38914;
        padding: 1.25rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-family: inherit;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
    `;

    banner.innerHTML = `
        <p style="color:#e5e5e5; margin:0; max-width: 640px; font-size: 0.95rem; text-align:center;">
            Usamos cookies para mejorar tu experiencia en este sitio. Al continuar navegando, aceptas nuestro uso de cookies.
        </p>
        <div style="display:flex; gap:0.75rem; flex-wrap: wrap; justify-content:center;">
            <button id="cookie-aceptar" style="
                background-color:#c38914;
                color:#000;
                border:none;
                padding:0.6rem 1.5rem;
                border-radius:0.5rem;
                font-weight:600;
                cursor:pointer;
            ">Aceptar</button>
            <button id="cookie-rechazar" style="
                background-color:transparent;
                color:#e5e5e5;
                border:1px solid #555;
                padding:0.6rem 1.5rem;
                border-radius:0.5rem;
                font-weight:600;
                cursor:pointer;
            ">Rechazar</button>
        </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('cookie-aceptar').addEventListener('click', function () {
        localStorage.setItem(STORAGE_KEY, 'true');
        banner.remove();
    });

    document.getElementById('cookie-rechazar').addEventListener('click', function () {
        sessionStorage.setItem(STORAGE_KEY, 'true');
        banner.remove();
    });

    if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        banner.remove();
    }
})();