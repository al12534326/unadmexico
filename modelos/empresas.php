<?php
        $getCatalogoEmpresas = 'exec EcatalogoEmpresas';
        $getEmpresas = 'exec ExlistarEmpresa {{pagina}} , {{renglones}}';
        $insertaEmpresa = "exec EinsertaEmpresa '{{nombre}}','{{razon}}','{{patente}}',{{categoria}},'{{usuario}}' ";
        $modificaEmpresa = "exec EactualizarEmpresa {{id}},'{{nombre}}','{{razon}}','{{patente}}',{{categoria}}, '{{usuario}}'";
        $eliminarEmpresa = "exec EeliminarEmpresa {{id}},'{{usuario}}' ";