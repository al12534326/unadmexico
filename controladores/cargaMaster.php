<?php 
require '../modelos/conexion.php';
require '../modelos/cargamaster.php';

    switch($_GET['funcion'])
    {

        case 'guardar':

            $res= [];


            $vins = json_decode($_GET['parametros']);


            $stmt = $conn->query(str_replace( array("{{vins}}"), array($vins), $ValidarrVinsMaster));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
             array_push ($res, $row);
            }
            echo json_encode($res);
        break;

        case 'insertarCargaMaster':

        $res= [];

       $vins = json_decode($_GET['parametros']);
       $id = json_decode($_GET['id']);


        $stmt = $conn->query(str_replace( array("{{vins}}","{{id}}"), array($vins, $id), $insertarCargaMaster));

        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
         array_push ($res, $row);
        }
        echo json_encode($res);
    break;




        
    }


