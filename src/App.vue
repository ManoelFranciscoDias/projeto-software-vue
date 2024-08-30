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
      <router-link class="nav-link" to="/">
        <h1 class="logo">LOGO.</h1>
      </router-link>

      <ul :class="['nav-menu', { active: !isMenuActive }]">
        <li class="nav-item">
          <router-link to="/clientes" class="nav-link">CLIENTES</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/peças" class="nav-link">PEÇAS</router-link>
        </li>
      </ul>

      <div class="hamburguer" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>


    </nav>
  </header>





</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

.nav-item {
    margin: 16px 0;
  }

  .nav-menu.active {
    left: 0;
  }

.navbar {
  background-color: #0D0D0D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 34px;
  min-height: 70px;

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
  background-color: aqua;
  width: 300px;
}

.nav-menu {
  position: fixed;
    left: -100%;
    top: 70px;
    gap: 0;
    background-color: #262626;

    text-align: center;
    flex-direction: column;
    width: 20%;
    height: 100%;
    transition: 0.3s;
}

.hamburguer {
  display: block;
  
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


.formulario {
  background-color: #111111;
  border-radius: 10px;
  padding: 40px;
  width: 40%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}

.column {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  background-color: #2a5239;
  border: none;
  height: 40px;
  width: 30vh;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}

.btn:hover {
  background-color: #2d6d45;
}

input {
  background-color: rgb(41, 41, 41);
  color: white;
  width: 400px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: none;
}

input:hover {
  background-color: rgb(27, 24, 24);
  color: white;
  border: none;
}
</style>
