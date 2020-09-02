<?php 
require '../modelos/conexion.php';
require '../modelos/revision1.php';
require '../modelos/vines.php';

    switch($_GET['funcion'])
    {
        case 'revisionModulador1': 

            $parametros = explode(',', $_GET['parametros']);
        
           	$renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getRevisionModulador1));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;
		
		case 'obtener_vines': 

            $parametros = explode(',', $_GET['parametros']);
        
           	$id = $parametros [0];
                       
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $getVinesXtransporte));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;
		
		case 'autorizar_modulador1': 

            $parametros = explode('¬', $_GET['parametros']);
        
           	$id = $parametros [0];
            $modulador = urldecode ($parametros [1]);
            $estado = urldecode ($parametros [2]);
            $obs = urldecode ($parametros [3]);
                       
            $res = [];
			
			//echo str_replace( array("{{id}}","{{modulador}}","{{estado}}","{{observaciones}}"), array($id, $modulador, $estado, $obs), $autorizaModulador1);
           
           $stmt = $conn->query(str_replace( array("{{id}}","{{modulador}}","{{estado}}","{{observaciones}}"), array($id, $modulador, $estado, $obs), $autorizaModulador1));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;
        
    }





