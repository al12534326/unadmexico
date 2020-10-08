<?php
    $getCatalogoCategorias = 'exec EcatalogoCategorias';
	$getCategorias = 'exec ElistarCategorias {{pagina}} , {{renglones}}';
	$insertarCategoria = "exec insertaCategoria '{{nombre}}'";
	$modificarCategoria = "exec actualizarCategoria {{id}}, '{{nombre}}'";
	$eliminarCategoria = "exec eliminarCategoria {{id}}";
	
   