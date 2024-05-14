import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead, i as renderTransition } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions, N as NavBar } from './404_yR3XJ1zS.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro$1 = createAstro("https://MateMaki33.github.io");
const $$DetailLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DetailLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/matem/Desktop/Huesa/src/components/navbar.vue", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/matem/Desktop/Huesa/src/layouts/DetailLayout.astro", void 0);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const recipes = [
    {
      id: "migas",
      name: "Migas",
      urlImage: "/images/migas-ruleras.jpg",
      urlRecipe: "https://www.youtube.com/watch?v=y15rztaMfE4",
      ingredients: ["pan", "ajo", "aceite", "sal"],
      description: "Las migas son un plato tradicional de la gastronom\xEDa espa\xF1ola, preparadas a base de migas de pan, ajo, aceite de oliva y sal. Es un plato popular en muchas regiones de Espa\xF1a y se suele servir como plato principal o acompa\xF1amiento en diversas ocasiones."
    },
    {
      id: "rosquillas",
      name: "Rosquillas",
      urlImage: "/images/rosquillas.jpg",
      urlRecipe: "https://www.youtube.com/watch?v=KRXyAKRkRlE",
      ingredients: ["harina", "az\xFAcar", "huevos", "aceite", "an\xEDs"],
      description: "Las rosquillas son un dulce t\xEDpico de la gastronom\xEDa espa\xF1ola, especialmente popular en fiestas y celebraciones. Se trata de peque\xF1os aros de masa dulce frita o horneada, a menudo aromatizados con ingredientes como an\xEDs, lim\xF3n o naranja, y cubiertos con az\xFAcar. Son un manjar delicioso y muy apreciado en la reposter\xEDa espa\xF1ola."
    },
    {
      id: "galianos",
      name: "Galianos",
      urlImage: "/images/galianos-jaen.jpg",
      urlRecipe: "https://www.youtube.com/watch?v=wIIjbi0FLbw",
      ingredients: ["conejo", "perdiz", "cebolla", "aceite", "pimiento", "ajo", "tomate maduro", "laurel", "Tortas gazpacheras", "sal", "tomillo", "setas"],
      description: "Los gazpachos manchegos o galianos, son un plato campesino. Se empleaban carnes de caza, liebres, perdices, conejo o pollo, que se guisaban con productos de la huerta. Como gran curiosidad de este plato  es que se acompa\xF1an de las tostas o tortas cence\xF1as, un pan \xE1cimo que tiene gran protagonismo en esta receta."
    },
    {
      id: "embutidos",
      name: "Embutidos",
      urlImage: "/images/embutidos.jpg",
      urlRecipe: "https://www.youtube.com/watch?v=9PApBPRIfcg",
      ingredients: ["cerdo", "especias", "arroz", "cebolla", "otros"],
      description: "Los embutidos son alimentos elaborados a partir de carnes, generalmente de cerdo, que se someten a un proceso de picado, condimentaci\xF3n y embutido en tripas naturales o artificiales. Este proceso de conservaci\xF3n permite que los embutidos se puedan consumir durante un per\xEDodo de tiempo m\xE1s largo. En la gastronom\xEDa espa\xF1ola, los embutidos son muy variados y populares, e incluyen productos como el chorizo, el salchich\xF3n, la morcilla y el jam\xF3n, entre otros. Su sabor y textura var\xEDan seg\xFAn los ingredientes y las t\xE9cnicas de preparaci\xF3n utilizadas."
    }
    // Agrega más objetos para otros platos
  ];
  const recipe = recipes.find((recipe2) => recipe2.id === id);
  return renderTemplate`${renderComponent($$result, "DetailLayout", $$DetailLayout, { "title": "Recetas", "data-astro-cid-qajb4ca6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="recipes-section" data-astro-cid-qajb4ca6> <div class="image-container" data-astro-cid-qajb4ca6> <img${addAttribute(recipe.urlImage, "src")} alt="migas ruleras" width="220" height="180" data-astro-cid-qajb4ca6${addAttribute(renderTransition($$result2, "parcngvi", "", recipe.name), "data-astro-transition-scope")}> </div> <div class="recipe-content" data-astro-cid-qajb4ca6> <h1 data-astro-cid-qajb4ca6>${recipe.name}</h1> <h4 data-astro-cid-qajb4ca6>Ingredientes</h4> <ul class="ingredients" data-astro-cid-qajb4ca6> ${recipe.ingredients.map((ingredient) => renderTemplate`<li data-astro-cid-qajb4ca6>${ingredient}</li>`)} </ul> <p data-astro-cid-qajb4ca6>${recipe.description}</p> <a${addAttribute(recipe.urlRecipe, "href")} target="_blank" title="Enlace a youtube" data-astro-cid-qajb4ca6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" data-astro-cid-qajb4ca6><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" data-astro-cid-qajb4ca6></path></svg></a> </div> </section> ` })} `;
}, "C:/Users/matem/Desktop/Huesa/src/pages/detalles/[id].astro", "self");

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/detalles/[id].astro";
const $$url = "/detalles/[id]";

export { $$id as default, $$file as file, $$url as url };
