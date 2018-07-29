
<template>
  <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <!-- CONTENEDOR MODAL -->
      <div class="modal-content">

        <!-- TITULO MODAL -->
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">Nuevo contacto</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- CUERPO DEL MODAL -->
        <div class="modal-body">

          <!--NAVEGACIÓN TABS-->
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab2" data-toggle="tab" href="#nav-general2" role="tab" aria-controls="nav-general" aria-selected="true">Datos Generales</a>
              <a class="nav-item nav-link" id="nav-roles-tab2" data-toggle="tab" href="#nav-roles2" role="tab" aria-controls="nav-roles" aria-selected="false">Roles de contacto</a>
              <a class="nav-item nav-link" id="nav-notis-tab2" data-toggle="tab" href="#nav-notis2" role="tab" aria-controls="nav-notis" aria-selected="false">Recepción de notificaciones</a>
            </div>
          </nav>

          <div class="tab-content" id="nav-tabContent">
            <!-- TAB DATOS GENERALES -->
            <div class="tab-pane fade show active" id="nav-general2" role="tabpanel" aria-labelledby="nav-general-tab2">
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
                  <div class="form-group col-md-12">
                    <label for="inputUUID">Empresa</label>
                    <select required class="form-control form-control">
                      <option value=""> - Seleccione una Empresa - </option>
                      <option value="Acme Subsidiaria"> Acme Subsidiaria </option>
                      <option value="Autoridad Competencia Mercados Españoles"> Autoridad Competencia Mercados Españoles </option>
                      <option value="Empresa ejemplo"> Empresa ejemplo </option>
                    </select>
                    <div class="invalid-feedback">El campo 'Empresa' es obligatorio</div>
                  </div>
                </div>




                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputIdContacto">Teléfono</label>
                    <!--
                    <div style="display: flex">
                      <h5><span class="badge badge-secondary"><span>617069886<button class="btn btn-sm btn-secondary">x</button></span></span></h5>
                      <h5><span class="badge badge-secondary"><span>617069886<button class="btn btn-sm btn-secondary">x</button></span></span></h5>
                      <h5><span class="badge badge-secondary"><span>617069886<button class="btn btn-sm btn-secondary">x</button></span></span></h5>
                    </div>
                    -->
                    <div class="input-group mb-3">
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
                    <div class="input-group mb-3">
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
                    <input type="text" class="form-control" id="inputUUID" placeholder="UUID de la solicitud (Opcional)" v-model="nuevoContacto.uuid">
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
            <div class="tab-pane fade" id="nav-roles2" role="tabpanel" aria-labelledby="nav-roles-tab2">
              <h4 style="padding: 16px"> En proceso de desarrollo </h4>
            </div>

            <!-- TAB NOTIFICACIONES -->
            <div class="tab-pane fade" id="nav-notis2" role="tabpanel" aria-labelledby="nav-contact-tab2">
              <h4 style="padding: 16px"> En proceso de desarrollo </h4>
            </div>
          </div>

        </div>

        <!-- BOTONERA INFERIOR MODAL -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times"></i>Cerrar</button>
          <button type="button" data-dismiss="modal" v-on:click="guardarCambios()" class="btn btn-secondary"><i class="fas fa-save"></i>Guardar nuevo contacto</button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nuevoContacto',
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
