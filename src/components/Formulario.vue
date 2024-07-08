<script setup>
     const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]
</script>


<template>
      <form 
  class="formulario"
  >
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input 
            type="text"
            id="ciudad"
            placeholder="ciudad"
        >
    </div>

    <div class="campo">
      <label for="pais">Ciudad</label>
      <select name="" id="pais">
          <option value="">-- Seleccione un pais --</option>
          <option v-for="pais in paises" :value="pais.codigo" :key="pais.codigo">{{ pais.nombre }}</option>
      </select>
    </div>

    <input type="submit" value="Consultar Clima">
  </form>
</template>


<style scoped>
</style>