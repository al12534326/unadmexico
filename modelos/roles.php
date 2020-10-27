<?php
$getCatalogoRoles = 'exec EcatalogoRoles';
$getRoles = 'exec ElistaRoles {{pagina}} , {{renglones}}';
$insertarRol = "exec EinsertaRol '{{nombre}}','{{usuario}}'";
$modificarRol = "exec actualizarRol {{id}}, '{{nombre}}','{{usuario}}'";
$eliminarRol = "exec EeliminaRol {{id}},'{{usuario}}'";
	