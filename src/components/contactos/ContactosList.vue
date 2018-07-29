<template>
<div>
  <nav class="navbar">

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Contactos</li>
        <li class="breadcrumb-item active" aria-current="page">Listado</li>
      </ol>
    </nav>

    <div style="display: flex">
      <button class="btn btn-secondary" style="margin-right: 8px"><i class="fas fa-download"></i>Descargar fichero CSV</button>
      <button class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal2"><i class="fas fa-plus"></i>Añadir nuevo contacto</button>
    </div>

  </nav>

  <div class="container">

    <div class="row">
      <div class="col-md-7">
        <input class="form-control form-control-lg" type="text" placeholder="Búsqueda de contacto" v-model="buscador">
      </div>
      <div class="col-md-5 botonera">
        <select class="form-control form-control-lg" v-model="buscadorEmpresa">
          <option value=""> - Seleccione una Empresa - </option>
          <option value="Acme Subsidiaria"> Acme Subsidiaria </option>
          <option value="Autoridad Competencia Mercados Españoles"> Autoridad Competencia Mercados Españoles </option>
          <option value="Empresa ejemplo"> Empresa ejemplo </option>
        </select>
      </div>
    </div>

    <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="showAlerta">
      Contacto guardado correctamente
      <button type="button" class="close" v-on:click="showAlerta=false" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="contactosFiltrados.length === 0">
      No se han encontrado elementos con los parámetros actuales.
      <button type="button" class="close" v-on:click="showAlerta=false" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <table class="table table-light table-borderless table-striped" v-if="contactosFiltrados.length > 0">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Empresa</th>
        <th scope="col">Contacto</th>
        <th scope="col">Email</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Fecha alta</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="contacto in contactosFiltrados">
        <td>
          <i v-if="contacto.estado === 'verificado'" class="fas fa-check"></i>
          <i v-if="contacto.estado === 'pendiente'" class="fas fa-clock"></i>
          <i v-if="contacto.estado === 'denegado'" class="fas fa-times"></i>
        </td>
        <td>{{contacto.empresa.nombre}}<br><string>{{contacto.empresa.nifEmpresa}}</string></td>
        <td>{{contacto.nombre + ' ' +contacto.apellido1 + ' ' + contacto.apellido2}}<br><string>{{contacto.nif}}</string></td>
        <td>{{contacto.email}}</td>
        <td>{{contacto.telefono}}</td>
        <td>{{contacto.fechaAlta}}</td>
        <td v-on:click="contactoSeleccionado = contacto">
          <i class="fas fa-search" data-toggle="modal" data-target="#exampleModal"></i>
        </td>
      </tr>
      </tbody>
    </table>

    <div style="display: flex; justify-content: center" v-show="contactosFiltrados.length > 0">
      <nav class="paginador" aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
  

  <!-- Modal -->
  <editor-contacto :contacto="contactoSeleccionado" v-on:alerta="showAlert"></editor-contacto>
  <!-- Modal Creación -->
  <nuevo-contacto v-on:alerta="showAlert"></nuevo-contacto>


</div>

</template>

<script>
  import EditorContacto from "./EdiciónContacto";
  import NuevoContacto from "./NuevoContacto";

  export default {
    components: {
      NuevoContacto,
      EditorContacto},
    name: 'ContactosList',
    data () {
      return {
        contactosList : [
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'verificado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'verificado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Beatriz',
            apellido1:'Moreno',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'verificado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'verificado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'pendiente',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'denegado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },
          {
            empresa:{nombre:'Autoridad Competencia Mercados Españoles',nifEmpresa:'11B'},
            nombre:'Daniel',
            apellido1:'Santiago',
            apellido2:'Gómez',
            nif:'56365447C',
            email:'cnmc@gmail.com, cnmc@testtest.com',
            telefono:'91658745 ,94564554',
            fechaAlta:'10/02/2016',
            estado:'verificado',
            idContacto:90,
            uuid:'cbzd-asdf-sdafasdf-dasfdsfa-afsdf'
          },

        ],
        contactoSeleccionado : {},
        showAlerta : false,
        buscador:'',
        buscadorEmpresa:''
      }
    },
    methods :{
      showAlert : function(msg){
        this.showAlerta = msg;
        return this.showAlerta
      }
    },
    filters:{
    },

    computed : {
      contactosFiltrados: function () {
        return this.contactosList.filter((item) => {
          if(item.empresa.nombre.indexOf(this.buscador) !== -1
            || item.empresa.nifEmpresa.indexOf(this.buscador) !== -1
            || item.nombre.indexOf(this.buscador) !== -1
            || item.apellido1.indexOf(this.buscador) !== -1
            || item.apellido2.indexOf(this.buscador) !== -1
            || item.email.indexOf(this.buscador) !== -1
            || item.telefono.indexOf(this.buscador) !== -1
            || item.fechaAlta.indexOf(this.buscador) !== -1
          ){
            return item
          }})
        //}
        //item.empresa.nombre.includes(this.buscador));
      }
    },
    mounted(){},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  nav{
    background-color: #e2e4e6;
    color:#00000040;
  }

  table th{
    background-color: #e2e4e6;
  }

  table{
    margin: 0;
    /*color: white;*/
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 5px 5px 11px #1f1f1f66;
  }

  i{
    cursor: pointer;
  }

  input.form-control.form-control-lg{
    margin:16px 0 16px 0
  }

  div button i{
    margin-right: 16px;
  }

  .botonera{
    display: flex;
    align-items: center;
    justify-content: flex-end
  }

  .breadcrumb{
    margin: 0;
    background-color: transparent;
  }

  nav.paginador{
    background-color: transparent;
  }

  nav.paginador ul.pagination li.page-item a.page-link{
    background-color: #35495E;
    color: white;
  }

</style>
