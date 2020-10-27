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
                    <center><h1 >REMESAS</h1><center><br>

                    <div class="table100">
                    <button id="btnNuevo" name="btnNuevo" style="float:left;" onclick="Crear(1)" class="buttom">NUEVA</button>
                    <br>
                    <br>

                    <div id="content-table" style="border-style: solid;" >
                     <table>
                        <thead>


                          <tr class="table100-head">
                            <th style="width:10px; text-align:left; padding-left:0px;">ID</th>
                            <th style="width:50px; text-align:left;">EMPRESA</th>
                            <th style="width:20px; text-align:left;">REMESA</th>
                            <th style="width:50px; text-align:left;">OFICIO</th>
                            <th style="width:50px; text-align:left;">FECHA</th>
                            <th style="width:50px; text-align:left;">DESCRIPCION</th>
                            <th style="width:10px; text-align:left;">CANTIDAD</th>
                            <th style="width:300px; text-align:left;">PEDIMENTO</th>
                            <th style="width:50px; text-align:left;">FECHA</th>
                            <th style="width:100px; text-align:left;">ACCIONES</th>
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
                                      <input id="idEmpresa" name="idEmpresa" type="hidden" value="<?php echo $_SESSION["idEmpresa"] ?>">
                                     
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>Pedimento:</b></label>
                                      <select name="select_pedimento" id="select_pedimento">
                                        <option value="value1" selected>SSA</option>
                                        <option value="value2">Amports</option>
                                      </select>

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>NO. REMESA:</b></label>
                                      <input name="remesa" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required autofocus id="remesa"/>

                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>OFICIO:</b></label>
                                      <input name="oficio" type="text" id = "oficio" required onblur ="quitarSimbolos()"  onkeypress="return sololetras(event)" onkeyup="return validarTamaño(event)"/>
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>DESCRIPCION:</b></label>
                                      <input name="descripcion" type="text" id = "descripcion" required onblur ="quitarSimbolos()" onkeypress="return sololetras(event)" onkeyup="return validarTamaño(event)"/>
                                      <label style="float:left; padding-left:5px; margin-bottom:10px;"><b>CANTIDAD:</b></label>
                                      <input name="cantidad" type="number" id="cantidad" required min="1" max="200"/>


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
                                        <strong>El maximo de caracteres es de 35</strong> 
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