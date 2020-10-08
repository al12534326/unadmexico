<?php
    $getRemesas = 'exec ElistarRemesas {{pagina}} , {{renglones}},{{idEmpresa}}';
    $insertarRemesa = "exec EinsertarRemesa {{idPedimento}}, '{{noRemesa}}','{{noOficio}}','{{descripcion}}',{{cantidad}} ";
    $modificarRemesa = "exec EmodificarRemesa {{id}}, {{idPedimento}}, '{{noRemesa}}','{{noOficio}}','{{descripcion}}',{{cantidad}} ";
    $eliminarRemesa = "exec EeliminarRemesa {{id}} ";
	