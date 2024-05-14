import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './404_yR3XJ1zS.mjs';
import 'clsx';
/* empty css                          */
import { b as $$Styledsection, C as Cardvue, $ as $$Flgridsection } from './ayuntamiento_bV26DzQ5.mjs';

const $$Astro$2 = createAstro("https://MateMaki33.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-zi4ldr3x> <img class="img-hero-bw" src="/images/picos-bw2.jpg" alt="picos del guadiana" data-astro-cid-zi4ldr3x> <div class="img-hero-color" data-astro-cid-zi4ldr3x></div> </section> <article class="hero-text" data-astro-cid-zi4ldr3x> <h1 data-astro-cid-zi4ldr3x>Bienvenidos a <span data-astro-cid-zi4ldr3x>Huesa</span></h1> <p data-astro-cid-zi4ldr3x>Un hogar de tradiciones</p> </article> `;
}, "C:/Users/matem/Desktop/Huesa/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://MateMaki33.github.io");
const $$Statictics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Statictics;
  const { image, messure, altText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="medidores-container noVisible" data-astro-cid-wkplhqpx> <div class="medidor-group" data-astro-cid-wkplhqpx> <img loading="eager" class="img"${addAttribute(image, "src")}${addAttribute(altText, "alt")} data-astro-cid-wkplhqpx> <div class="medidor" data-astro-cid-wkplhqpx> <p data-astro-cid-wkplhqpx>${messure}</p> <div class="progress-bar" data-astro-cid-wkplhqpx> <div class="bar" data-astro-cid-wkplhqpx></div> </div> </div> </div> </article>  `;
}, "C:/Users/matem/Desktop/Huesa/src/components/statictics.astro", void 0);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Huesa", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "StyledSection", $$Styledsection, { "skew": "left", "idName": "presentacion", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="wrapper flex" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Cardvue", Cardvue, { "className": "card-flex-column-100 noVisible", "cardTitle": "Tierra de tradiciones", "image": "/images/paisajes/huesaPanoramica.jpg", "altText": "panor\xE1mica Huesa", "captionImg": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <article data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6><b data-astro-cid-j7pv25f6>Otra parte del Jaén paraíso interior</b></p><br data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Huesa es un pueblo fantástico y acogedor, lleno de tesoros naturales por explotar y descubrir que nos han llevado a ser una ventana a través de la que mirar a nuestra historia.</p><br data-astro-cid-j7pv25f6> </article> ` })} </div> ` })} <div style="height:max(60vh, 40vw)" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "NormalSection", $$Flgridsection, { "className": "section-grid-2 noVisible", "idName": "estadisticas", "title": "Algunos datos", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NormalSection", $$Flgridsection, { "className": "section-flex-column", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Statictics", $$Statictics, { "image": "/images/icons/mountain.svg", "messure": "Altura: 655m", "altText": "svg monta\xF1a", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result4, "Statictics", $$Statictics, { "image": "/images/icons/censo.svg", "messure": "Censo: 2541", "altText": "svg icono personas", "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result3, "NormalSection", $$Flgridsection, { "className": "section-flex-column", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Statictics", $$Statictics, { "image": "/images/icons/extension.svg", "messure": "Superficie: 137 Km2", "altText": "svg dibujo arbol", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result4, "Statictics", $$Statictics, { "image": "/images/icons/gentilicio.svg", "messure": "Gentilicio: Huesense, huese\xF1o y osense.", "altText": "svg bocadillo nube", "data-astro-cid-j7pv25f6": true })} ` })} ` })} ` })} `;
}, "C:/Users/matem/Desktop/Huesa/src/pages/index.astro", void 0);

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
