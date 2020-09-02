<?php
    $getRevisionAutomax = 'exec CRevision3 {{pagina}} , {{renglones}}';
	$editAutomax = 'exec Cedicion1  {{id}}';
	$aceptaRechaza = "exec AccionesModulador {{modulador}}, {{accion}}, {{id}},'{{observaciones}}'";
	
	$getVinesXtransporte = 'exec CVinesxTransoprte {{id}}';
	
	$autorizaAutomax = "exec AccionesModulador {{id}},{{modulador}},{{estado}},'{{observaciones}}'";