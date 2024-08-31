<script setup>
import { reactive } from 'vue'

const dados = reactive({
  nome: '',
  cpf: '',
  telefone: '',
  cep: '',
  nascimento: '',
  genero: '',
})

function AtivarButton () {
    if (dados.nome == '' || dados.cpf == '' || dados.telefone == '' || dados.cep == '' || dados.nascimento == '' || dados.genero == '') {
        alert("Existe campos vazios!")
    }

    else {
        alert("Cliente Cadastrado!")


        dados.nome = ''
        dados.cpf = ''
        dados.telefone = ''
        dados.cep = ''
        dados.nascimento = ''
        dados.genero = ''

    }
}



</script>

<template>


    <div class="container">
        <div class="formulario">
            <h1>CLIENTES</h1>

            <div class="column">
                <input style="margin-top: 30px;" type="text" v-model="dados.nome" placeholder="Nome" />
            </div>
            <div class="column">
                <input type="text" v-model="dados.cpf" placeholder="Cpf">
            </div>
            <div class="column">
                <input type="text" v-model="dados.telefone" placeholder="Telefone">
            </div>
            <div class="column">
                <input type="text" v-model="dados.cep" placeholder="Cep">
            </div>
            <div class="column">
                <input type="date" v-model="dados.nascimento" placeholder="Nascimento">
            </div>
            <div class="column">
                

        <select class="form-select" v-model="dados.genero" placeholder="Genero">
          
        

        <option value="m">Masculino</option>
        <option value="f">Feminino</option>

        </select>
            </div>
            <button @click="AtivarButton">CADASTRAR</button>
        </div>
    </div>

</template>

<style scoped>
.formulario {
    background-color: #000;
    border-radius: 10px;
    padding: 40px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
}

.column {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

input, select {
  background-color: rgb(41, 41, 41);
  color: white;
  width: 400px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: none;
  
}

h1 {
    color: white;
}

input:hover {
    background-color: rgb(27, 24, 24);
    color: white;
    border: none;
}

button {
  background-color: #2a5239;
  border: none;
  height: 40px;
  width: 30vh;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}

button:hover {
  background-color: #2d6d45;
}
</style>