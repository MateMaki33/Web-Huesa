import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderSlot, f as renderComponent, e as addAttribute, i as renderTransition } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { _ as _export_sfc, a as $$Layout } from './404_yR3XJ1zS.mjs';
import 'clsx';
/* empty css                              */
import { useSSRContext, onMounted, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { b as $$Styledsection } from './ayuntamiento_bV26DzQ5.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://MateMaki33.github.io");
const $$Diamondgrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Diamondgrid;
  return renderTemplate`${maybeRenderHead()}<section class="gallery-wrapper" data-astro-cid-22533hxs> <article class="gallery" data-astro-cid-22533hxs> <!-- THIS IS READY FOR 8 IMG --> ${renderSlot($$result, $$slots["default"])} <!--........................  --> </article> </section> `;
}, "C:/Users/matem/Desktop/Huesa/src/components/diamondgrid.astro", void 0);

const _sfc_main$1 = {
  __name: 'gastronomycomponent',
  setup(__props, { expose: __expose }) {
  __expose();

onMounted(() => {
    
    const buttonNext = document.querySelector(".carousel-next");
    const buttonBack = document.querySelector(".carousel-back");
    const carouselButtonsAll = document.querySelector(".carousel-buttons");
    const gastroCarousel = document.querySelector(
      ".gastronomy-coroussel-inner"
    );

    carouselButtonsAll.style.visibility = "visible";
    let degrees = 0;

    buttonNext.addEventListener("click", () => {
      degrees += 90;

      if (degrees <= 360) {
        gastroCarousel.style.setProperty("--degrees", `${degrees}deg`);

      } else {
        degrees = 0;
        gastroCarousel.style.setProperty("--degrees", `${degrees}deg`);
      }
    });

    buttonBack.addEventListener("click", () => {
      degrees -= 90;

      if (degrees >= -360 && degrees <= 360) {
        gastroCarousel.style.setProperty("--degrees", `${degrees}deg`);
      } else {
        degrees = 0;
        gastroCarousel.style.setProperty("--degrees", `${degrees}deg`);
      }
    });
  });


const __returned__ = { onMounted };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "gastronomy",
    id: "gastronomia"
  }, _attrs))}><div class="gastronomy-content"><h1>La gastonomía</h1><h4>uno de nuestros fuertes</h4><p></p><div class="carousel-buttons"><button class="carousel-next">‹</button><button class="carousel-back">›</button></div></div><div class="gastronomy-caroussel"><div class="gastronomy-coroussel-inner">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/gastronomycomponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Gastronomycomponent = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

// ADD IMAGES TO CAROUSEL


const _sfc_main = {
  __name: 'normalcarousel',
  setup(__props, { expose: __expose }) {
  __expose();

const images = ref([
  { url: '../../images/paisajes/huesaPanoramica.jpg'},
  { url: '../../images/paisajes/cazorla_panoramica.jpg'},
  { url: '../../images/paisajes/Pantano_del_Tranco.jpg'},
  { url: '../../images/paisajes/cazorla_torre.jpg'},
  { url: '../../images/paisajes/espartero.jpg'},
  { url: '../../images/paisajes/olivares.jpg'},
  { url: '../../images/paisajes/pueblo.jpg'}

]);

// .........................

const activeIndex = ref(0);

const navigateCarousel = (offset) => {
  activeIndex.value = (activeIndex.value + offset + images.value.length) % images.value.length;
};


const __returned__ = { images, activeIndex, navigateCarousel, onMounted, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    "aria-label": "Carousel de imagenes de paisajes de la zona",
    class: "paisajes-section",
    id: "entorno"
  }, _attrs))} data-v-ac9aef1d><div class="carousel" data-v-ac9aef1d><button class="carousel-button prev" data-carousel-button="prev" data-v-ac9aef1d> ⇐ </button><button class="carousel-button next" data-carousel-button="next" data-v-ac9aef1d> ⇒ </button><!--[-->`);
  ssrRenderList($setup.images, (item, index) => {
    _push(`<ul data-slides data-v-ac9aef1d><li class="${
      ssrRenderClass({'slide': true, 'is-active': index === $setup.activeIndex })
    }" data-v-ac9aef1d><div class="image-container" style="${
      ssrRenderStyle({ backgroundImage: 'url(' + item.url + ')', backgroundSize: 'cover', backgroundPositionY:'center' })
    }" data-v-ac9aef1d></div></li></ul>`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/normalcarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Normalcarousel = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-ac9aef1d"]]);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$Municipio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Municipio;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "El municipio", "data-astro-cid-uyb7m67k": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Gastronomycomponent", Gastronomycomponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/matem/Desktop/Huesa/src/components/gastronomycomponent.vue", "client:component-export": "default", "data-astro-cid-uyb7m67k": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="gastronomy-container-image" data-position-down data-astro-cid-uyb7m67k><a href="../detalles/migas" data-astro-cid-uyb7m67k><img src="../../images/migas-ruleras.jpg" alt="migas ruleras" data-astro-cid-uyb7m67k${addAttribute(renderTransition($$result3, "jy5q74to", "", "Migas"), "data-astro-transition-scope")}></a></div> <div class="gastronomy-container-image" data-position-up data-astro-cid-uyb7m67k><a href="../detalles/rosquillas" data-astro-cid-uyb7m67k><img src="../../images/rosquillas.jpg" alt="rosquillas caseras dulces" data-astro-cid-uyb7m67k${addAttribute(renderTransition($$result3, "nglzxea2", "", "Rosquillas"), "data-astro-transition-scope")}></a></div> <div class="gastronomy-container-image" data-position-right data-astro-cid-uyb7m67k> <a href="../detalles/galianos" data-astro-cid-uyb7m67k><img src="../../images/galianos-jaen.jpg" alt="galianos de jaén" data-astro-cid-uyb7m67k${addAttribute(renderTransition($$result3, "ml4fio4o", "", "Galianos"), "data-astro-transition-scope")}></a></div> <div class="gastronomy-container-image" data-position-left data-astro-cid-uyb7m67k><a href="../detalles/embutidos" data-astro-cid-uyb7m67k><img src="../../images/embutidos.jpg" alt="comida rica" data-astro-cid-uyb7m67k${addAttribute(renderTransition($$result3, "cigp6qpi", "", "Embutidos"), "data-astro-transition-scope")}></a></div> ` })} ${renderComponent($$result2, "Diamondgrid", $$Diamondgrid, { "data-astro-cid-uyb7m67k": true }, { "default": ($$result3) => renderTemplate`  <img src="/images/paisajes/baeza.jpg" alt="Imagen de Baeza, Jaén" data-astro-cid-uyb7m67k> <img loading="lazy" src="/images/paisajes/cazorla_panoramica.jpg" alt="Panorámica de Cazorla" data-astro-cid-uyb7m67k> <img loading="lazy" src="/images/paisajes/cazorla_torre.jpg" alt=" Torre de un castillo en Cazorla" data-astro-cid-uyb7m67k> <img loading="lazy" src="/images/paisajes/espartero.jpg" alt="espartero trabajando esparto" data-astro-cid-uyb7m67k> <img src="/images/paisajes/huesaPanoramica.jpg" alt="Panorámica de Huesa" loading="lazy" data-astro-cid-uyb7m67k> <img src="/images/paisajes/olivares.jpg" alt="Olivar" loading="lazy" data-astro-cid-uyb7m67k> <img loading="lazy" src="/images/paisajes/Pantano_del_Tranco.jpg" alt="Pantano del tranco" data-astro-cid-uyb7m67k> <img src="/images/paisajes/pueblo.jpg" alt="Un pueblo Andaluz" loading="lazy" data-astro-cid-uyb7m67k>  ` })} ${renderComponent($$result2, "StyledSection", $$Styledsection, { "skew": "left", "idName": "presentacion", "displayPosition": "center", "data-astro-cid-uyb7m67k": true }, { "default": ($$result3) => renderTemplate` <h1 data-astro-cid-uyb7m67k>Nuestro entorno</h1> ` })} ${renderComponent($$result2, "Normalcarousel", Normalcarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/matem/Desktop/Huesa/src/components/normalcarousel.vue", "client:component-export": "default", "data-astro-cid-uyb7m67k": true })} ` })}  `;
}, "C:/Users/matem/Desktop/Huesa/src/pages/municipio.astro", "self");

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/municipio.astro";
const $$url = "/municipio";

export { $$Municipio as default, $$file as file, $$url as url };
