<?php 
session_start(); 
require '../modelos/conexion.php';
require '../modelos/cargadiaria.php';

    switch($_GET['funcion'])
    {

        case 'guardar':

            $res= [];
            $usuario =  $_SESSION['Vusuario'];


            $vins = json_decode($_GET['parametros']);

            $stmt = $conn->query(str_replace( array("{{vins}}","{{usuario}}"), array($vins,$usuario), $InsertarVins));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
             array_push ($res, $row);
            }
            echo json_encode($res);
        break;

        
    }


