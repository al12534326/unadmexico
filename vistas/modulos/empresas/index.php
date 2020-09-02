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
              <div class="container-table100" >  
                <div class="wrap-table100">
                    <center><h1 >EMPRESAS</h1><center><br>

                    <div class="table100">
                    <button id="btnNuevo" name="btnNuevo" style="float:left;" onclick="Crear(1)" class="buttom">NUEVA</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">CATEGORIA</th>
                            <th class="column3">PATENTE</th>
                            <th class="column4">NOMBRE</th>
                            <th class="column5">RAZON SOCIAL</th>
                            <th class="column6">ACCIONES</th>
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

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>CATEGORIA:</b></label>
                                      <select name="select_categorias" id="select_categorias">
                                        <option value="value1" selected>Catergoria</option> 
                                        <option value="value2">Fluidos</option>
                                        <option value="value3">Madrinas</option>
                                      </select>	
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>NOMBRE:</b></label>
                                      <input name="nombre" type="text"  required autofocus id="nombre"/>
                     s                 <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>RAZON SOCIAL:</b></label>
                                      <input name="razon" type="text"  required id = "razon"/>	
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>PATENTE:</b></label>
                                      <input name="patente" type="text" id = "patente" required />	

                                      <section class="paginacion">
                                        
                                        <div id="InsertaModifica">
                                          <ul >
                                            <li><a ><button onclick="AccionGuardar()" class="btn">GUARDAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar()">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>

                                        <div id="Eliminar" style="display:none;">
                                          <ul >
                                            <li><a ><button onclick="Eliminar()" class="btn">ELIMINAR</i></button></a></li>
                                            <li><a ><button onclick="Cancelar()">CANCELAR</i></button></a></li>
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
    <script src="./localresource/js/index.js"></script>
     <!-- Local Resource-->
</html>