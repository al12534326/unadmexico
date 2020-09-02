<?php
    $getCatalogoTiposPedimentos = 'exec EcatalogoTiposPedimentos ';
	$getTiposPedimentos = 'exec ElistarTiposPedimentos {{pagina}} , {{renglones}}';
	$insertarTiposPedimentos = "exec insertaTipoPedimento '{{nombre}}'";
	$modificarTiposPedimentos = "exec actualizarTipoPedimento {{id}},'{{nombre}}'";
	$eliminarTiposPedimentos = "exec eliminarTipoPedimento {{id}}";
	
   