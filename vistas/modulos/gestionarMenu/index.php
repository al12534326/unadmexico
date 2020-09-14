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
         <div >
            <div >
              
               <br>
               <div>
                  <button  style="float:left; display:none;" onclick="Crear(1)" class="buttom">NUEVO</button>
                  
                  <div id="content-form"  style="display:block;">
                     <br>
                     <br>
                     <br>
                     <section class="edit">
                        <div style="border-style: solid;">
                           <div style="background-color:#242e42;padding-bottom:10px;padding-top:5px;" > <b style="color:white"><span id="titulo"><span></b> </div>
                           <form>
                           <center>
                               <h1 >Gestionar Menu</h1>
                           <center>
                              <div class="grid">
                                 <div>

                                     <table>
                                         <thead>
                                         <tr class="table100-head">
                                             <th class="column1">USUARIOS</th>
                                             <th class="column2"> </th>


                                         </tr>
                                         </thead>
                                         <tbody id ="crpTablaUsuarios">
                                         </tbody>
                                     </table>


                                   
                                 </div>

                                  <div>

                                      <table>
                                          <thead>
                                          <tr class="table100-head">
                                              <th class="column1">Modulos</th>
                                              <th class="column2"> </th>


                                          </tr>
                                          </thead>
                                          <tbody id ="crpTablaModulos">
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