<?php
    $getUsuarios = 'exec ElistarUsuarios {{pagina}} , {{renglones}}';
    $insertaUsuario = "exec EinsertarUsuario {{idrol}},{{idpersonal}},'{{usuario}}','{{password}}','{{email}}','{{usuario2}}' ";
    $modificaUsuario = "exec EactualizarUsuario {{id}},{{idrol}},{{idpersonal}},'{{usuario}}','{{password}}','{{email}}','{{usuario2}}' ";
    $eliminarUsuario = "exec EeliminarUsuario {{id}}, '{{usuario2}}' ";
