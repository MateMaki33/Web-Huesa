import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_rT9NWpDx.mjs';
import 'kleur/colors';
import 'html-escaper';
import { _ as _export_sfc, a as $$Layout } from './404_yR3XJ1zS.mjs';
import { C as Cardvue } from './ayuntamiento_bV26DzQ5.mjs';
import { useSSRContext, mergeProps, onMounted, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
/* empty css                             */

const _sfc_main$1 = {
  __name: 'circularmenu',
  props: {
  imageSrc: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(mergeProps({ class: "circular-nav-wrapper" }, _attrs))
  }><nav class="circular-menu"><img${
    ssrRenderAttr("src", $props.imageSrc)
  } alt="Circular Nav Icon">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</nav></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/circularmenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Circularmenu = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

// Función para actualizar la visualización según la sección activa

const _sfc_main = {
  __name: 'servicescaroussel',
  setup(__props, { expose: __expose }) {
  __expose();

function actualizarVisualizacion(seccion) {
  const carousel = document.querySelector("[data-carousel]");
  const slides = carousel.querySelector("[data-slides]");
  
  const activeSlide = slides.querySelector("[data-active]");
  
  if (activeSlide) {
    activeSlide.removeAttribute('data-active');
  }

  const slideTarget = slides.querySelector(`[data-section="${seccion}"]`);
  if (slideTarget) {
    slideTarget.setAttribute('data-active', 'true');
  }
}

// Al navegar por primera vez al componente, generamos una cookie 
//con el objetivo de activar el slide del carousel correspondiente

function obtenerCookie(nombre) {
  const valor = `; ${document.cookie}`;
  const partes = valor.split(`; ${nombre}=`);
  if (partes.length === 2) return partes.pop().split(';').shift();
}

//función para manejar el cambio de sección a traves del nav
//es necesario porque como al establecer de nuevo la cookie el componente ya esta cargado
//y no se lee la cookie.

function handleSeccionCambiada(event) {
  const targetSection = event.detail;
  console.log("Sección cambiada:", targetSection);
  
  const carousel = document.querySelector("[data-carousel]");
  const slides = carousel.querySelector("[data-slides]");
  const activeSlide = slides.querySelector("[data-active]");
  
  if (activeSlide) {
    activeSlide.removeAttribute('data-active');
  }

  const slideTarget = slides.querySelector(`[data-section="${targetSection}"]`);
  if (slideTarget) {
    slideTarget.setAttribute('data-active', 'true');
  }
}


// Resto del código para manejar el carrusel de imágenes con los botones 
onMounted(() => {

  //A la ecucha del evento personalizado establecido en el Nav component para cambiar el slide
  document.addEventListener('cambioSeccion', handleSeccionCambiada);

  //Si la cookie existe actualizamos el slide activo segun el valor de la cookie
  const activeSection = obtenerCookie('activeSection');
  if (activeSection) {
    actualizarVisualizacion(activeSection);
  }
  const carousel = document.querySelector("[data-carousel]");
  const slides = carousel.querySelector("[data-slides]");
  const buttons = carousel.querySelectorAll("[data-carousel-button]");

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const activeSlide = slides.querySelector("[data-active]");
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;

      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      activeSlide.removeAttribute('data-active');
      slides.children[newIndex].setAttribute('data-active', 'true');
    });
  });
});

const __returned__ = { actualizarVisualizacion, obtenerCookie, handleSeccionCambiada, Cardvue, onMounted, Circularmenu };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ "aria-label": "Newest Photos" }, _attrs))} data-v-aab4d41d><div class="carousel" data-carousel data-v-aab4d41d><button class="carousel-button prev" data-carousel-button="prev" data-v-aab4d41d> ⇐ </button><button class="carousel-button next" data-carousel-button="next" data-v-aab4d41d> ⇒ </button><ul data-slides data-v-aab4d41d><li class="slide" data-active data-section="obras" data-v-aab4d41d>`);
  _push(ssrRenderComponent($setup["Cardvue"], {
    altText: 'imagen de una construcción',
    cardTitle: 'Obras',
    className: 'card-flex',
    image: '/images/bulldocer.jpg',
    "data-bg-color": 'dark'
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p style="${
          ssrRenderStyle({"font-size":"min(6vw, 3.5vh)"})
        }" data-v-aab4d41d${
          _scopeId
        }> Descarga toda la documentación referente a la <strong data-v-aab4d41d${
          _scopeId
        }>realización de obras</strong> en el siguiente icono. </p>`);
        _push(ssrRenderComponent($setup["Circularmenu"], {
          imageSrc: '../images/icons/construction_icon.svg',
          allText: 'icono de un albañil'
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<ul data-v-aab4d41d${
                _scopeId
              }><li data-v-aab4d41d${
                _scopeId
              }><a href="/documents/Solicitud_OMayor.pdf" download title=" Descarga Solicitud de Obra Mayor" data-v-aab4d41d${
                _scopeId
              }>Solicitud Obra Mayor</a></li><li data-v-aab4d41d${
                _scopeId
              }><a href="/documents/Dtos_Obra_Mayor.pdf" download title=" Descarga documentos necesarios Obra Mayor" data-v-aab4d41d${
                _scopeId
              }>Documentacion Obra</a></li><li data-v-aab4d41d${
                _scopeId
              }><a href="/documents/Dtos_Obra_Mayor_Agua.pdf" download title=" Descarga documentos necesarios Obra Mayor y agua" data-v-aab4d41d${
                _scopeId
              }>Documentacion Obra y Agua</a></li><li data-v-aab4d41d${
                _scopeId
              }><a href="/public/documents/Declaracion_responsable.pdf" download title=" Descarga declaracion responsable " data-v-aab4d41d${
                _scopeId
              }>Declaración responsable</a></li></ul>`);
            } else {
              return [
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/documents/Solicitud_OMayor.pdf",
                      download: "",
                      title: " Descarga Solicitud de Obra Mayor"
                    }, "Solicitud Obra Mayor")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/documents/Dtos_Obra_Mayor.pdf",
                      download: "",
                      title: " Descarga documentos necesarios Obra Mayor"
                    }, "Documentacion Obra")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/documents/Dtos_Obra_Mayor_Agua.pdf",
                      download: "",
                      title: " Descarga documentos necesarios Obra Mayor y agua"
                    }, "Documentacion Obra y Agua")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/public/documents/Declaracion_responsable.pdf",
                      download: "",
                      title: " Descarga declaracion responsable "
                    }, "Declaración responsable")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [
          createVNode("p", { style: {"font-size":"min(6vw, 3.5vh)"} }, [
            createTextVNode(" Descarga toda la documentación referente a la "),
            createVNode("strong", null, "realización de obras"),
            createTextVNode(" en el siguiente icono. ")
          ]),
          createVNode($setup["Circularmenu"], {
            imageSrc: '../images/icons/construction_icon.svg',
            allText: 'icono de un albañil'
          }, {
            default: withCtx(() => [
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/documents/Solicitud_OMayor.pdf",
                    download: "",
                    title: " Descarga Solicitud de Obra Mayor"
                  }, "Solicitud Obra Mayor")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/documents/Dtos_Obra_Mayor.pdf",
                    download: "",
                    title: " Descarga documentos necesarios Obra Mayor"
                  }, "Documentacion Obra")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/documents/Dtos_Obra_Mayor_Agua.pdf",
                    download: "",
                    title: " Descarga documentos necesarios Obra Mayor y agua"
                  }, "Documentacion Obra y Agua")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/public/documents/Declaracion_responsable.pdf",
                    download: "",
                    title: " Descarga declaracion responsable "
                  }, "Declaración responsable")
                ])
              ])
            ]),
            _: 1
          }, 8, ["imageSrc"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="slide" data-section="guarderia" data-v-aab4d41d>`);
  _push(ssrRenderComponent($setup["Cardvue"], {
    altText: 'niño pintando',
    cardTitle: 'Guarderia',
    className: 'card-flex',
    image: '/images/guarderia.jpg',
    "data-bg-color": 'dark'
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p style="${
          ssrRenderStyle({"font-size":"min(6vw, 3.5vh)"})
        }" data-v-aab4d41d${
          _scopeId
        }> Somos conscientes de la dificultad de <strong data-v-aab4d41d${
          _scopeId
        }>cuidar a nuestros pequeños</strong> durante las temporadas de cosecha, especialmente de aceituna. Por ello ponemos a tu disposición el servicio de <strong data-v-aab4d41d${
          _scopeId
        }>guardería</strong>. Descarga la documentación en el siguiente icono. </p>`);
        _push(ssrRenderComponent($setup["Circularmenu"], {
          imageSrc: '../images/icons/baby_icon.svg',
          allText: 'icono de un bebé'
        }, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<ul data-v-aab4d41d${
                _scopeId
              }><li data-v-aab4d41d${
                _scopeId
              }><a href="/documents/Solicit_Guard.pdf" download title=" Descarga Solicitud de Guarderia" data-v-aab4d41d${
                _scopeId
              }>Solicitud Guardería</a></li><li data-v-aab4d41d${
                _scopeId
              }><a href="/documents/Dtos_Guard.pdf" download title=" Descarga documentos necesarios guarderia" data-v-aab4d41d${
                _scopeId
              }>Documentacion Guardería</a></li></ul>`);
            } else {
              return [
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/documents/Solicit_Guard.pdf",
                      download: "",
                      title: " Descarga Solicitud de Guarderia"
                    }, "Solicitud Guardería")
                  ]),
                  createVNode("li", null, [
                    createVNode("a", {
                      href: "/documents/Dtos_Guard.pdf",
                      download: "",
                      title: " Descarga documentos necesarios guarderia"
                    }, "Documentacion Guardería")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [
          createVNode("p", { style: {"font-size":"min(6vw, 3.5vh)"} }, [
            createTextVNode(" Somos conscientes de la dificultad de "),
            createVNode("strong", null, "cuidar a nuestros pequeños"),
            createTextVNode(" durante las temporadas de cosecha, especialmente de aceituna. Por ello ponemos a tu disposición el servicio de "),
            createVNode("strong", null, "guardería"),
            createTextVNode(". Descarga la documentación en el siguiente icono. ")
          ]),
          createVNode($setup["Circularmenu"], {
            imageSrc: '../images/icons/baby_icon.svg',
            allText: 'icono de un bebé'
          }, {
            default: withCtx(() => [
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/documents/Solicit_Guard.pdf",
                    download: "",
                    title: " Descarga Solicitud de Guarderia"
                  }, "Solicitud Guardería")
                ]),
                createVNode("li", null, [
                  createVNode("a", {
                    href: "/documents/Dtos_Guard.pdf",
                    download: "",
                    title: " Descarga documentos necesarios guarderia"
                  }, "Documentacion Guardería")
                ])
              ])
            ]),
            _: 1
          }, 8, ["imageSrc"])
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="slide" data-section="catastro" data-v-aab4d41d>`);
  _push(ssrRenderComponent($setup["Cardvue"], {
    altText: 'maqueta 3d casa',
    cardTitle: 'Catastro',
    className: 'card-flex',
    image: '/images/catastro.jpg',
    "data-bg-color": 'dark'
  }, {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p style="${
          ssrRenderStyle({"font-size":"min(6vw, 3.5vh)"})
        }" data-v-aab4d41d${
          _scopeId
        }> Ponemos a tu disposición el enlace a los procedimientos y trámites relacionados con el Catastro a traves de la página <cite data-v-aab4d41d${
          _scopeId
        }>www.catastro.meh.es</cite></p><a class="button" href="https://www.catastro.meh.es/esp/procedimientos_tramites.asp" title="Enlace externo a www.catastro.meh" target="_blank" data-v-aab4d41d${
          _scopeId
        }>Catastro</a>`);
      } else {
        return [
          createVNode("p", { style: {"font-size":"min(6vw, 3.5vh)"} }, [
            createTextVNode(" Ponemos a tu disposición el enlace a los procedimientos y trámites relacionados con el Catastro a traves de la página "),
            createVNode("cite", null, "www.catastro.meh.es")
          ]),
          createVNode("a", {
            class: "button",
            href: "https://www.catastro.meh.es/esp/procedimientos_tramites.asp",
            title: "Enlace externo a www.catastro.meh",
            target: "_blank"
          }, "Catastro")
        ]
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/servicescaroussel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Carousel = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-aab4d41d"]]);

const $$Astro = createAstro("https://MateMaki33.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Carousel", Carousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/matem/Desktop/Huesa/src/components/servicescaroussel.vue", "client:component-export": "default" })} ` })}`;
}, "C:/Users/matem/Desktop/Huesa/src/pages/services.astro", void 0);

const $$file = "C:/Users/matem/Desktop/Huesa/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
