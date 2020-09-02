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
                    <center><h1>Reportes</h1><center><br>

                    <div class="table100">
                    <!--<button  style="float:left;" onclick="CrearUsuario(1)" class="buttom">NUEVO</button>-->
                    <br>
                    <br>

                     <div id="content-form"  style="display:block">

                     <section class="editUsuario">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:30px;padding-top:15px;" > <b style="color:white"><span id="titlUsuario"><span></b> </div>
                          <form id="formCarga" name ="formCarga">
                                      
                            <p>
                              
									          </p>
                            
                            <div style="overflow-x:auto;">
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
                                  <td> <input type="date" id="desde" name="desde"></td>
                                  <td><input type="date" id="hasta" name="hasta" ></td>

                                 <td> <button style="color:blue;" onclick="Reportes()">BUSCAR</button></td>
                                 
                                </tr>
                               
                              </table>
                            </div>

                            <div id="content-table" style="border-style: solid;" >
                              <table>
                                  <thead>
                                    <tr class="table100-head">
                                      <th class="column1">PEDIMENTO</th>
                                      <th class="column2">CANTIDAD</th>
                                      <th class="column3">NO.OFICIO</th>
                                      <th class="column1">VINS</th>
                                      <th class="column2">PENTIENTES</th>
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