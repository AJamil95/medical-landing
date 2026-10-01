<template>
  <header class="header" :class="{ 'header-open': menuOpen }">
    <div class="navbar-container">

      <div class="navbar-title">
        <img class="navbar-logo" src="/medical-logo.png" alt="medical-logo">
      </div>


      <nav class="navbar-menu" :class="{ 'navbar-mobile-open': menuOpen }">

        <button
          class="navbar-toggle"
          @click="menuOpen = !menuOpen"
          :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      
        <ul class="navbar-desktop">
          <li v-for="menuItem in menuNavBar" :key="menuItem.key" class="navbar-item">
            <a :href="`#${menuItem.target}`" class="navbar-btn" @click="menuOpen = false">
              {{ menuItem.label }}
            </a>
          </li> 
        </ul>
      </nav>

    </div>
  </header>
</template>

<script setup lang="ts">
  import { menuNavBar } from '~/constants/menu';
  const menuOpen = ref(false)

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(12px);
  background-color: transparent;
}

.navbar-container {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 64px;
}

.navbar-title {
  flex-shrink: 0;
  font-size: 1.25rem;
  white-space: nowrap;
}

.navbar-logo {
  width: auto;
  height: 44px;
  object-fit: contain;
  display: block;
}

.navbar-toggle {
  display: none;
}

.navbar-desktop {
  display: flex;
  align-items: center;
  gap: 4px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.navbar-item{
  border-radius: 5px;
}

.navbar-item:hover{
  background-color: var(--color-background);
}

.navbar-btn {
  display: flex;
  align-items: center;

  height: 36px;
  padding-inline: 16px;

  color: var(--color-text);

  text-decoration: none;
  font-size: 1rem;
}


@media (max-width: 768px) {
  .navbar-container {
    padding: 0 8px 0 14px;
    /* backdrop-filter: blur(14px); */
  }

  .navbar-logo {
    height: 40px;
  }

  .navbar-toggle {
    display: grid;
    place-content: center;
    gap: 4px;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(78, 188, 75, 0.2);
    border-radius: 10px;
    background: #f0faef;
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }

  .navbar-toggle span {
    display: block;
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background: var(--color-primary-dark);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .header-open .navbar-toggle {
    background: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }

  .header-open .navbar-toggle span {
    background: var(--color-white);
  }

  .header-open .navbar-toggle span:first-child {
    transform: translateY(6px) rotate(45deg);
  }

  .header-open .navbar-toggle span:nth-child(2) {
    opacity: 0;
  }

  .header-open .navbar-toggle span:last-child {
    transform: translateY(-6px) rotate(-45deg);
  }

  .navbar-menu {
    position: relative;
  }

  .navbar-desktop {
    display: none;
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: min(260px, calc(100vw - 28px));
    gap: 2px;
    padding: 8px;
    border: 1px solid rgba(58, 63, 92, 0.09);
    border-radius: 14px;
    box-shadow: 0 18px 36px rgba(40, 50, 70, 0.13);
    background: rgba(255, 255, 255, 0.85);
    /* box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); */
    /* background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%,rgba(255,255,255,0.08) 100%); */
  }

  .navbar-menu.navbar-mobile-open .navbar-desktop {
    display: flex;
    flex-direction: column;
    animation: menu-in 0.2s ease both;
  }

  .navbar-item,
  .navbar-btn {
    width: 100%;
  }

  .navbar-btn {
    justify-content: space-between;
    height: 44px;
    padding: 0 12px;
    border-radius: 8px;
    color: var(--color-text);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .navbar-btn::after {
    color: var(--color-primary-dark);
    content: "↗";
    font-size: 0.9rem;
    opacity: 0.55;
  }

  .navbar-btn:hover,
  .navbar-btn:focus-visible {
    background: #edf9ee;
    outline: none;
  }

  .navbar-btn:hover::after,
  .navbar-btn:focus-visible::after {
    opacity: 1;
  }

  .navbar-active {
    justify-content: center;
    margin: 6px 0 0;
    background: var(--color-primary-dark);
    color: var(--color-white);
  }

  .navbar-active::after {
    display: none;
  }

  .navbar-active:hover,
  .navbar-active:focus-visible {
    background: #3ea73b;
    color: var(--color-white);
  }

  @keyframes menu-in {
    from { opacity: 0; transform: translateY(-6px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
}


</style>