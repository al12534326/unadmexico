<?php 
session_start();
require '../modelos/conexion.php';
require '../modelos/productos.php';

    switch($_GET['funcion'])
    {

        case 'catalogo':

            $res = [];

            $stmt = $conn->query($getProductos);

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
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getCatalogoProductos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' :

            $parametros = explode(',', $_GET['parametros']);

            $nombre = urldecode ($parametros [0]);

            $usuario =  $_SESSION['Vusuario'];

            
            $res = [];

            $stmt = $conn->query(str_replace( array("{{nombre}}","{{usuario}}"), array($nombre,$usuario), $insertaProducto));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        

          //  if ($nombre != '' ){
          //      $stmt = $conn->query(str_replace( array("{{nombre}}"), array($nombre), $insertaProducto));
         //   }else{
         //       $res = "error el campo al guardar el registro";
         //   }
           
           
            
        break;

        case 'modificar' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $nombre = urldecode ($parametros [1]);

            $usuario =  $_SESSION['Vusuario'];

            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}","{{usuario}}"), array($id, $nombre,$usuario), $modificarProducto));
       
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        
       
            break;

        case 'eliminar'  :

        
            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            $usuario =  $_SESSION['Vusuario'];

           // console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario}}"), array($id,$usuario), $eliminarProducto));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

           
        break;


        
    }





