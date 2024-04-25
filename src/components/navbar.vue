<template>
  <header class="primary-header flex">
    <img class="logo" src="../../images/logo.png" alt="logo" />
    
    <button
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded="false"><span class="sr-only">Menu</span></button
    >
    <nav>
      <ul id="primary-navigation" data-visible="false" class="primary-navigation">
  
        
        <details class="dropdown-menu">
          <summary role="button">
            <a class="button">Inicio</a>
          </summary>
          <ul>
            <li><a href="/#presentacion" >Presentacion </a></li>
            <li><a href="/#estadisticas">Estadisticas</a></li>
          </ul>
        </details>
  
        <details class="dropdown-menu">
          <summary role="button">
            <a class="button">Ayuntamiento</a>
          </summary>
          <ul>
            <li><a href="/ayuntamiento">Alcalde</a></li>
            <li><a href="/ayuntamiento/#concejalias-wrapper">Concejalías</a></li>
            <li><a href="/ayuntamiento/#womens-information">CMIM</a></li>
            <li><a href="/ayuntamiento/#social-services">Servicios Sociales</a></li>
          </ul>
        </details>
  
        <details class="dropdown-menu">
          <summary role="button">
            <a class="button">Servicios</a>
          </summary>
          <ul>
            <li ><a href="/services/#constructions-wrapper" class="nav-link" data-section="obras">Obras</a></li>
            <li ><a href="/services/#catastro" class="nav-link" data-section="catastro">Catastro</a></li>
            <li ><a href="/services/#guarderia" class="nav-link" data-section="guarderia">Guardería</a></li>
            <li><a href="https://huesa.sedelectronica.es/info.0" target="_blank" title="Enlace externo a www.catastro.meh">Sede Electronica</a></li>
          </ul>
        </details>
  
        <details class="dropdown-menu">
          <summary role="button">
            <a class="button">Municipio</a>
          </summary>
          <ul>
            <li><a href="/municipio/#gastronomia">Gastronomía</a></li>
            <li><a href="/municipio/#entorno">Entorno</a></li>
            <li><a href="/municipio/#locales">Locales</a></li>
          </ul>
        </details>
  
        <div class="icons-nav-bar flex">
          <a href="/contact" title="enlace a contacto"><img class="nav-icons" src="../../images/icons/telephone.svg" alt="icono telefono"/></a>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .logo {
    margin: 2rem;
  }

  .primary-header {
    position: fixed;
    align-items: center;
    justify-content: space-between;
    z-index: 9998;
    width: 100%;
    height: 10vh;
    background: hsla(0, 0%, 0%, 0.3);
    backdrop-filter: blur(1rem);
  }

  .primary-navigation {
    list-style: none;
    padding-inline: 1rem;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1rem;
  }
  .primary-navigation a {
    text-decoration: none;
    color: white;
  }
 

  .mobile-nav-toggle {
    display: none;
  }

  .flex {
    display: flex;
    gap: var(--gap, 2rem);
  }

  .sr-only {
    visibility: hidden;
  }

  a.button {
    display: inline-block;
    padding: 1rem;
    border-radius: 50px;
    box-sizing: border-box;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }

  a.button::after
  {
    position: absolute;
    content: "";
    inset: 70% 0 0 0;
    width: 0%;
    height: 5px;
    border-radius: 20px;
    background: var(--gradient-purple);
    transition: width .2s ease-in; 
  }

  a.button:hover::after{
    width: 100%;
  }
  .dropdown-menu {
    position: relative;
    padding: 0.5rem;
    width: 100%;
    color: white;
  }

  .dropdown-menu summary {
    list-style: none;
    list-style-type: none;
  
}

.dropdown-menu > summary::-webkit-details-marker {
  display: none;
}

.dropdown-menu ul {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap:1rem;
  padding: .5rem;
  box-sizing: border-box;
  width: calc(100% + 2rem);
  z-index: 2;
  border-radius: 6px;
  list-style: none;
  background: var(--dark-background);
  
}

.dropdown-menu ul li:hover{
    background: #5a3119;
}



.dropdown-menu ul::before {
  content: ' ';
  position: absolute;
  top: -10px;
  left: 30%;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent var(--dark-background) transparent;
}

.dropdown-menu > summary::before {
  display: none;
}

.dropdown-menu[open] > summary::before {
    
    content: ' ';
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}




  @media (max-width: 45em) {
    .primary-navigation {
      display: flex;
      position: fixed;
      flex-direction: column;
      gap: 2rem;
      height: 100vh;
      inset: 0 0 0 30%;
      padding-block: 5rem;
      background: hsla(0, 0%, 0%, 0.7);
      backdrop-filter: blur(2rem);
      transform: translateX(100%);
      transition: 500ms;
    }

    .primary-navigation[data-visible="true"] {
      transform: translateX(0%);
    }

    .mobile-nav-toggle {
      position: absolute;
      display: block;
      z-index: 9999;
      background-image: url("/images/icons/hamburguer.svg");
      background-color: white;
      background-size: cover;
      border-radius: 50%;
      box-shadow: 1px 4px 10px 3px rgba(66, 68, 90, 1);
      border: none;
      width: 1.5rem;
      aspect-ratio: 1;
      top: 1rem;
      right: 2rem;
    }
    .mobile-nav-toggle[aria-expanded="true"] {
      background-image: url("/images/icons/close.svg");
    }

    .dropdown-menu ul::before{
        left: 10%;
    }
  }
</style>

<script setup>
import { onMounted } from 'vue';

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
</script>

