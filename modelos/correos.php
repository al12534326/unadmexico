<?php
     $getCorreos = 'exec ElistarCorreos {{pagina}} , {{renglones}}';
     $insertarCorreo = "exec EinsertarCorreos {{idEmpresa}},'{{correo}}','{{usuario}}'";
     $modificarCorreo = "exec EModificarCorreos {{id}},{{idEmpresa}},'{{correo}}','{{usuario}}'";
     $eliminarCorreo = "exec EEliminarCorreo {{id}},'{{usuario}}'";


