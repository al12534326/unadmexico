<?php include '../../../controladores/seguridad.php'; ?>
<html>
    <head>
      <!-- Global Resource-->
        <LINK href="../../esqueleto/globalresource/css/index.css" rel="stylesheet" type="text/css">
      <!-- Global Resource-->

       <!-- Local Resource-->
       <link rel="stylesheet" href="../../esqueleto/globalresource/fuentes/font-awesome/css/font-awesome.min.css">
       <link rel="stylesheet" href="localresource/css/index.css">
      <!-- Local Resource-->

     
    </head>
    <body>
      <!-- Global Component-->
        <?php require "../../esqueleto/globalresource/img/icons.php";?>
        <?php require "../../esqueleto/aside.php";?>
      <!-- Global Component-->

      <!-- Local Resource-->
      
      <!-- Local Resource-->

          
          <section class="page-content">

             <!-- Global Component-->
             <?php require "../../esqueleto/navbar.php";?>
             <!-- Global Component--> 
            
              <!-- Code Local-->
              <div class="container-table100">  
                <div class="wrap-table100">
                    <center><h1 >PERSONAL</h1><center><br>

                    <div class="table100">
                    <button id="btnNuevo" name="btnNuevo" style="float:left;" onclick="Crear(1)" class="buttom">NUEVO</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">EMPRESA</th>
                            <th class="column3">APELLIDO PATERNO</th>
                            <th class="column3">APELLIDO MATERNO</th>
                            <th class="column3">NOMBRE</th>
                            <th class="column4">ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody id ="crpTabla">
                        </tbody>
                      </table>
                      <!---->
                          <section class="paginacion">
                          <ul id ="listPaginacion">
                          </ul>
                        </section>
                         <!---->
                     </div>

                     <div id="content-form"  style="display:none">

                    
                     <section class="edit">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:30px;padding-top:15px;" > <b style="color:white"><span id="titulo"><span></b> </div>
                          <form>
                                      
                                      <input id="id" name="id" type="hidden">
                                      <input id="idEmpresa" name="idEmpresa" type="hidden">

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>EMPRESA:</b></label>
                                      <select name="select_empresas" id="select_empresas">
                                        <option value="value1" selected>Aduana</option>
                                        <option value="value2">Amports</option>
                                        <option value="value3">SSA</option>
                                      </select>	
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>APELLIDO PATERNO:</b></label>
                                      <input name="apellidoPaterno" type="text"  required autofocus id="apellidoPaterno"/>
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>APELLIDO MATERNO:</b></label>
                                      <input name="apellidoMaterno" type="text"  required autofocus id="apellidoMaterno"/>
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>NOMBRES:</b></label>
                                      <input name="nombre" type="text"  required autofocus id="nombre"/>

                                      <section class="paginacion">
                                        
                                        <div id="InsertaModifica">
                                          <ul >
                                            <li><a ><button onclick="AccionGuardar()" class="btn">GUARDAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>

                                        <div id="Eliminar" style="display:none;">
                                          <ul >
                                            <li><a ><button onclick="Eliminar()" class="btn">ELIMINAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>


                                      </section>
                                      <br>
                                      <div style="display:none;" id="divAlerta" class="alert">
                                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                                        <strong>Todos los campos son obligatorios</strong> 
                                      </div>
                             </form>	
                        </div>
                        </section>
                     </div>
                    </div>
                  </div>
                </div>

            <!-- Code Local-->
             <!-- Global Component-->
              <?php require "../../esqueleto/footer.php";?>
             <!-- Global Component--> 

          </section>
    </body>
    <!-- Global Resource-->
      <script src="../../esqueleto/globalresource/js/index.js"></script>
    <!-- Global Resource-->

    <!-- Local Resource-->
    <script src="./localresource/js/index.js"></script>
     <!-- Local Resource-->
</html>