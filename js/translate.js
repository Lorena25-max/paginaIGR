// Traductor automático (Google Translate) - Iglesia Global de Restauración

// Parche para un bug conocido de Firefox: el script de Google usa
// performance.measure() de una forma que Firefox rechaza, y eso rompe
// la creación del widget. Aquí lo neutralizamos sin afectar nada más del sitio.
if (window.performance && window.performance.measure) {
    const originalMeasure = window.performance.measure.bind(window.performance);
    window.performance.measure = function (...args) {
        try {
            return originalMeasure(...args);
        } catch (e) {
            console.warn('[translate.js] Se ignoró un error de performance.measure (bug conocido de Firefox):', e.message);
            return undefined;
        }
    };
}

console.log('[translate.js] archivo cargado correctamente');

function googleTranslateElementInit() {
    console.log('[translate.js] Google llamó a googleTranslateElementInit');
    try {
        new google.translate.TranslateElement(
            {
                pageLanguage: 'es',
                includedLanguages: 'es,en,pt',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            },
            'google_translate_element'
        );
        console.log('[translate.js] Widget de Google creado sin errores');
    } catch (err) {
        console.error('[translate.js] Error creando el widget:', err);
    }
}

function doGTranslate(lang) {
    console.log('[translate.js] doGTranslate llamado con:', lang);
    const combo = document.querySelector('#google_translate_element select.goog-te-combo');

    if (!combo) {
        console.warn('[translate.js] Todavía no existe el <select> de Google, reintentando...');
        setTimeout(() => doGTranslate(lang), 400);
        return;
    }

    console.log('[translate.js] <select> encontrado, cambiando idioma a', lang);
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
        const active = btn.getAttribute('data-lang-btn') === lang;
        btn.classList.toggle('text-secondary', active);
        btn.classList.toggle('text-text-secondary', !active);
    });
}