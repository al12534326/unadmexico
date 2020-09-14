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
                    <center><h1 >PEDIMENTOS</h1><center><br>

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
                            <th class="column3">TIPO PEDIMENTO</th>
                            <th class="column4">PRODUCTO</th>
                            <th class="column5">NO. PEDIMENTO</th>
                            <th class="column6">FECHA</th>
                            <th class="column7">ACCIONES</th>
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
                                      <input id="idProducto" name="idProducto" type="hidden">
                                      <input id="idEmpresa" name="idEmpresa" type="hidden">
                                      <input id="idTipoPedimento" name="idTipoPedimento" type="hidden">


                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Empresa:</b></label>
                                      <select name="select_empresa" id="select_empresa">
                                        <option value="value1" selected>SSA</option>
                                        <option value="value2">Amports</option>
                                      </select>


                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Tipo de Pedimento:</b></label>
                                      <select name="select_tipoPedimento" id="select_tipoPedimento">
                                          <option value="value1" selected>Madrinas</option>
                                          <option value="value2">Copias Simples</option>
                                      </select>

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Producto:</b></label>
                                      <select name="select_producto" id="select_producto">
                                          <option value="value1" selected>Autos</option>
                                          <option value="value2">Rollos de alambre</option>
                                      </select>


                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>PEDIMENTO:</b></label>
                                      <input name="noPedimento" type="text"  required autofocus id="noPedimento"/>

                                     
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