<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Contactos Notificables</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!--<li class="nav-item active">-->
          <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
        <!--</li>-->
        <li class="nav-item">
          <a class="nav-link" href="#/contactos">Contactos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/empresas">Empresas</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'cnmc-menu',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  nav.navbar.navbar-expand-lg{
    background-color: transparent;
    color: white;
  }


  .navbar-brand{
    transition:all 0.2s ease-in-out;
    color:white;
  }

  .navbar-brand:hover{
    color: #d4d4d4;
  }

  a.nav-link{
    transition:all 0.2s ease-in-out;
    color: white;
  }

  a.nav-link:hover{
    color: #d4d4d4;
  }

</style>
