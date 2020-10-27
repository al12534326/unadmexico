<?php 
session_start();
require '../modelos/conexion.php';
require '../modelos/cargamaster.php';

    switch($_GET['funcion'])
    {

        case 'guardar':

            $res= [];

            $usuario =  $_SESSION['Vusuario'];


            $vins = json_decode($_GET['parametros']);


           

            $stmt = $conn->query(str_replace( array("{{vins}}","{{usuario}}"), array($vins, $usuario), $ValidarrVinsMaster));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
             array_push ($res, $row);
            }
            echo json_encode($res);
        break;

        case 'insertarCargaMaster':

        $res= [];
        $usuario =  $_SESSION['Vusuario'];

       $vins = json_decode($_GET['parametros']);
       $id = json_decode($_GET['id']);


        $stmt = $conn->query(str_replace( array("{{vins}}","{{id}}","{{usuario}}"), array($vins, $id, $usuario), $insertarCargaMaster));

        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
         array_push ($res, $row);
        }
        echo json_encode($res);
    break;




        
    }


