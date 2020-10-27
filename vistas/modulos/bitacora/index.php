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
                    <center><h1 >BITACORA</h1><center><br>

                    <div class="table100">
                    <button id="btnNuevo" name="btnNuevo" style="float:left;" onclick="Crear(1)" class="buttom">NUEVO</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">USUARIO</th>
                            <th class="column3">MODULO</th>
                            <th class="column4">ACCION</th>
                            <th class="column5">FECHA</th>
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

                  
                     <section class="edit" style="margin-top:150px; !important">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:30px;padding-top:15px;" > <b style="color:white"><span id="titulo"><span></b> </div>
                          <form>
                                      
                                      <input id="id" name="id" type="hidden">
                                      <input id="idRol" name="idRol" type="hidden">
                                      <input id="idPersonal" name="idPersonal" type="hidden">


                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Rol:</b></label>
                                      <select name="select_roles" id="select_roles">
                                        <option value="value1" selected>Administrador</option> 
                                        <option value="value2">Modulador1</option>
                                        <option value="value3">Modulador2</option>
                                      </select>	

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Personal:</b></label>
                                      <select name="select_personal" id="select_personal">
                                        <option value="value1" selected>Administrador</option> 
                                        <option value="value2">Modulador1</option>
                                        <option value="value3">Modulador2</option>
                                      </select>	

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>USUARIO:</b></label>
                                      <input name="usuario" type="text"  required autofocus id="usuario"  onkeyup="return validarTamaño(event)"/>
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>PASSWORD:</b></label>
                                      <input name="password" type="password"  required id = "password"  onkeyup="return validarTamaño(event)"/>	
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>EMAIL:</b></label>
                                      <input name="email" type="text" id = "email" required onkeyup="return validarTamaño(event)" />	

                                      <section class="paginacion">
                                        
                                        <div id="InsertaModifica">
                                          <ul >
                                            <li><a ><button onclick="AccionGuardar(event)" class="btn">GUARDAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>

                                        <div id="Eliminar" style="display:none;">
                                          <ul >
                                            <li><a ><button onclick="Eliminar(event)" class="btn">ELIMINAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>


                                      </section>
                                      <br>
                                      <div style="display:none;" id="divAlerta" class="alert">
                                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                                        <strong id="txt_alert"></strong> 
                                      </div>

                                      <div style="display:none;" id="divAlerta2" class="alert">
                                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                                        <strong>El maximo de caracteres para este campo es de 35</strong> 
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
          <div class="notification">
	    <span class="icon">
	        <i class=""></i>
	    </span>
          <span class="text"></span>
          <span class="close"><i class="fa fa-close"></i></span>
      </div>
    </body>
    <!-- Global Resource-->
      <script src="../../esqueleto/globalresource/js/index.js"></script>
    <!-- Global Resource-->

    <!-- Local Resource-->
    <script src="./localresource/js/index.js"></script>
     <!-- Local Resource-->
</html>