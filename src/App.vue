<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);

function toggleMenu() {

  isMenuActive.value = !isMenuActive.value;
  
}
</script>

<template>

  <header>
    <nav class="navbar">
      <router-link class="nav-link" to="/"><h1 class="logo">LOGO.</h1></router-link>

      <ul :class="['nav-menu', { active: isMenuActive }]">
      <li class="nav-item">
          <router-link to="/categorias" class="nav-link">CATEGORIAS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/eventos" class="nav-link">EVENTOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sobre" class="nav-link">SOBRE</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contato" class="nav-link">CONTATO</router-link>
        </li>
    </ul>

    <div class="hamburguer" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>

      
    
    </div>
    
    <button class="btn">LOGIN</button>
    </nav>
  </header>

</template>

<style scoped>

header {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

.nav-item {
  list-style: none;
}

.navbar {
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 34px;
  min-height: 70px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.logo {
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  
}

.nav-link {
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  
}

.nav-link:hover {
  color: rgb(197, 169, 135);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.hamburguer {
  cursor: pointer;
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  border-radius: 2px;
  margin: 5px auto;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .hamburguer {
    display: block;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 60px;
    gap: 0;
    background-color: rgb(0, 0, 0);
    text-align: center;
    flex-direction: column;
    width: 100%;
    transition: 0.3s;
    
  }

  .nav-item {
    margin: 16px 0;
  }
  .nav-menu.active {
    left: 0;
  }

}

.btn {
  background-color: rgb(65, 65, 65);
  padding: 7px;
  border: none;
  border-radius: 7px;
  transition: 0.3s;
  color: white;
  width: 100px;
}
.btn:hover {
  background-color: rgb(131, 131, 131);
}
</style>
