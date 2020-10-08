<?php
    $getCatalogoPersonal = 'exec EcatalogoPersonal';
	$getPersonal = 'exec ElistarPersonal  {{pagina}} , {{renglones}}';
	$insertarPersonal = "exec EinsertarPersonal '{{nombre}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}}";
    $modificarPersonal = "exec EactualizarPersonal {{id}},'{{nombre}}','{{apellidoPaterno}}','{{apellidoMaterno}}',{{idEmpresa}}";
    $eliminarPersonal = "exec EeliminarPersonal {{id}} ";
	