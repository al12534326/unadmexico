<?php
$getCatalogoPedimentos = 'exec EcatalogoPedimentos';

$getCatalogoPedimentosxEmpresa = 'exec EcatalogoPedimentosXEmpresa {{idEmpresa}}';

$getPedimentos = 'exec ElistarPedimentos {{pagina}} , {{renglones}}';
$insertarPedimento = "exec insertarPedimento '{{noPedimento}}', {{idProducto}},{{idEmpresa}},{{idTipoPedimento}},'{{usuario}}' ";
$modificarPedimento = "exec actualizarPedimento {{id}}, '{{noPedimento}}',{{idProducto}},{{idEmpresa}},{{idTipoPedimento}},'{{usuario}}' ";
$eliminarPedimento = "exec EeliminarPedimento {{id}},'{{usuario}}' ";