<script setup>
import { reactive } from 'vue'

const dados = reactive({
  numero: '',
  material: '',
  preco: '',
  biografia: '',
 

})

function AtivarButton () {
    if (isNaN(dados.numero) || dados.material == '' || dados.preco == '' || dados.biografia == '') {
        alert("Existe campos vazios!")
    }

    else {

        alert("Peça Cadastrada!")


        dados.numero = ''
        dados.material = ''
        dados.preco = ''
        dados.biografia = ''
   

    }
}



</script>

<template>


    <div class="container">
        <div class="formulario">
            <h1>PEÇAS</h1>

            <div class="column">
                <input style="margin-top: 30px;" type="number" v-model="dados.nome" placeholder="Numero" />
            </div>
            <div class="column">
                <input type="text" v-model="dados.material" placeholder="Material">
            </div>
            <div class="column">
                <input type="text" v-model="dados.preco" placeholder="Preço">
            </div>

            <div class="column">
                <textarea
          v-model="dados.biografia"
          name="biografia"
          id="biografia"
          cols="50"
          rows="15"
          placeholder="Descrição"
          required
        ></textarea>
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

textarea {
  background-color: rgb(41, 41, 41);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  width: 380px;
  height: 200px;
}

textarea:hover {
  background-color: rgb(27, 24, 24);
  color: white;
  border: none;
}
</style>