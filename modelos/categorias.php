<?php
    $getCatalogoCategorias = 'exec EcatalogoCategorias';
	$getCategorias = 'exec ElistarCategorias {{pagina}} , {{renglones}}';
	$insertarCategoria = "exec insertaCategoria '{{nombre}}','{{usuario}}'";
	$modificarCategoria = "exec actualizarCategoria {{id}}, '{{nombre}}','{{usuario}}'";
	$eliminarCategoria = "exec eliminarCategoria {{id}},'{{usuario}}'";
	
   