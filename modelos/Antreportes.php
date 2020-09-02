<?php
    $getReporteOficioPorFecha= 'exec reportePedimentosOficiosXfechaX {{pagina}} , {{renglones}}';
    $insertarRemesa = "exec EinsertarRemesa {{idPedimento}}, '{{noRemesa}}','{{noOficio}}','{{descripcion}}',{{cantidad}} ";
    $modificarRemesa = "exec EmodificarRemesa {{id}}, {{idPedimento}}, '{{noRemesa}}','{{noOficio}}','{{descripcion}}',{{cantidad}} ";
    $eliminarRemesa = "exec EeliminarRemesa {{id}} ";
	