<template>
  <div class="circular-nav-wrapper">
    <nav class="circular-menu">
      <img :src="imageSrc" alt="Circular Nav Icon">
      <slot></slot>
    </nav>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { imageSrc } = defineProps({
  imageSrc: String
});
</script>

<style>
@media (min-width: 768px) {
  .circular-nav-wrapper {
    display: grid;
    max-width: fit-content;
    aspect-ratio: 1;
    place-content: center;
  }

  .circular-menu {
    position: relative;
    display: grid;
    place-content: center;
    background-color: #cd3e3d;
    min-width: 5rem;
    aspect-ratio: 1;
    border-radius: 5em;
    margin: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    cursor: pointer;
    border: 1em solid hsla(0, 0%, 0%, 0.6);
  }

  .circular-menu ul {
    list-style: none;
    position: absolute;
    padding: 0;
    transform: rotate(180deg);
    top: 2.5em;
    left: 2.5em;
    transition: 1s all;
  }

  .circular-menu li {
    width: auto;
    padding: 0.5em;
    text-align: center;
    border-radius: 20px;
    transition: all 1s;
    background: hsla(0, 0%, 0%, 0.6);;
    visibility: hidden;
  }

  .circular-menu:hover li {
    visibility:visible;
  }

  .circular-menu ul::before {
    position: absolute;
    content: "";
    border-width: 2em;
    border-radius: 50%;
    border-style: solid;
    border-color: rgba(0,0,0,1);
    z-index: -1;
    top: -1rem;
    left: -1rem;
    opacity: 0;  
    cursor: pointer;
    
  }

  .circular-menu:hover ul {
    transform: rotate(360deg);
    top: 0;
    left: 0;
  }

  .circular-menu li:hover {
    background: #cd3e3d;
    z-index: 100;
  }

  .circular-menu li:nth-of-type(1) {
    transform: rotate(-90deg);
    position: absolute;
    left: -1.2em;
    top: -4.2em;
  }

  .circular-menu li:nth-of-type(2) {
    transform: rotate(-45deg);
    position: absolute;
    left: 2em;
    top: -3em;
  }

  .circular-menu li:nth-of-type(3) {
    position: absolute;
    left: 3.4em;
    top: 0.3em;
  }

  .circular-menu li:nth-of-type(4) {
    transform: rotate(45deg);
    position: absolute;
    left: 2em;
    top: 3.7em;
  }

  .circular-menu li:nth-of-type(5) {
    transform: rotate(90deg);
    position: absolute;
    left: -1.2em;
    top: 5em;
  }

  .circular-menu ul li a {
    color: #ffffff;
  }
}

.circular-nav-wrapper{
  margin-top: 50px;
}
.circular-menu a {
    color: white;
    text-decoration: none;
  }
  .circular-menu ul li {
    margin-top: 5px;
  }
</style>
