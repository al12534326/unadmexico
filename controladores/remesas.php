<?php 
require '../modelos/conexion.php';
require '../modelos/remesas.php';

    switch($_GET['funcion'])
    {
        case 'listar':

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getRemesas));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);


            $idPedimento = urldecode ($parametros [0]);
            $noRemesa = urldecode ($parametros [1]);
            $noOficio = urldecode ($parametros [2]);
            $descripcion = $parametros [3];
            $cantidad = $parametros [3];

            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idPedimento}}","{{noRemesa}}","{{noOficio}}","{{descripcion}}", "{{cantidad}}"), array( $idPedimento, $noRemesa, $noOficio , $descripcion, $idTipoPedimento, $cantidad ), $insertarRemesa));
            
        break;

        case 'modificar' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $idPedimento = urldecode ($parametros [1]);
            $noRemesa = urldecode ($parametros [2]);
            $noOficio = urldecode ($parametros [3]);
            $descripcion = $parametros [4];
            $cantidad = $parametros [5];


            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idPedimento}}","{{noRemesa}}","{{noOficio}}","{{descripcion}}", "{{cantidad}}"), array($id, $idPedimento, $noRemesa, $noOficio , $descripcion, $idTipoPedimento, $cantidad ), $modificarRemesa));
        break;

        case 'eliminar'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarRemesa));

           
        break;


        
    }




