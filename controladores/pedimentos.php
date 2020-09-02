<?php 
require '../modelos/conexion.php';
require '../modelos/pedimentos.php';

    switch($_GET['funcion'])
    {


        case 'catalogo':


            $res = [];

            $stmt = $conn->query($getCatalogoPedimentos);

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);


            break;




        case 'listar':

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getPedimentos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);


            $pedimento = urldecode ($parametros [0]);
            $idProducto = urldecode ($parametros [1]);
            $idEmpresa = urldecode ($parametros [2]);
            $idTipoPedimento = $parametros [3];

            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{noPedimento}}","{{idProducto}}","{{idEmpresa}}","{{idTipoPedimento}}"), array( $pedimento, $idProducto, $idEmpresa , $idTipoPedimento ), $insertarPedimento));
            
        break;

        case 'modificar' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $pedimento = urldecode ($parametros [1]);
            $idProducto = urldecode ($parametros [2]);
            $idEmpresa = urldecode ($parametros [3]);
            $idTipoPedimento = $parametros [4];


            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{noPedimento}}","{{idProducto}}","{{idEmpresa}}","{{idTipoPedimento}}"), array($id, $pedimento, $idProducto, $idEmpresa , $idTipoPedimento), $modificarPedimento));
        break;

        case 'eliminar'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarPedimento));

           
        break;


        
    }





