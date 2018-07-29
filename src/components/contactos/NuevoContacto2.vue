<template>
  <div>

    <!-- NAVEGADOR -->
    <nav class="navbar">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Contactos</li>
          <li class="breadcrumb-item"><a href="#/contactos">Listado contactos</a></li>
          <li class="breadcrumb-item active" aria-current="page">Nuevo</li>
        </ol>
      </nav>

      <div style="display: flex">
        <button class="btn btn-secondary" style="margin-right: 8px"><i class="fas fa-save"></i>Guardar nuevo contacto</button>
      </div>

    </nav>


    <div class="container">
      <!--NAVEGACIÓN TABS-->
      <nav style="margin-top: 16px; margin-bottom: 16px">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active"
             id="nav-home-tab3" data-toggle="tab" href="#nav-general3" role="tab" aria-controls="nav-general" aria-selected="true">Datos Generales</a>
          <a class="nav-item nav-link"
             id="nav-roles-tab3" data-toggle="tab" href="#nav-roles3" role="tab" aria-controls="nav-roles" aria-selected="false">Roles de contacto</a>
          <a class="nav-item nav-link"
             id="nav-notis-tab3" data-toggle="tab" href="#nav-notis3" role="tab" aria-controls="nav-notis" aria-selected="false">Recepción de notificaciones</a>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">

        <!-- TAB DATOS ROLES DE CONTACTO -->
        <div class="tab-pane fade show active" id="nav-general3" role="tabpanel" aria-labelledby="nav-general-tab3">
          <form class="was-validated">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputNombre">Nombre</label>
                <input type="text" required class="form-control" id="inputNombre" placeholder="Nombre" v-model="nuevoContacto.nombre">
                <div class="invalid-feedback">El campo 'nombre' es obligatorio</div>
              </div>
              <div class="form-group col-md-4">
                <label for="inputApellido1">Apellido 1</label>
                <input type="text" required class="form-control" id="inputApellido1" placeholder="Apellido 1" v-model="nuevoContacto.apellido1">
                <div class="invalid-feedback">El campo 'Apellido 1' es obligatorio</div>
              </div>
              <div class="form-group col-md-4">
                <label for="inputApellido2">Apellido 2</label>
                <input type="text" required class="form-control" id="inputApellido2" placeholder="Apellido 2" v-model="nuevoContacto.apellido12">
                <div class="invalid-feedback">El campo 'Apellido 2' es obligatorio</div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputNif">NIF</label>
                <input type="text" required class="form-control" id="inputNif" placeholder="NIF" v-model="nuevoContacto.nif">
                <div class="invalid-feedback">El campo 'NIF' es obligatorio</div>
              </div>
              <div class="form-group col-md-6">
                <label for="inputIdContacto">ID Contacto</label>
                <input type="text" required class="form-control" id="inputIdContacto" placeholder="ID Contacto" v-model="nuevoContacto.idContacto">
                <div class="invalid-feedback">El campo 'ID Contacto' es obligatorio</div>
              </div>
            </div>


            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputUUID">Empresa</label>
                <select required class="form-control form-control">
                  <option value=""> - Seleccione una Empresa - </option>
                  <option value="Acme Subsidiaria"> Acme Subsidiaria </option>
                  <option value="Autoridad Competencia Mercados Españoles"> Autoridad Competencia Mercados Españoles </option>
                  <option value="Empresa ejemplo"> Empresa ejemplo </option>
                </select>
                <div class="invalid-feedback">El campo 'Empresa' es obligatorio</div>
              </div>

              <div class="form-group col-md-6">
                <label for="inputUUID">UUID de la solicitud (Opcional)</label>
                <input type="text" class="form-control" id="inputUUID" placeholder="UUID de la solicitud (Opcional)" v-model="nuevoContacto.uuid">
              </div>


            </div>




            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputIdContacto">Teléfono</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Nuevo teléfono" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-plus"></i> Añadir Teléfono</button>
                  </div>
                </div>
              </div>

              <div class="form-group col-md-6">
                <label for="inputIdContacto">Correo Electrónico</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Nuevo correo electrónico" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-plus"></i> Añadir Correo Electrónico</button>
                  </div>
                </div>
              </div>

            </div>

            <hr>

            <!--ESTADO VERIFICACIÓN-->
            <div class="form-group col-md-12" style="padding:0">
              <label for="inputNombre">Estado de la verificación</label>
              <div style="display: flex;justify-content: space-evenly;">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" required>
                  <label class="form-check-label labelCheck" for="exampleRadios1">
                    <i class="fas fa-check"></i> Verificado
                  </label>
                  <div class="invalid-feedback">Es obligatorio seleccionar un estado de validación</div>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" required>
                  <label class="form-check-label labelCheck" for="exampleRadios2">
                    <i class="fas fa-clock"></i> Pendiente
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" required>
                  <label class="form-check-label labelCheck" for="exampleRadios3">
                    <i class="fas fa-times"></i> Denegado
                  </label>
                </div>
              </div>
            </div>

            <hr>

            <!-- DIRECCIÓN -->
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" type="button">
                      Dirección
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">

                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputNombre">Dirección</label>
                        <input type="text" class="form-control" id="inputDireccion" placeholder="Dirección">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputApellido1">Piso</label>
                        <input type="text" class="form-control" id="inputPiso" placeholder="Piso">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputApellido2">CP</label>
                        <input type="text" class="form-control" id="inputCP" placeholder="Código Postal">
                      </div>
                    </div>

                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputNombre">País</label>
                        <select class="form-control">
                          <option> - País - </option>
                          <option> Alemania </option>
                          <option> Argentina </option>
                          <option> España </option>
                          <option> etc </option>
                        </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputApellido1">Comunidad Autónoma</label>
                        <select class="form-control">
                          <option> - Comunidad Autónoma- </option>
                          <option> Andalucia </option>
                          <option> Asturias </option>
                          <option> etc </option>
                        </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputApellido2">Población</label>
                        <select class="form-control">
                          <option> - Población - </option>
                          <option> Algete </option>
                          <option> Alcobendas </option>
                          <option> etc </option>
                        </select>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>

        <!-- TAB DATOS ROLES DE CONTACTO -->
        <div class="tab-pane fade" id="nav-roles3" role="tabpanel" aria-labelledby="nav-roles-tab3">
          <h4 style="padding: 16px"> En proceso de desarrollo </h4>
        </div>

        <!-- TAB NOTIFICACIONES -->
        <div class="tab-pane fade" id="nav-notis3" role="tabpanel" aria-labelledby="nav-contact-tab3">
          <h4 style="padding: 16px"> En proceso de desarrollo </h4>
        </div>


      </div>




    </div>

  </div>
</template>

<script>
export default {
  name: 'nuevoContacto2',
  data () {
    return {
      nuevoContacto : {},
      showAlerta : false
    }
  },
  mounted() {

  },
  methods:{
    guardarCambios : function() {
      this.showAlerta = true;
      this.$emit('alerta',this.showAlerta)
    }
  },
  computed:{
  },
  props: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    padding-bottom: 200px;
  }

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

  .nav-tabs .nav-link{
    color: #b0b3b3;
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .mb-0{
    display: flex;
    justify-content: space-between;
  }

  .card-header{
    padding: 0;
  }

  .card-body{
    padding: 0 16px 0 16px;
  }

  form{
    margin:16px 0 16px 0;
  }

  form .form-group{
    text-align: left;
  }

  form .form-group label{
    font-size: 12px;
    color: #00000087;
  }

  .labelCheck{
    font-size: 14px;
  }




</style>
