<?php
    $getCatalogoEmpresas = 'exec EcatalogoEmpresas';
    $getEmpresas = 'exec ExlistarEmpresa {{pagina}} , {{renglones}}';
    $insertaEmpresa = "exec EinsertaEmpresa '{{nombre}}','{{razon}}','{{patente}}',{{categoria}} ";
    $modificaEmpresa = "exec EactualizarEmpresa {{id}},'{{nombre}}','{{razon}}','{{patente}}',{{categoria}} ";
    $eliminarEmpresa = "exec EeliminarEmpresa {{id}} ";
