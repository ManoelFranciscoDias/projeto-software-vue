<script setup>


</script>

<template>


<div class="container">
    <div class="relatorio">
        <h1>RELATORIOS</h1>

        <p>Status dos Serviços: xxx</p>
        <p>Conversão de Orçamentos: xx</p>
        <p>Estoque de Peças: xxx</p>
        <p>Principais Serviços: xxx</p>
        <p>Margens de Faturamento: xxx</p>

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

.relatorio {
  background-color: #fff;
  width: 900%;
  max-width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  
}

.relatorio h1 {

  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.relatorio p {

  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 260px;
  transition: 0.3s;
}

p:hover {
    background-color: rgb(219, 219, 219);
    width: 100%;
    padding: 10px;
}

.relatorio:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

</style>