<script setup>
import { reactive } from 'vue'

const dados = reactive({
  valor: '',
  data: '',
  cliente: '',
  fornecedor: '',
  produto: '',
})

function AtivarButton () {
    if (dados.valor == '' || dados.data == '' || dados.cliente == '' || dados.fornecedor == '' || dados.produto == '') {
        alert("Existem Campos Vazios!")
    }
    

    else {

        alert("Peça Cadastrada!")


        dados.valor = ''
        dados.data = ''
        dados.cliente = ''
        dados.fornecedor = ''
        dados.produto = ''
   

    }}




</script>

<template>


    <div class="container">
        <div class="formulario">
            <h1>PEÇAS USADAS</h1>

            <div class="column">
                <input style="margin-top: 30px;" type="text" v-model="dados.valor" placeholder="Valor" />
            </div>
            <div class="column">
                <input type="date" v-model="dados.data">
            </div>
            <div class="column">
                <input type="text" v-model="dados.cliente" placeholder="Cliente">
            </div>
            <div class="column">
                <input type="text" v-model="dados.fornecedor" placeholder="Fornecedor">
            </div>
            <div class="column">
                <input type="text" v-model="dados.produto" placeholder="Produto">
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