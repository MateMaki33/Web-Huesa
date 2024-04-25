<template>
    <article :class="className">
      <div class="card-image">
        <figure>
          <img :src="image" class="image" :alt="altText">
          <figcaption v-if="captionImg">{{ captionImg }}</figcaption>
        </figure>
      </div>
      <div class="card-body">
        <h2>{{ cardTitle }}</h2>
        <slot></slot>
      </div>
    </article>
  </template>
  
  <script setup>
  
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    cardTitle: {
      type: String,
      required: true
    },
    captionImg: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>

  .card-flex-column-100 {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    height: fit-content;
    background: var(--gradient-olive);
    inset: 5% 0 0 7%;
    border-radius: 20px;
    box-shadow: var(--shadow-olive);

   
  }
  .card-flex-column-100 .image {
    max-height: min(50vh, 40vw);
  }
  
  .card-flex {
    padding: 1rem;
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    min-height: 100%;
    background: var(--gradient-olive);
    inset: 5% 0 0 7%;
    border-radius: 20px;
    box-shadow: 10px 10px 110px 12px rgba(173, 199, 6, 0.87);
  }
  
  .card-flex .image {
    max-height: min(50vh, 40vw);
  }
  
  @media (max-width: 768px) {
    .card-flex {
      flex-direction: column;
      justify-content: center;
      
    }
  
    .card-body {
      min-width: 100%;
      
    }
  }
  
  figure {
    display: flex;
    justify-content: center;
  }
  
  .image {
    max-width: 100%;
    filter: drop-shadow(5px 10px 4px rgb(360, 360, 360, 70%));
    border-radius: 20px;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    max-width: 30vw;
    color: white;
    font-size: min(4vw, 3vh);
    text-align: start;
  }
  
  .card-body h2 {
    font-family: 'Bebas Neue';
    font-size: max(3vw, 4vh);
  }
  
  figcaption {
    text-align: center;
  }
  </style>
  