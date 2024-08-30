<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';


const isMenuActive = ref(false);
const currentSlide = ref(1);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

const dados = reactive({
  nome: '',
  email: '',
  cpf: '',

})

function validacaosenha() {
  if (dados.nome == '' || dados.email == '' || dados.cpf == '') {

    alert("Existem campos vazios")

  }

}



</script>

<template>

  <header>
    <nav class="navbar">
      <router-link class="nav-link" to="/">
        <h1 class="logo">LOGO.</h1>
      </router-link>

      <ul :class="['nav-menu', { active: isMenuActive }]">
        <li class="nav-item">
          <router-link to="/categorias" class="nav-link">PEÇAS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/eventos" class="nav-link">CLIENTES</router-link>
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


    </nav>
  </header>


  <div class="container">
    <div style="color: white;" class="formulario">
      <h1>CLIENTES</h1>
      <div class="column">
        <label for="">Nome:</label>
        <input type="text" v-model="dados.nome">
      </div>
      <div class="column">
        <label for="">Email:</label>
        <input type="email" v-model="dados.email">
      </div>
      <div class="column">
        <label for="">CPF:</label>
        <input type="text" v-model="dados.cpf">
      </div>

      <button @click="validacaosenha" class="btn">CADASTRAR</button>
    </div>
  </div>


</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

.nav-item {
  list-style: none;
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
