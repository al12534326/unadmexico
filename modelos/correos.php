<?php
    $getCorreos = 'exec ElistarCorreos {{pagina}} , {{renglones}}';
    $insertarCorreo = "exec EinsertarCorreos {{idEmpresa}},'{{correo}}'";
    $modificarCorreo = "exec EModificarCorreos {{id}},{{idEmpresa}},'{{correo}}'";
    $eliminarCorreo = "exec EEliminarCorreo {{id}} ";
