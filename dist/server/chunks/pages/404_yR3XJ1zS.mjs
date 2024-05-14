import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { useSSRContext, onMounted, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                         */
import 'clsx';
/* empty css                                 */
/* empty css                        */

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'navbar',
  setup(__props, { expose: __expose }) {
  __expose();

onMounted(() => {
  const primaryNav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  function handleNavLinkClick(event) {
    const targetSection = event.target.getAttribute('data-section');
    document.cookie ="activeSection=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    document.dispatchEvent(new CustomEvent('cambioSeccion', { detail: targetSection }));
    document.cookie = `activeSection=${targetSection}`;

  }

  // Agregar evento de clic a cada enlace del menú
  primaryNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
  });

  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const __returned__ = { onMounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "primary-header flex" }, _attrs))} data-v-1fc0874e><img class="logo" src="/images/logo.png" alt="logo" data-v-1fc0874e><button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" data-v-1fc0874e><span class="sr-only" data-v-1fc0874e>Menu</span></button><nav data-v-1fc0874e><ul id="primary-navigation" data-visible="false" class="primary-navigation" data-v-1fc0874e><details class="dropdown-menu" data-v-1fc0874e><summary role="button" data-v-1fc0874e><a class="button" data-v-1fc0874e>Inicio</a></summary><ul data-v-1fc0874e><li data-v-1fc0874e><a href="/#presentacion" data-v-1fc0874e>Presentacion </a></li><li data-v-1fc0874e><a href="/#estadisticas" data-v-1fc0874e>Estadisticas</a></li></ul></details><details class="dropdown-menu" data-v-1fc0874e><summary role="button" data-v-1fc0874e><a class="button" data-v-1fc0874e>Ayuntamiento</a></summary><ul data-v-1fc0874e><li data-v-1fc0874e><a href="/ayuntamiento" data-v-1fc0874e>Alcalde</a></li><li data-v-1fc0874e><a href="/ayuntamiento/#concejalias-wrapper" data-v-1fc0874e>Concejalías</a></li><li data-v-1fc0874e><a href="/ayuntamiento/#womens-information" data-v-1fc0874e>CMIM</a></li><li data-v-1fc0874e><a href="/ayuntamiento/#social-services" data-v-1fc0874e>Servicios Sociales</a></li></ul></details><details class="dropdown-menu" data-v-1fc0874e><summary role="button" data-v-1fc0874e><a class="button" data-v-1fc0874e>Servicios</a></summary><ul data-v-1fc0874e><li data-v-1fc0874e><a href="/services/#constructions-wrapper" class="nav-link" data-section="obras" data-v-1fc0874e>Obras</a></li><li data-v-1fc0874e><a href="/services/#catastro" class="nav-link" data-section="catastro" data-v-1fc0874e>Catastro</a></li><li data-v-1fc0874e><a href="/services/#guarderia" class="nav-link" data-section="guarderia" data-v-1fc0874e>Guardería</a></li><li data-v-1fc0874e><a href="https://huesa.sedelectronica.es/info.0" target="_blank" title="Enlace externo a www.catastro.meh" data-v-1fc0874e>Sede Electronica</a></li></ul></details><details class="dropdown-menu" data-v-1fc0874e><summary role="button" data-v-1fc0874e><a class="button" data-v-1fc0874e>Municipio</a></summary><ul data-v-1fc0874e><li data-v-1fc0874e><a href="/municipio/#gastronomia" data-v-1fc0874e>Gastronomía</a></li><li data-v-1fc0874e><a href="/municipio/#entorno" data-v-1fc0874e>Entorno</a></li><li data-v-1fc0874e><a href="/municipio/#locales" data-v-1fc0874e>Locales</a></li></ul></details><div class="icons-nav-bar flex" data-v-1fc0874e><a href="/contact" title="enlace a contacto" data-v-1fc0874e><img class="nav-icons" src="/images/icons/telephone.svg" alt="icono telefono" data-v-1fc0874e></a></div></ul></nav></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const NavBar = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1fc0874e"]]);

const $$Astro$3 = createAstro("https://MateMaki33.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-k2f5zb5c> <section class="flex-column-space flex-column social" data-astro-cid-k2f5zb5c> <div class="flex" data-astro-cid-k2f5zb5c> <img src="/images/logo.png" alt="logo" loading="lazy" data-astro-cid-k2f5zb5c> <h3 data-astro-cid-k2f5zb5c>Diputación de Jaén</h3> </div> <div class="social-media flex" data-astro-cid-k2f5zb5c> <a href="https://www.facebook.com/ayuntamientodehuesa/?locale=es_ES" title="Enlace externo: facebook " target="_blank" data-astro-cid-k2f5zb5c><img src="/images/icons/facebook2.svg" alt="icono facebook" loading="lazy" data-astro-cid-k2f5zb5c></a> <a href="https://www.facebook.com/ayuntamientodehuesa/?locale=es_ES" title="Enlace externo: twitter " target="_blank" data-astro-cid-k2f5zb5c><img src="/images/icons/twitter.svg" alt="icono facebook" loading="lazy" data-astro-cid-k2f5zb5c></a> <a href="https://www.facebook.com/ayuntamientodehuesa/?locale=es_ES" title="Enlace externo: instagram " target="_blank" data-astro-cid-k2f5zb5c><img src="/images/icons/instagram.svg" alt="icono facebook" loading="lazy" data-astro-cid-k2f5zb5c></a> </div> </section> <section class="link-container util" data-astro-cid-k2f5zb5c> <h4 data-astro-cid-k2f5zb5c>Utilidades</h4> <ul data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="http://www.ujaen.es/huesped/planestra/index2.html" title="Enlace externo plan estratégico Jaen" target="_blank" data-astro-cid-k2f5zb5c>Plan Estratégico de Jaén</a></li> <li data-astro-cid-k2f5zb5c><a href="http://www.dipujaen.es/" title="Enlace Externo: http://www.dipujaen.es/" target="_blank" data-astro-cid-k2f5zb5c>Diputación Provincial de Jaén</a></li> <li data-astro-cid-k2f5zb5c><a href="http://activa.jaen.es/" title="Enlace Externo: http://activa.jaen.es/" target="_blank" data-astro-cid-k2f5zb5c>Activa Jaén</a></li> <li data-astro-cid-k2f5zb5c><a href="http://www.060.es/" title="Enlace Externo: http://www.060.es/" target="_blank" data-astro-cid-k2f5zb5c>Administración del Estado - 060</a></li> <li data-astro-cid-k2f5zb5c><a href="http://www.catastro.meh.es/" title="Enlace Externo: http://www.catastro.meh.es/" target="_blank" data-astro-cid-k2f5zb5c>Catastro</a></li> <li data-astro-cid-k2f5zb5c><a href="http://www.observatorioagrario.org/" title="Enlace Externo: http://www.observatorioagrario.org/" target="_blank" data-astro-cid-k2f5zb5c>Observatorio Agrario Andaluz</a></li> </ul> </section> <section class="link-group culture" data-astro-cid-k2f5zb5c> <h4 data-astro-cid-k2f5zb5c>Cultura</h4> <ul data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="http://www.ujaen.es/" title="Enlace Externo: Universidad Jaen" target="_blank" data-astro-cid-k2f5zb5c>Universidad de Jaén</a></li> <li data-astro-cid-k2f5zb5c><a href="https://www.jaenparaisointerior.es/es/" title="Enlace Externo: Jaen Paraiso Interior" target="_blank" data-astro-cid-k2f5zb5c>Turismo</a></li> <li data-astro-cid-k2f5zb5c><a href="https://colegioalferezsegurahuesa.weebly.com/" title="Enlace externo: Colegio Alferez Segura" data-astro-cid-k2f5zb5c>CEIP Alferez Segura</a></li> <li data-astro-cid-k2f5zb5c><a href="https://sites.google.com/iespicosdelguadiana.com/inicio/inicio?authuser=0" title="Enlace externo: IES Picos del Guadiana" data-astro-cid-k2f5zb5c>IES Picos Del Guadiana</a></li> </ul> </section> <hr color="black" class="separator" data-astro-cid-k2f5zb5c> <section class="privacy-container privacy" data-astro-cid-k2f5zb5c> <h3 data-astro-cid-k2f5zb5c>Auntamiento de Huesa</h3> <div class="privacy-links" data-astro-cid-k2f5zb5c> <ul class="flex" data-astro-cid-k2f5zb5c> <li data-astro-cid-k2f5zb5c><a href="" title="" data-astro-cid-k2f5zb5c>Información Legal |</a></li> <li data-astro-cid-k2f5zb5c><a href="" title="" data-astro-cid-k2f5zb5c>Cookies |</a></li> <li data-astro-cid-k2f5zb5c><a href="" title="" data-astro-cid-k2f5zb5c>Accesibilidad</a></li> </ul> </div> </section> </footer> `;
}, "C:/Users/matem/Desktop/Huesa/src/components/footer.astro", void 0);

const $$Astro$2 = createAstro("https://MateMaki33.github.io");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/matem/Desktop/Huesa/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro("https://MateMaki33.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/matem/Desktop/Huesa/src/components/navbar.vue", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body></html>`;
}, "C:/Users/matem/Desktop/Huesa/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "No encontrado", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper" data-astro-cid-zetdm5md> <div class="wrapper-inner" data-astro-cid-zetdm5md> <img src="/images/404.svg" alt="logo" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md><span data-astro-cid-zetdm5md>404 :</span> No encontrado</h1> </div> </div> ` })} `;
}, "C:/Users/matem/Desktop/Huesa/src/pages/404.astro", void 0);

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ViewTransitions as $, NavBar as N, _export_sfc as _, $$Layout as a, _404 as b };
