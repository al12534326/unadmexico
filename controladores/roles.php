<?php 
session_start();
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

            $usuario =  $_SESSION['Vusuario'];


            $nombre = urldecode ($parametros [0]);

            $error = '0';

            if (empty($nombre) ){
                $msg[0] = 'El Campo rol no puede estar vacio';
             }
 
 
             if(strlen($nombre) > 35) {
                $error = 'El Tamaño del campo es mayor de 35';
             }
 
             if (preg_match('/^[a-zA-Z _-]{5,35}/', $nombre)) {
               
             }else{
                 $error = 'El nombre del rol es invalido se permiten letras espacios numeros y el guion';
             }
 
 
             if ($error == '0'){

            $res = [];

            $stmt = $conn->query(str_replace( array("{{nombre}}","{{usuario}}"), array( $nombre,$usuario), $insertarRol));

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


        case 'modificar':

            $parametros = explode(',', $_GET['parametros']);

            $id = $parametros [0];
            $nombre = urldecode ($parametros [1]);

            $usuario =  $_SESSION['Vusuario'];

            $error = '0';

            if (empty($nombre) ){
                $error = 'El Campo rol no puede estar vacio';
             }
 
 
             if(strlen($nombre) > 35) {
                $error = 'El Tamaño del campo es mayor de 35';
             }
 
             if (preg_match('/^[a-zA-Z _-]{5,35}/', $nombre)) {
               
             }else{
                 $error = 'El nombre del rol es invalido se permiten letras espacios numeros y el guion';
             }
 
 
             if ($error == '0'){


            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}","{{nombre}}","{{usuario}}"), array($id, $nombre,$usuario), $modificarRol));

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

        case 'eliminar':

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];

           // console.log('Elimnar rol = ' . $id);

            $res = [];

            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario}}"), array($id,$usuario), $eliminarRol));

            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

            break;
        
    }