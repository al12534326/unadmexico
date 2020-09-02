<?php 
require '../modelos/conexion.php';
require '../modelos/categorias.php';

    switch($_GET['funcion'])
    {
        case 'catalogo_categorias': 
         
            $res = [];
           
            $stmt = $conn->query($getCatalogoCategorias);  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);

        break;

       
        case 'listar_categorias':

            $parametros = explode(',', $_GET['parametros']);
        

            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getCategorias));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
            
        break;

        case 'guardar_categoria': 

            $parametros = explode(',', $_GET['parametros']);

           
            $nombre = urldecode ($parametros [0]);
                        
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{nombre}}"), array( $nombre), $insertarCategoria));  
            
        break;


        case 'modificar_categoria': 
            
             $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);
            
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}"), array($id, $nombre), $modificarCategoria));  
            
        break;

        case 'eliminar_categoria': 

             $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar categoria = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarCategoria));  
            
        break;


        
    }