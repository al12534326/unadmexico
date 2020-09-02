<?php
    $getCorreos = 'exec ElistarCorreos {{pagina}} , {{renglones}}';
    $insertarCorreo = "exec EinsertarCorreos {{idEmpresa}},'{{correo}}'";
    $modificarCorreo = "exec EmodificarCorreo {{id}},{{idEmpresa}},'{{correo}}'";
    $eliminarCorreo = "exec EEliminarCorreo {{id}} ";
