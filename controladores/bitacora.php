<?php 
session_start();
require '../modelos/conexion.php';
require '../modelos/bitacora.php';

    switch($_GET['funcion'])
    {
        case 'listar': 

            $parametros = explode(',', $_GET['parametros']);
        
            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getBitacora));  
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario2 =  $_SESSION['Vusuario'];


            $idrol = urldecode ($parametros [0]);
            $idpersonal = urldecode ($parametros [1]);
            $usuario = urldecode ($parametros [2]);
            $password = $parametros [3];
            $email = urldecode ($parametros [4]);
            
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}","{{usuario2}}"), array( $idrol, $idpersonal, $usuario , md5($password), $email,$usuario2 ), $insertaUsuario));  
            
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        
       
            break;

        case 'modificar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario2 =  $_SESSION['Vusuario'];


            $id = urldecode ($parametros [0]);
            $idrol = urldecode ($parametros [1]);
            $idpersonal = urldecode ($parametros [2]);
            $usuario = urldecode ($parametros [3]);
            $password = $parametros [4];
            $email = urldecode ($parametros [5]);
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}","{{usuario2}}"), array($id, $idrol, $idpersonal, $usuario , md5($password), $email,$usuario2), $modificaUsuario));  
           
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        
       
       
       
            break;

        case 'eliminar'  : 



            $parametros = explode(',', $_GET['parametros']);

            $usuario2 =  $_SESSION['Vusuario'];


            $id = $parametros [0];

           // console.log('Elimnar usuario = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario2}}"), array($id, $usuario2), $eliminarUsuario));  

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

           
        break;


        
    }





