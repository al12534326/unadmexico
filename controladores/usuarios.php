<?php 
require '../modelos/conexion.php';
require '../modelos/usuarios.php';

    switch($_GET['funcion'])
    {
        case 'listar_usuarios': 

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getUsuarios));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar_usuario' : 

            $parametros = explode(',', $_GET['parametros']);

            $idrol = urldecode ($parametros [0]);
            $idpersonal = urldecode ($parametros [1]);
            $usuario = urldecode ($parametros [2]);
            $password = $parametros [3];
            $email = urldecode ($parametros [4]);
            
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}"), array( $idrol, $idpersonal, $usuario , $password, $email, ), $insertaUsuario));  
            
        break;

        case 'modificar_usuario' : 

            $parametros = explode(',', $_GET['parametros']);

            $id = urldecode ($parametros [0]);
            $idrol = urldecode ($parametros [1]);
            $idpersonal = urldecode ($parametros [2]);
            $usuario = urldecode ($parametros [3]);
            $password = $parametros [4];
            $email = urldecode ($parametros [5]);
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}"), array($id, $idrol, $idpersonal, $usuario , $password, $email), $modificaUsuario));  
        break;

        case 'eliminar_usuario'  : 



            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];

            console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}"), array($id), $eliminarUsuario));  

           
        break;


        
    }





