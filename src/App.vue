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
        <img src="./assets/img/457569511_519245327358183_5621102455325433523_n.jpg" alt="" class="logo">
      </router-link>

      <ul :class="['nav-menu', { active: isMenuActive }]">
        
        
        <li class="nav-item">
          <router-link to="/clientes" class="nav-link">CLIENTES</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/peças" class="nav-link">PEÇAS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orçamentos" class="nav-link">ORÇAMENTOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/serviços" class="nav-link">SERVIÇOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/peças-usadas" class="nav-link">PEÇAS USADAS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/relatorios" class="nav-link">RELATORIOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/principais-clientes" class="nav-link">PRINCIPAIS CLIENTES</router-link>
        </li>
      </ul>

      <div class="hamburguer" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>


    </nav>
  
    <main>
      <RouterView />
    </main>
  </header>

  





</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;


}

.nav-item {
    margin: 16px 0;
  }

  .nav-menu.active {
    left: 0;
  }

.navbar {
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 34px;
  min-height: 70px;

}

.logo {

  width: 120px;
  height: 30px

}

.nav-link {
  text-decoration: none;
  color: #fff;
  transition: 0.3s;

}

.nav-link:hover {
  color: #5e5d5d;
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
    transition: 0.5s
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
