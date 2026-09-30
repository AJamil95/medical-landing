<template>
  <header class="header">
    <div class="navbar-container">

      <div class="navbar-title">
        AQUI el logo
      </div>

      <nav class="navbar-menu">
        <ul class="navbar-desktop">
          <li class="navbar-item">
            <a href="#" class="navbar-btn">
              Boton 1
            </a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-btn">
              Boton 2
            </a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-btn">
              Boton 3
            </a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-btn">
              Boton 4
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </header>
</template>

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

  padding-inline: 16px;
}

.navbar-title {
  flex-shrink: 0;
  font-size: 1.25rem;
  white-space: nowrap;
}

.navbar-desktop {
  display: flex;
  align-items: center;
  gap: 4px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.navbar-btn {
  display: flex;
  align-items: center;

  height: 36px;
  padding-inline: 16px;

  color: var(--color-primary);
  background-color: greenyellow;

  text-decoration: none;
  font-size: 1rem;
}
</style>