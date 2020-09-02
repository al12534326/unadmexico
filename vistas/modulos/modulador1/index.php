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
                    <center><h1 >Revision Modulador 1</h1><center><br>

                    <div class="table100">
                    <button  style="float:left; display:none;" onclick="Crear(1)" class="buttom">NUEVO</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>
                          <tr class="table100-head">
                            <th class="column1">ID</th>
                            <th class="column2" style="width:100px;">FECHA</th>
                            <th class="column3">EMPRESA</th>
                            <th class="column4">PLACAS</th>
		                        <th class="column5">NO. VIAJE</th>
                            <th class="column6">CANTIDAD</th>
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

                     <br>
                     <br>
                     <br>
                    
                     <section class="edit">
                        <div style="border-style: solid;">
                        <div style="background-color:#242e42;padding-bottom:10px;padding-top:5px;" > <b style="color:white"><span id="titulo"><span></b> </div>
                          <form>
                                      
                                    
                                <div class="grid">
								    <div>
									    <input id="id" name="id" type="hidden">
                                        <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>FECHA:</b></label>
                                        <input name="fecha" type="text"  required autofocus id="fecha"/>
                                        <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>EMPRESA:</b></label>
                                        <input name="empresa" type="text"  required id = "empresa"/>

									    <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>PLACAS:</b></label>
                                        <input name="placas" type="text"  required autofocus id="placas"/>
                                        <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>NO. VIAJE:</b></label>
                                        <input name="noViaje" type="text"  required id = "noViaje"/>

									    <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>CANTIDAD:</b></label>
                                        <input name="cantidad" type="text"  required id = "cantidad"/>
									  
                                        <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>OBSERVACIONES:</b></label>
                                        <input name="observaciones" type="text" id = "observaciones" required />	
                                    </div>
									<div>
									
									<b>LISTA DE VINES </b>
									   <table>
											<thead>
											  <tr class="table100-head">
												<th class="column1">Vin</th>
											  </tr>
											</thead>
											<tbody id ="crpTablaVines">
											</tbody>
										  </table>
									</div>
								</div>	
								<section class="paginacion">
 								    <div id="InsertaModifica">
                                          <ul >
                                            <li><a ><button onclick="AccionAutorizar(1)" class="btn">AUTORIZAR</i></button></a></li>
											<li><a ><button onclick="AccionAutorizar(2)" class="btn">RECHAZAR</i></button></a></li>
                                            <li><a ><button onclick="CancelarRevision1()">CANCELAR</i></button></a></li>
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