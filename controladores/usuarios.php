<?php 
session_start();
require '../modelos/conexion.php';
require '../modelos/usuarios.php';

    switch($_GET['funcion'])
    {
        case 'listar': 

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

        case 'guardar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario2 =  $_SESSION['Vusuario'];


            $idrol = urldecode ($parametros [0]);
            $idpersonal = urldecode ($parametros [1]);
            $usuario = urldecode ($parametros [2]);
            $password = $parametros [3];
            $email = urldecode ($parametros [4]);


            $error = '0';

            if (empty($usuario) || empty($password) || empty($email) ){
                $error = 'Todos los campos son obligatorios';
             }

            if(strlen($usuario) > 35 || strlen($password) > 35 || strlen($email) > 35) {
                $error = 'El Tamaño del campo es mayor de 35';
             }

            if (preg_match('/^[a-zA-Z _-]{5,35}/', $usuario)) {
              
            }else{
                $error = 'El nombre del usuario es invalido se permiten letras espacios numeros y el guion';
            }

            if (preg_match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/', $email)) {
               
            }else{
                $error = 'La direccion de correo no tiene el formato correo@dominio.actividad.pais';
            }


            if ($error == '0'){

           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}","{{usuario2}}"), array( $idrol, $idpersonal, $usuario , md5($password), $email,$usuario2 ), $insertaUsuario));  
            
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

        }else{

            $res = [];

            $r = array();
                               
            $r['error'] = 'true';
            $r['data'] = $error;

            array_push ($res, $r);
                                    
           echo json_encode($res); 
}
        
       
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

            $error = '0';

            if (empty($usuario) || empty($password) || empty($email) ){
                $error = 'Todos los campos son obligatorios';
             }

            if(strlen($usuario) > 35 || strlen($password) > 35 || strlen($email) > 35) {
                $error = 'El Tamaño del campo es mayor de 35';
             }

            if (preg_match('/^[a-zA-Z _-]{5,35}/', $usuario)) {
              
            }else{
                $error = 'El nombre del usuario es invalido se permiten letras espacios numeros y el guion';
            }

            if (preg_match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/', $email)) {
               
            }else{
                $error = 'La direccion de correo no tiene el formato correo@dominio.actividad.pais';
            }


            if ($error == '0'){

            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idrol}}","{{idpersonal}}","{{usuario}}","{{password}}","{{email}}","{{usuario2}}"), array($id, $idrol, $idpersonal, $usuario , md5($password), $email,$usuario2), $modificaUsuario));  
           
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 
        }else{

            $res = [];

            $r = array();
                               
            $r['error'] = 'true';
            $r['data'] = $error;

            array_push ($res, $r);
                                    
           echo json_encode($res); 
}
        
      
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





