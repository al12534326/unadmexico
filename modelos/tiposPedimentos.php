<?php
    $getCatalogoTiposPedimentos = 'exec EcatalogoTiposPedimentos ';
	$getTiposPedimentos = 'exec ElistarTiposPedimentos {{pagina}} , {{renglones}}';
	$insertarTiposPedimentos = "exec insertaTipoPedimento '{{nombre}}','{{usuario}}'";
	$modificarTiposPedimentos = "exec actualizarTipoPedimento {{id}},'{{nombre}}','{{usuario}}'";
	$eliminarTiposPedimentos = "exec eliminarTipoPedimento {{id}},'{{usuario}}'";
   