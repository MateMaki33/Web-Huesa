<template>
     <section class="gastronomy" id="gastronomia">
    <div class="gastronomy-content">
      <h1>La gastonomía</h1>
      <h4>uno de nuestros fuertes</h4>
      <p></p>
      <div class="carousel-buttons">
        <button class="carousel-next">&#8249</button>
        <button class="carousel-back">&#8250</button>
      </div>
    </div>
    <div class="gastronomy-caroussel">
      <div class="gastronomy-coroussel-inner">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
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

</script>

<style>

.gastronomy-coroussel-inner {
    --degrees: 0deg;
    background-image: url("/images/tabla_madera.jpg");
    background-size: cover;
    background-position: center;    
    display: grid;
    min-width: max(50vw, 50vh);
    aspect-ratio: 1;
    border-radius: 50%;
    right: 0;
    transform: rotate(var(--degrees));
    transition: 1s;
    z-index: 100;

    img {
      max-width: max(14vw,18vh) ;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      transition: all .3s;
      box-shadow: 10px 10px 131px 32px rgba(0,0,0,1);

      &:hover {
        cursor: pointer;
        border-width: 4px;
        border-style: solid;
        border-color: white;
      }

    }
  }

  
  
  .gastronomy {
    
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: space-around;
    background-image: url("../../images/bread.jpg");
    background-size: cover;
    overflow: hidden;
    
  }

  .carousel-buttons {
    margin-top: 20px;
    display: flex;
    max-width: 30%;
    justify-content: center;
    gap: 1rem;
    visibility: hidden;

    & > button {
      width: 100%;
      height: fit-content;
      font-size: 2rem;
      color: white;
      background: none;
      transition: all 0.5s;

      &:hover {
        cursor: pointer;
        box-shadow: 10px 10px 131px 32px rgba(255,255,255,1);
      }
    }
  }
  .gastronomy-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 75%;
    color: white;
    font-size: 2em;
  }

  .gastronomy-caroussel {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  @media (max-width: 480px){
    .gastronomy{
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    }
</style>