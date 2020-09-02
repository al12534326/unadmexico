<?php session_start(); 
require '../modelos/conexion.php';
require '../modelos/reportes.php';

    switch($_GET['funcion'])
    {

        case 'getReporteOficioPorFecha':

        $parametros = explode(',', $_GET['parametros']);
        
        $renglones = $parametros [0];
        $pagina = $parametros[1];
       
        $res = [];
       
        $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones),  $getReporteOficioPorFecha));
        
        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
             array_push ($res, $row);
        }  
        echo json_encode($res);
        
        break;

        
    }


