<?php
    $getUsuarios = 'exec ElistarUsuarios {{pagina}} , {{renglones}}';
    $insertaUsuario = "exec EinsertarUsuario {{idrol}},{{idpersonal}},'{{usuario}}','{{password}}','{{email}}' ";
    $modificaUsuario = "exec EactualizarUsuario {{id}},{{idrol}},{{idpersonal}},'{{usuario}}','{{password}}','{{email}}' ";
    $eliminarUsuario = "exec EeliminarUsuario {{id}} ";
