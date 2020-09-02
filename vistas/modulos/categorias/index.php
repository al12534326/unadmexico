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
                    <center><h1>CATEGORIAS</h1><center><br>

                    <div class="table100">
                    <button  style="float:left;" onclick="CrearUsuario(1)" class="buttom">NUEVA</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2">FECHA</th>
                            <th class="column3">CATEGORIA</th>
                            <th class="column4">ACCIONES</th>
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

                     <div id="content-form"  style="display:none">

                     <br>
                     <br>
                     <br>
                     <br>
                     <br>
                     <br>
                     <section class="editUsuario">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:30px;padding-top:15px;" > <b style="color:white"><span id="titlUsuario"><span></b> </div>
                          <form>
                                      
                                      <input id="id" name="id" type="hidden">

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>CATEGORIA:</b></label>
                                      <input name="categoria" type="text"  required autofocus id="categoria"/>


                                      <section class="paginacion">
                                        
                                        <div id="InsertaModifica">
                                          <ul >
                                            <li><a ><button onclick="AccionGuardarUsuario()" class="btn">GUARDAR</i></button></a></li>
                                            <li><a ><button onclick="CancelarUsuario()">CANCELAR</i></button></a></li>
                                          </ul>
                                        </div>

                                        <div id="Eliminar" style="display:none;">
                                          <ul >
                                            <li><a ><button onclick="EliminarUsuario()" class="btn">ELIMINAR</i></button></a></li>
                                            <li><a ><button onclick="CancelarUsuario()">CANCELAR</i></button></a></li>
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