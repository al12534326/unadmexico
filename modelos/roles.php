<?php
    $getCatalogoRoles = 'exec EcatalogoRoles';
	$getRoles = 'exec ElistaRoles {{pagina}} , {{renglones}}';
	$insertarRol = "exec EinsertaRol '{{nombre}}'";
	$modificarRol = "exec actualizarRol {{id}}, '{{nombre}}'";
	$eliminarRol = "exec EeliminaRol {{id}}";
	