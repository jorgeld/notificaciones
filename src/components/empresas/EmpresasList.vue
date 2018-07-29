<template>
<div>
  <nav class="navbar">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Empresas</li>
        <li class="breadcrumb-item active" aria-current="page">Listado</li>
      </ol>
    </nav>

    <div style="display: flex">
      <button class="btn btn-secondary" style="margin-right: 8px"><i class="fas fa-download"></i>Descargar fichero CSV</button>
      <button class="btn btn-secondary"><i class="fas fa-plus"></i>Añadir nueva empresa</button>
    </div>
  </nav>
</div>

</template>

<script>
  export default {
    name: 'EmpresasList',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
nav{
  background-color: #e2e4e6;
  color:#00000040;
}

.breadcrumb{
  margin: 0;
  background-color: transparent;
}
</style>
