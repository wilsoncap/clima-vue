<script setup>
  import Formulario from './components/Formulario.vue';
  import Clima from './components/Clima.vue';
  import Spinner from './components/Spinner.vue';
  import useClima from './composables/useClima';

  const { obtenerClima, clima, mostrarClima, cargando } = useClima();

  console.log(import.meta.env);
</script>

<template>
<h1 class="titulo">Buscador Clima</h1>

<div class="contenedor buscador-clima">
  <Formulario 
    @obtener-clima="obtenerClima"
  />  

  <Spinner v-if="cargando" /> 
  <Clima
    v-if="mostrarClima"
    :clima="clima"
  />

</div>


</template>

<style scoped>

</style>
