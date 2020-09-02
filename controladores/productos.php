<?php 
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


        case 'listar_productos':

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

        case 'guardar_producto' :

            $parametros = explode(',', $_GET['parametros']);

            $nombre = urldecode ($parametros [0]);

            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{nombre}}"), array($nombre), $insertaProducto));
            
        break;

        case 'modificar_producto' :

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $nombre = urldecode ($parametros [1]);

            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}"), array($id, $nombre), $modificarProducto));
        break;

        case 'eliminar_producto'  :



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarProducto));

           
        break;


        
    }





