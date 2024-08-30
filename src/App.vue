<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuActive = ref(false);
const currentSlide = ref(1);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function nextSlide() {
  currentSlide.value = currentSlide.value === 4 ? 1 : currentSlide.value + 1;
}

let slideInterval;

onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>

<template>

  <header>
    <nav class="navbar">
      <router-link class="nav-link" to="/">
        <h1 class="logo">LOGO.</h1>
      </router-link>

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


  <div class="slider">
    <div class="slides">
      <!--radios-->
      <input type="radio" name="radio-btn" id="radio1" v-model="currentSlide" value="1">
      <input type="radio" name="radio-btn" id="radio2" v-model="currentSlide" value="2">
      <input type="radio" name="radio-btn" id="radio3" v-model="currentSlide" value="3">
      <input type="radio" name="radio-btn" id="radio4" v-model="currentSlide" value="4">

      <!--imagens-->
      <div class="slide first">
        <img src="./assets/img/img-slide-1.jpg" alt="imagem1">
      </div>


      <div class="slide">
        <img src="./assets/img/img-slide-2.jpg" alt="imagem2">
      </div>


      <div class="slide">
        <img src="./assets/img/img-slide-3.jpg" alt="imagem3">
      </div>


      <div class="slide">
        <img src="./assets/img/img-slide-4.jpg" alt="imagem4">
      </div>

      <div class="navigation-auto">

        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
        <div class="auto-btn4"></div>

      </div>


        <div class="manual-navigation">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>



      </div>
    </div>
  

</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;

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

.slider {
  margin: 0 auto;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
}

.slides {
  width: 400%;
  height: 100%;
  display: flex;
  align-items: center;

}

.slides input {
  display: none;
}

.slide {
  width: 25%;
  position: relative;
  transition: 1s;
  height: 100%;
  object-fit: cover;
}

.slide img {
  width: 800px;

}

.manual-navigation {
  position: absolute;
  width: 100%;
  margin-top: 360px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 5px solid #ffffff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
}

.manual-btn:not(:last-child) {
  margin-right: 40px;
}

.manual-btn:hover {
  background-color: #fff;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -25%;
}

#radio3:checked ~ .first {
  margin-left: -50%;
}

#radio4:checked ~ .first {
  margin-left: -75%;
}

.navigation-auto div {
  border: 5px solid #20a6ff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.navigation-auto {
  position: absolute;
  width: 100%;
  margin-top: 360px;
  display: flex;
  justify-content: center;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background-color: #fff;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background-color: #fff;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background-color: #fff;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background-color: #fff;
}

</style>
