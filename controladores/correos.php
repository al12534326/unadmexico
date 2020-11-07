<?php 
session_start();

require '../modelos/conexion.php';
require '../modelos/correos.php';

    switch($_GET['funcion'])
    {
        case 'listar_correos':


            $parametros = explode(',', $_GET['parametros']);
        

            $renglones = $parametros [0];
            $pagina = $parametros[1];
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{pagina}}","{{renglones}}"), array($pagina, $renglones), $getCorreos));
            
			while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
			     array_push ($res, $row);
            }  
            echo json_encode($res);
			

        break;

        case 'guardar' : 

            $parametros = explode(',', $_GET['parametros']);

            $usuario =  $_SESSION['Vusuario'];

           
            $idEmpresa = urldecode ($parametros [0]);
            $correo = urldecode ($parametros [1]);

            $error = '0';

            if (empty($correo) ){
               $msg[0] = 'El Campo Correo no puede estar vacio';
            }


            if(strlen($correo) > 35) {
               $error = 'El Tamaño del campo correo es mayor de 35';
            }

            if (preg_match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/', $correo)) {
              
            }else{
                $error = 'La direccion de correo no tiene el formato correo@dominio.actividad.pais';
            }


            if ($error == '0'){


                              
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{idEmpresa}}","{{correo}}","{{usuario}}"), array( $idEmpresa, $correo,$usuario), $insertarCorreo));

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

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];
            $idEmpresa = urldecode ($parametros [1]);
            $correo = urldecode ($parametros [2]);

            $error = '0';

            if (empty($correo) ){
                $error = 'El Campo Correo no puede estar vacio';
             }
 
 
             if(strlen($correo) > 35) {
                $error = 'El Tamaño del campo correo es mayor de 35';
             }
 
             if (preg_match('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/', $correo)) {
               
             }else{
                 $error = 'La direccion de correo no tiene el formato correo@dominio.actividad.pais';
             }
 
 
             if ($error == '0'){
            
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{idEmpresa}}","{{correo}}","{{usuario}}"), array($id, $idEmpresa, $correo, $usuario), $modificarCorreo));

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

            $usuario =  $_SESSION['Vusuario'];

            $id = $parametros [0];

            //console.log('Elimnar empresa = ' . $id);
           
            $res = [];
           
            $stmt = $conn->query(str_replace( array("{{id}}","{{usuario}}"), array($id, $usuario), $eliminarCorreo));
            
            while ( $row = $stmt->fetch( PDO::FETCH_ASSOC ) ){  
                array_push ($res, $row);
           }  
           echo json_encode($res); 

            

           
        break;


        
    }





