<?php
    $getCatalogoPedimentos = 'exec EcatalogoPedimentos';
	$getPedimentos = 'exec ElistarPedimentos {{pagina}} , {{renglones}}';
    $insertarPedimento = "exec insertarPedimento '{{noPedimento}}', {{idProducto}},{{idEmpresa}},{{idTipoPedimento}} ";
    $modificarPedimento = "exec actualizarPedimento {{id}}, '{{noPedimento}}',{{idProducto}},{{idEmpresa}},{{idTipoPedimento}} ";
    $eliminarPedimento = "exec EeliminarPedimento {{id}} ";
