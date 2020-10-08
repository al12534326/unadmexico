<?php 
require '../modelos/conexion.php';
require '../modelos/roles.php';

    switch($_GET['funcion'])
    {
        case 'catalogo_roles': 

          
            $res = [];
           
            $stmt = $conn->query($getCatalogoRoles);  
            
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

            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getRoles));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){
                array_push ($res, $row);
            }
            echo json_encode($res);

            break;

        case 'guardar':

            $parametros = explode(',', $_GET['parametros']);


            $nombre = urldecode ($parametros [0]);

            $res = [];

            $stmt = $conn->query(str_replace( array("{{nombre}}"), array( $nombre), $insertarRol));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        

            break;


        case 'modificar':

            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);


            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}"), array($id, $nombre), $modificarRol));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        

            break;

        case 'eliminar':

            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar rol = ' . $id);

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarRol));

            break;
        
    }