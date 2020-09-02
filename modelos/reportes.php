<?php
    $getReporteOficioPorFecha= "exec reportePedimentosOficiosXfechaX {{pagina}} , {{renglones}},'{{fechaInicial}}', '{{fechaFinal}}'";

  //  $getReporteOficioPorFecha= 'exec reportePedimentosOficiosXfechaX {{pagina}} , {{renglones}}';


	$getPedimentos = 'exec ElistarPedimentos {{pagina}} , {{renglones}}';
    $insertarPedimento = "exec insertarPedimento '{{noPedimento}}', {{idProducto}},{{idEmpresa}},{{idTipoPedimento}} ";
    $modificarPedimento = "exec actualizarPedimento {{id}}, '{{noPedimento}}',{{idProducto}},{{idEmpresa}},{{idTipoPedimento}} ";
    $eliminarPedimento = "exec EeliminarPedimento {{id}} ";
