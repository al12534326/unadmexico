<?php
$contraseña = "Inicio1*";
$usuario = "mramirez";
$bd = "aduana_testManuel";
$rutaServidor = "172.30.60.26";

try {
	$conn = new PDO("sqlsrv:server=$rutaServidor,1433;database=$bd", $usuario, $contraseña);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$conn->setAttribute( PDO::SQLSRV_ATTR_QUERY_TIMEOUT, 1 );  
} catch (Exception $e) {
	throw $e;
	echo "Ocurrió un error con la base de datos: " . $e->getMessage();
}