<?php
    $getProductos = 'exec EcatalogoProductoss';
	$getCatalogoProductos = 'exec EcatalogoProductos {{pagina}} , {{renglones}}';
	
    $insertaProducto = "exec insertaProducto '{{nombre}}'";

    $modificarProducto = "exec actualizarProducto {{id}},'{{nombre}}' ";
    $eliminarProducto = "exec eliminarProducto {{id}} ";
