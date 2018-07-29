<template>
  <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edición de {{contacto.nombre + ' ' + contacto.apellido1 + ' ' + contacto.apellido2}}</h5>
          <button type="button" v-if="editable" v-on:click="editable = false" class="btn btn-secondary"><i class="fas fa-pen"></i>Editar contacto</button>
          <button type="button" v-if="!editable" v-on:click="guardarCambios()" data-dismiss="modal" class="btn btn-secondary"><i class="fas fa-save"></i>Guardar cambios</button>


          <!--
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          -->

        </div>
        <div class="modal-body">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="true">Datos Generales</a>
              <a class="nav-item nav-link" id="nav-roles-tab" data-toggle="tab" href="#nav-roles" role="tab" aria-controls="nav-roles" aria-selected="false">Roles de contacto</a>
              <a class="nav-item nav-link" id="nav-notis-tab" data-toggle="tab" href="#nav-notis" role="tab" aria-controls="nav-notis" aria-selected="false">Recepción de notificaciones</a>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <label for="inputNombre">Nombre</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputNombre" placeholder="Nombre" v-model="contacto.nombre">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputApellido1">Apellido 1</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputApellido1" placeholder="Apellido 1" v-model="contacto.apellido1">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputApellido2">Apellido 2</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputApellido2" placeholder="Apellido 2" v-model="contacto.apellido2">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputNif">NIF</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputNif" placeholder="NIF" v-model="contacto.nif">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputIdContacto">ID Contacto</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputIdContacto" placeholder="ID Contacto" v-model="contacto.idContacto">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputUUID">Empresa</label>
                    <select class="form-control form-control" v-model="contacto.empresa.nombre" :disabled="editable">
                      <option value=""> - Seleccione una Empresa - </option>
                      <option value="Acme Subsidiaria"> Acme Subsidiaria </option>
                      <option value="Autoridad Competencia Mercados Españoles"> Autoridad Competencia Mercados Españoles </option>
                      <option value="Empresa ejemplo"> Empresa ejemplo </option>
                    </select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputIdContacto">Teléfono</label>
                    <div style="display: flex">
                      <h5><span class="badge badge-secondary"><span>617069886<button v-if="!editable" class="btn btn-sm btn-secondary">x</button></span></span></h5>
                      <h5><span class="badge badge-secondary"><span>617069886<button v-if="!editable" class="btn btn-sm btn-secondary">x</button></span></span></h5>
                      <h5><span class="badge badge-secondary"><span>617069886<button v-if="!editable" class="btn btn-sm btn-secondary">x</button></span></span></h5>
                    </div>
                    <div class="input-group mb-3" v-if="!editable">
                      <input type="text" class="form-control" placeholder="Nuevo teléfono" aria-label="Recipient's username" aria-describedby="button-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-plus"></i> Añadir Teléfono</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="form-group col-md-12">
                    <label for="inputIdContacto">Correo Electrónico</label>
                    <div style="display: flex">
                      <h5><span class="badge badge-secondary"><span>cnmc@gmail.com<button v-if="!editable" class="btn btn-sm btn-secondary">x</button></span></span></h5>
                      <h5><span class="badge badge-secondary"><span>cnmc@testtest.com<button v-if="!editable" class="btn btn-sm btn-secondary">x</button></span></span></h5>
                    </div>
                    <div class="input-group mb-3" v-if="!editable">
                      <input type="text" class="form-control" placeholder="Nuevo correo electrónico" aria-label="Recipient's username" aria-describedby="button-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-plus"></i> Añadir Correo Electrónico</button>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputUUID">UUID de la solicitud (Opcional)</label>
                    <input type="text" :disabled="editable" class="form-control" id="inputUUID" placeholder="UUID de la solicitud (Opcional)" v-model="contacto.uuid">
                  </div>
                </div>

                <hr>
                <div class="form-group col-md-12" style="padding:0">
                  <label for="inputNombre">Estado de la verificación</label>
                  <div style="display: flex;justify-content: space-evenly;">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" :disabled="editable">
                      <label class="form-check-label labelCheck" for="exampleRadios1">
                        <i class="fas fa-check"></i> Verificado
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" :disabled="editable">
                      <label class="form-check-label labelCheck" for="exampleRadios2">
                        <i class="fas fa-clock"></i> Pendiente
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" :disabled="editable">
                      <label class="form-check-label labelCheck" for="exampleRadios3">
                        <i class="fas fa-times"></i> Denegado
                      </label>
                    </div>
                  </div>
                </div>



              <hr>


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
                            <input type="text" :disabled="editable" class="form-control" id="inputDireccion" placeholder="Dirección" v-model="contacto.nombre">
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputApellido1">Piso</label>
                            <input type="text" :disabled="editable" class="form-control" id="inputPiso" placeholder="Piso" v-model="contacto.apellido1">
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputApellido2">CP</label>
                            <input type="text" :disabled="editable" class="form-control" id="inputCP" placeholder="Código Postal" v-model="contacto.apellido2">
                          </div>
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-4">
                            <label for="inputNombre">País</label>
                            <select class="form-control" :disabled="editable">
                              <option> - País - </option>
                              <option> Alemania </option>
                              <option> Argentina </option>
                              <option> España </option>
                              <option> etc </option>
                            </select>
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputApellido1">Comunidad Autónoma</label>
                            <select class="form-control" :disabled="editable">
                              <option> - Comunidad Autónoma- </option>
                              <option> Andalucia </option>
                              <option> Asturias </option>
                              <option> etc </option>
                            </select>
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputApellido2">Población</label>
                            <select class="form-control" :disabled="editable">
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
            <div class="tab-pane fade" id="nav-roles" role="tabpanel" aria-labelledby="nav-roles-tab">


              <h4 style="padding: 16px"> En proceso de desarrollo </h4>


            </div>
            <div class="tab-pane fade" id="nav-notis" role="tabpanel" aria-labelledby="nav-contact-tab">
              <h4 style="padding: 16px"> En proceso de desarrollo </h4>
            </div>
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" v-on:click="editable = true" data-dismiss="modal"><i class="fas fa-times"></i>Cerrar</button>
          <button type="button" v-if="editable" v-on:click="editable = false" class="btn btn-secondary"><i class="fas fa-pen"></i>Editar contacto</button>
          <button type="button" v-if="!editable" v-on:click="guardarCambios()" data-dismiss="modal" class="btn btn-secondary"><i class="fas fa-save"></i>Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editorContacto',
  data () {
    return {
      contactoEditado : {},
      editable : true,
      showAlerta : false,
    }
  },
  mounted() {

  },
  methods:{

    alerta:function(){
      this.showAlerta = true;
      this.$emit('alerta',this.showAlerta)
    },

    guardarCambios : function() {
      this.editable = true;
      this.showAlerta = true;
      this.$emit('alerta',this.showAlerta)
    }
  },
  computed:{
  },
  props: {
    contacto:Object
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    cursor: pointer;
  }

  .card-body{
    padding: 0 16px 0 16px;
  }

  .btn-link{
    color: #495057;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent
  }

  .btn-link:hover {
    color: #2c3135;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent
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

  .form-check{
    text-align: start;
  }

  .form-check label{
    margin-left: 6px;
  }

  .labelCheck{
    font-size: 14px !important;
  }
  .badge-secondary {
    color: #fff;
    margin-right: 6px;
  }

</style>
