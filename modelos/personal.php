<?php
    $getCatalogoPersonal = 'exec EcatalogoPersonal';
	$getPersonal = 'exec ElistarPersonal  {{pagina}} , {{renglones}}';
	$insertarPersonal = "exec EinsertarPersonal '{{nombre}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}},'{{usuario}}'";
    $modificarPersonal = "exec EactualizarPersonal {{id}},'{{nombre}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}},'{{usuario}}'";
    $eliminarPersonal = "exec EeliminarPersonal {{id}},'{{usuario}}' ";
	