<script setup>


</script>

<template>


<div class="container">
    <div class="relatorio-clientes">
        <h1>PRINCIPAIS CLIENTES</h1>

        <UL>
            <LI>Manoel Dias</LI>
            <LI>Nicolas de Pinho</LI>
            <LI>Kaue Ian</LI>
            <LI>Matheus Gaspar</LI>
            <LI>Enrique Cardoso</LI>
            <LI>Higor do Amaral</LI>
            <LI>Rafael Pilger</LI>
            <LI>Lucas de Souza</LI>
        </UL>

    </div>
</div>
</template>

<style scoped>



.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.relatorio-clientes {
  background-color: #fff;
  width: 900%;
  max-width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  
}

.relatorio-clientes h1 {

  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.relatorio-clientes li {

  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 260px;
  list-style: none;
  transition: 0.3s;
}

li:hover {
    background-color: rgb(184, 184, 184);
    width: 100%;
    padding: 10px;

}

.relatorio-clientes:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

</style>