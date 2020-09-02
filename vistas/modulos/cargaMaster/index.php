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
                    <center><h1>Carga Master</h1><center><br>

                    <div class="table100">
                    <!--<button  style="float:left;" onclick="CrearUsuario(1)" class="buttom">NUEVO</button>-->
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid; display:none" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">ROL</th>
                            <th class="column3">PERSONAL</th>
                            <th class="column4">USUARIO</th>
                            <th class="column5">EMAIL</th>
                            <th class="column6">ACCIONES</th>
                          </tr>
                        </thead>
                        <tbody id ="crpTablaUsuarios">
                        </tbody>
                      </table>
                      <!---->
                          <section class="paginacion">
                          <ul id ="listPaginacion">
                          </ul>
                        </section>
                         <!---->
                     </div>

                     <div id="content-form"  style="display:block">

                    
                     <section class="editUsuario">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:30px;padding-top:15px;" > <b style="color:white"><span id="titlUsuario"><span></b> </div>
                          <form id="formCarga" name ="formCarga">

                      <!--   Tabla -->
                      <input type="hidden" id="idRemesa" name = "idRemesa" value="<?php echo $_GET["idRemesa"]; ?>" />
                      <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">REMESA</th>
                            <th class="column3">OFICIO</th>
                            <th class="column4">CANTIDAD</th>
                           
                          </tr>
                        </thead>
                        <tbody >
                            <tr><td class="column1"><?php echo $_GET["idRemesa"]; ?></td>
                                <td class="column2"><?php echo $_GET["remesa"]; ?></td>
                                <td class="column3"><?php echo $_GET["noOficio"]; ?></td>
                                <td class="column3"><?php echo $_GET["cantidad"]; ?></td>
                            </tr>  
                        </tbody>
                      </table>
                      <!--   Tabla -->

                    
                    <p>
										<label for="my_upload">Seleccione el archivo de excel:</label>
										<!--<input class="botonFileInput" required id="my_upload" name="my_upload" type="file" accept="application/x-msexcel">-->
                    <input type="file" id="my_upload" name="my_upload" accept=".xls, .xlsx"/>
									  </p>

                              </br></br>
                              <label id="jsonObject"></label>
                              <br>
                              <label style="color : red;" id="Aviso"></label>

                                      <section class="paginacion">
                                        
                                        <div style="display:none" id="InsertaModifica" name="insertaModifica">
                                          <ul >
                                            <li id="cargaExcel" name="cargaExcel"><a ><button onclick="btmCargarExcel(event)" class="btn">GUARDAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>

                                        <div id="salirCargaExcel" style="display:none;">
                                          <ul >
                                            <li style="display:none"><a ><button onclick="Cancelar(event)" class="btn">ELIMINAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar(event)">SALIR</i></button></a></li>
                                          </ul>
                                        </div>
                                      </section>
                                      <br>
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
    <script src="./localresource/js/xlsx.full.min.js"></script>
    <script src="./localresource/js/index.js"></script>


     <!-- Local Resource-->
</html>