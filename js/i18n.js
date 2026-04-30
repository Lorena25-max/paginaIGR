const defaultLang = "es";

async function loadLang(lang) {
  try {
    const response = await fetch(`/lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error("Error cargando idioma:", error);
  }
}

const savedLang = localStorage.getItem("lang") || defaultLang;
document.addEventListener("DOMContentLoaded", () => {
  loadLang(savedLang);
});