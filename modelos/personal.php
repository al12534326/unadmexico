<?php
    $getCatalogoPersonal = 'exec EcatalogoPersonal';
	$getPersonal = 'exec ElistarPersonal  {{pagina}} , {{renglones}}';
	$insertarPersonal = "exec EinsertarPersonal '{{nombrePersonal}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}}";
    $modificarPersonal = "exec EactualizarPersonal {{id}},'{{nombrePersonal}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}}";
    $eliminarPersonal = "exec EeliminarPersonal {{id}} ";
	