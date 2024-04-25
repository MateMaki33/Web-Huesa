<template>
  <section aria-label="Carousel de imagenes de paisajes de la zona" class="paisajes-section" id="entorno">
    <div class="carousel">
      <button class="carousel-button prev" data-carousel-button="prev" @click="navigateCarousel(-1)">
        &#8656;
      </button>
      <button class="carousel-button next" data-carousel-button="next" @click="navigateCarousel(1)">
        &#8658;
      </button>

      <ul data-slides v-for="(item, index) in images" :key="index">
        <li :class="{'slide': true, 'is-active': index === activeIndex }" >
            <div class="image-container" :style="{ backgroundImage: 'url(' + item.url + ')', backgroundSize: 'cover', backgroundPositionY:'center' }">
            </div>        
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue';

// ADD IMAGES TO CAROUSEL

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

</script>


<style scoped>

.paisajes-section{
  min-width: 100vw;
}

.carousel{
        width: 50vw;
        height: 30vw;
        position: relative;
        margin: auto;
        transition: all .5s;

        @media (max-width: 768px){
            width: 100vw;
            height: 40vh;
        }
    }
    .carousel > ul{
        margin: 0;
        padding: 0;
        list-style: none;
        min-width: 100vw;

    }

    .slide{
        position: absolute;
        inset:0;
        transform: translateX(-200%) skewX(45deg);
        transition: all 1s;
    }

    .image-container{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 5px solid black;
        box-shadow: var(--shadow-olive);
        
    }
    
    .is-active{
        transform: translateX(0%);
    }

    .carousel-button{
        position: absolute;
        background: none;
        border: none;
        font-size: 4vw;
        top:50%;
        transform: translateY(-50%);
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
        border-radius: 20px;
        padding: 0.5rem;
        background-color: rgba(0, 0, 0, .5);
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
   color: purple;
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