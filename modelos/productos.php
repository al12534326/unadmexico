<?php
    $getProductos = 'exec EcatalogoProductoss';
	$getCatalogoProductos = 'exec EcatalogoProductos {{pagina}} , {{renglones}}';
	
    $insertaProducto = "exec insertaProducto '{{nombre}}','{{usuario}}'";

    $modificarProducto = "exec actualizarProducto {{id}},'{{nombre}}','{{usuario}}' ";
    $eliminarProducto = "exec eliminarProducto {{id}},'{{usuario}}' ";
