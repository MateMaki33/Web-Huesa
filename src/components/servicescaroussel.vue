<template>
  <section aria-label="Newest Photos">
    <div class="carousel" data-carousel>
      <button class="carousel-button prev" data-carousel-button="prev">
        &#8656;
      </button>
      <button class="carousel-button next" data-carousel-button="next">
        &#8658;
      </button>

      <ul data-slides>
        <li class="slide" data-active data-section="obras">
          <Cardvue 
          :altText="'imagen de una construcción'" 
          :cardTitle="'Obras'" 
          :className="'card-flex'"
          :image="'/images/bulldocer.jpg'"
          :data-bg-color="'dark'">
            <p style="font-size:min(6vw, 3.5vh)">
              Descarga toda la documentación referente a la
              <strong>realización de obras</strong> en el siguiente icono.
            </p>
            <Circularmenu :imageSrc="'../images/icons/construction_icon.svg'" :allText="'icono de un albañil'">
              <ul>
                <li><a href="/documents/Solicitud_OMayor.pdf" download title=" Descarga Solicitud de Obra Mayor">Solicitud Obra Mayor</a></li>
                <li><a href="/documents/Dtos_Obra_Mayor.pdf" download title=" Descarga documentos necesarios Obra Mayor">Documentacion Obra</a></li>
                <li><a href="/documents/Dtos_Obra_Mayor_Agua.pdf" download title=" Descarga documentos necesarios Obra Mayor y agua">Documentacion Obra y Agua</a></li>
                <li><a href="/public/documents/Declaracion_responsable.pdf" download title=" Descarga declaracion responsable ">Declaración responsable</a></li>
              </ul>
            </Circularmenu>
          </Cardvue>
        </li>

        <li class="slide" data-section="guarderia">
          <Cardvue 
          :altText="'niño pintando'" 
          :cardTitle="'Guarderia'" 
          :className="'card-flex'"
          :image="'/images/guarderia.jpg'"
          :data-bg-color="'dark'">
            <p style="font-size:min(6vw, 3.5vh)">
              Somos conscientes de la dificultad de
              <strong>cuidar a nuestros pequeños</strong> durante las temporadas
              de cosecha, especialmente de aceituna. Por ello ponemos a tu
              disposición el servicio de <strong>guardería</strong>. Descarga la
              documentación en el siguiente icono.
            </p>

            <Circularmenu :imageSrc="'../images/icons/baby_icon.svg'" :allText="'icono de un bebé'">
              <ul>
                <li><a href="/documents/Solicit_Guard.pdf" download title=" Descarga Solicitud de Guarderia">Solicitud Guardería</a></li>
                <li><a href="/documents/Dtos_Guard.pdf" download title=" Descarga documentos necesarios guarderia">Documentacion Guardería</a></li>
              </ul>
            </Circularmenu>
          </Cardvue>
        </li>

        <li class="slide" data-section="catastro">
          <Cardvue 
          :altText="'maqueta 3d casa'" 
          :cardTitle="'Catastro'" 
          :className="'card-flex'"
          :image="'/images/catastro.jpg'"
          :data-bg-color="'dark'">
            <p style="font-size:min(6vw, 3.5vh)">
              Ponemos a tu disposición el enlace a los procedimientos y trámites
              relacionados con el Catastro a traves de la página
              <cite>www.catastro.meh.es</cite>
            </p>
            <a class="button" href="https://www.catastro.meh.es/esp/procedimientos_tramites.asp"
              title="Enlace externo a www.catastro.meh" target="_blank">Catastro</a>
          </Cardvue>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import Cardvue from '../components/cardvue.vue'
import {onMounted} from 'vue';
import Circularmenu from './circularmenu.vue';

// Función para actualizar la visualización según la sección activa
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
</script>



<style scoped>

.carousel{
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    .carousel > ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .slide{
        position: absolute;
        inset:0;
        transform: translateX(-100%);
        transition: all 1s;
    }
    .slide[data-active]{
        transform: translateX(0%);
    }

    .carousel-button{
        position: absolute;
        background: none;
        border: none;
        font-size: 8vw;
        top:30%;
        transform: translateY(-50%);
        color: rgba(255, 255, 255, .5);
        cursor: pointer;
        border-radius: 20px;
        padding: 0.5rem;
        background-color: rgba(0, 0, 0, .1);
        z-index: 99999;

    }

    .carousel-button:hover,
    .carousel-button:focus{
       color: white;
       background-color: rgba(0, 0, 0, .2);
    }

    .carousel-button:focus{
        outline: 1px solid black;
    }

    .carousel-button.prev{
        left: 1rem;
    }
    .carousel-button.next{
        right: 1.5rem;
    }
    strong{
   color: rgb(193, 219, 132);
}

.button{
        text-decoration: none;
        padding: 1rem;
        color: white;
        background: hsla(0, 0%, 0%, 0.6);
        width: fit-content;
        border-radius: 20px;
        margin-top: 10px;
        transition: all .5s;

        
}
.button:hover{
        box-shadow:0px 5px 5px 0px rgba(255,255,255,1);
}
</style>
