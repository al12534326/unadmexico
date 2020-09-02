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
                    <center><h1 >REPORTES</h1><center><br>
                    <div style="display:none;">
                       <span id="txt" name = "txt" style="visible:none;">
                      
                       </span>
                    </div>
                    <div class="table100">
                    <table>
                                <tr>
                                  <th>Tipo de reporte</th>
                                  <th>Fecha Inicial</th>
                                  <th>Fecha Final</th>
                                  <th>Buscar</th>
                                </tr>
                                <tr>
                                  <td> <select name="select_reporte" id="select_reporte">
                                  <option value="1">Pedimentos por fecha</option>
                                  <option value="2">Concentado por dia</option>
                                </select></td>
                                  <td> <input type="date" id="desde" name="desde" ></td>
                                  <td><input type="date" id="hasta" name="hasta" ></td>

                                 <td> <button style="color:blue;" onclick="Reportes()">BUSCAR</button></td>
                                 
                                </tr>
                               
                              </table>
                 
                    <div style="display:none" id="content-table" style="border-style: solid;" >
                    <button onclick="bajarExcel('content-table')">Listado de oficios</button>
                   
                     <table>
                        <thead>
                          <tr class="table100-head">
                          <th class="column1">FECHA</th>
                          <th class="column2">FECHA CIERRE</th>
                          <th class="column1">EMPRESA</th>
                          <th class="column2">CANTIDAD</th>
                          <th class="column3">NO.OFICIO</th>
                          <th class="column1">VINS</th>
                          <th class="column2">PENDIENTES</th>
                          <th class="column3">ESTATUS</th>
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