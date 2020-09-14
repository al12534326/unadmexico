<?php 
require '../modelos/conexion.php';
require '../modelos/usuarios.php';

    switch($_GET['funcion'])
    {
        case 'listarUsuarios': 

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query($getUsuarios);  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'listarPermisos': 

        $parametros = explode(',', $_GET['parametros']);
    
        $renglones = $parametros [0];
        $pagina = $parametros[1];
       
        $res = [];
       
        $stmt = $conn->query(str_replace( array("{{idUsuario}}","{{idModulo}}","{{accion}}"), array($pagina, $renglones,$accion), $getPermisos));  
        
        while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
             array_push ($res, $row);
        }  
        echo json_encode($res);
        

        break;

        case 'gestionPermiso' : 

            $parametros = explode(',', $_GET['parametros']);

            $idUsuario = urldecode ($parametros [0]);
            $idModulo = urldecode ($parametros [1]);
            $idPermiso = urldecode ($parametros [2]);
                       
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}"), array( $idrol, $idpersonal, $usuario , md5($password), $email, ), $insertaUsuario));  
            
        break;
        
    }
