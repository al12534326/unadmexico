<?php 
require '../modelos/conexion.php';
//require '../modelos/usuarios.php';
require '../modelos/gestionarMenu.php';



    switch($_GET['funcion'])
    {
        case 'listarUsuarios': 

          //  $parametros = explode(',', $_GET['parametros']);
        
          //  $renglones = $parametros [0];
          //  $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query($getUsuarios);  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'listarModulos': 

        $parametros = explode(',', $_GET['parametros']);
    
        $idUsuario = $parametros [0];
              
        $res = [];
  
        $stmt = $conn->query(str_replace( array("{{idUsuario}}"), array($idUsuario), $getModulos));  
        
        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
             array_push ($res, $row);
        }  
        echo json_encode($res);
        

        break;

        case 'asignarPermisos' : 

            $parametros = explode(',', $_GET['parametros']);

            $idUsuario = urldecode ($parametros [0]);
            $idModulo = urldecode ($parametros [1]);
            $idPermiso = urldecode ($parametros [2]);
                       
            $res = [];

                     
            $stmt = $conn->query(str_replace( array("{{idUsuario}}","{{idModulo}}","{{Permiso}}"), array( $idUsuario, $idModulo, $idPermiso), $grabarPermisos));  

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res);
            
        break;
        
    }
